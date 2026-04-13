"use client";
import {
  Section,
  DivRecipe,
  DivIcons,
  Icon,
  DivBook,
  Img,
  PartOne,
  PartTwo,
  PartThree,
} from "@/styled/styledComponents/styledBooks";

import image from "@/assets/iconsRecipe/IrynaOkur.webp";

import icon1 from "@/assets/iconsRecipe/1.webp";
import icon2 from "@/assets/iconsRecipe/2.webp";
import icon3 from "@/assets/iconsRecipe/3.webp";
import icon4 from "@/assets/iconsRecipe/4.webp";
import icon5 from "@/assets/iconsRecipe/5.webp";
import icon6 from "@/assets/iconsRecipe/6.webp";

import partOne from "@/assets/iconsBook/1.jpg";
import partTwo from "@/assets/iconsBook/2.jpg";
import partThree from "@/assets/iconsBook/3.jpg";

const icons = [icon1, icon2, icon3, icon4, icon5, icon6];

export default function Books() {
  return (
    <Section className="wrapper">
      <DivRecipe>
        <DivIcons>
          {icons.map((item, index) => {
            return <Icon key={index} src={item.src} alt="icon" />;
          })}
        </DivIcons>
        <Img
          src={image.src}
          width={160}
          height={245}
          loading="eager"
          alt="Iryna Okur"
        />
      </DivRecipe>
      <DivBook>
        <PartOne
          src={partOne.src}
          width={59}
          height={345}
          loading="eager"
          alt="icon"
        />
        <PartTwo
          src={partTwo.src}
          width={59}
          height={345}
          loading="eager"
          alt="icon"
        />
        <PartThree
          src={partThree.src}
          width={59}
          height={345}
          loading="eager"
          alt="icon"
        />
      </DivBook>
    </Section>
  );
}
