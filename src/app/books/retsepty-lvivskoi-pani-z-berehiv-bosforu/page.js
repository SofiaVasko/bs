import BookRecipe from "@/components/bookRecipe/BookRecipe";

export const metadata = {
  title: "Рецепти львівської пані з берегів Босфору",
  description:
    "“Рецепти львівської пані з берегів Босфору” — це дебютна книжка Ірини Окур, у якій кухня стає мовою пам’яті, гумору й культурного діалогу.",
};

export default function BookRecipePage() {
  return <BookRecipe />;
}
