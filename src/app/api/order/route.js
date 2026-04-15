import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const body = await request.json();
  const {
    order,
    totalPrice,
    firstName,
    lastName,
    email,
    tel,
    delivery,
    comment,
    confirm,
    company,
  } = body;

  if (company) {
    console.log("BAD REQUEST");
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }

  if (!order || !Array.isArray(order)) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  const prices = {
    recipeBook: 450,
    hearBook: 400,
    recipeEbook: 250,
  };

  const filteredOrder = order.filter((item) => {
    return (
      prices[item.id] &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0 &&
      item.quantity <= 20
    );
  });

  if (filteredOrder.length === 0) {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }

  const totalPriceFromBackend = filteredOrder.reduce((acc, item) => {
    return acc + prices[item.id] * item.quantity;
  }, 0);

  const orderHTML = filteredOrder
    .map(
      (item) => `
  <li>${item.id === "recipeBook" ? "<strong>Рецепти львівської пані з берегів Босфору:</strong> друкована книга" : item.id === "recipeEbook" ? "<strong>Рецепти львівської пані з берегів Босфору:</strong> електронна книга" : "<strong>Ти почуєш мене тепер:</strong> друкована книга"} — ${item.quantity} шт.</li>
  `,
    )
    .join("");

  function escapeHTML(str) {
    str = str == null ? "" : String(str);
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  const emailHTML = `<h3>Замовлення</h3></br><h4>Повне ім'я: ${escapeHTML(firstName)} ${escapeHTML(lastName)}</h4></br><h4>Деталі замовлення:</h4><ul>${orderHTML}</ul></br><h4>Загальна сума: ${escapeHTML(totalPriceFromBackend)} грн</h4></br><h4>Пошта покупця: ${escapeHTML(email)}</h4></br><h4>Телефон покупця: ${escapeHTML(tel)}</h4></br><h4>Обраний спосіб доставки: ${escapeHTML(delivery)}</h4></br> ${comment ? `<h4>Коментар покупця: ${escapeHTML(comment)}</h4></br>` : ""}`;

  let response;

  let firstNameIsNotValid =
    !firstName || typeof firstName !== "string" || firstName.length < 3;
  let lastNameIsNotValid =
    !lastName || typeof lastName !== "string" || lastName.length < 3;
  const emailRegexp =
    /^[A-Za-z0-9]+([._-]?[A-Za-z0-9]+)*@[A-Za-z0-9]+([.]?[A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
  let emailIsNotValid =
    !email || typeof email !== "string" || !emailRegexp.test(email);
  let telIsNotValid = !tel || typeof tel !== "string" || tel.length > 17;
  let deliveryIsNotValid = !(
    delivery === "Ukrposhta" || delivery === "Nova Poshta"
  );
  let confirmIsNotValid = !confirm || typeof confirm !== "boolean";

  if (
    firstNameIsNotValid ||
    lastNameIsNotValid ||
    emailIsNotValid ||
    telIsNotValid ||
    deliveryIsNotValid ||
    confirmIsNotValid
  ) {
    console.log("Incorrect fields");
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  } else if (comment && comment.length > 100) {
    console.log("Incorrect fields");
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  try {
    response = await resend.emails.send({
      from: "Замовлення з вебсайту Ірини Окур <irenokur@resend.dev>",
      to: "knygyirynaokur@gmail.com",
      subject: "Замовлення",
      html: emailHTML,
    });

    const adminEmailOk = response.data && !response.error;

    if (!adminEmailOk) {
      console.log("Admin email is NOT sent", response.error);
      return NextResponse.json(
        { message: "Email is NOT sent" },
        { status: 500 },
      );
    } else if (adminEmailOk) {
      console.log("Admin email is sent", response.data);
      return NextResponse.json({ message: "Email is sent" }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Sending email is failed",
        details: {
          admin: response,
        },
        error: error.message,
      },
      { status: 500 },
    );
  }
}
