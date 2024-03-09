import { FC, useState } from "react";

import { CircularImage } from "@/components/CircularImage";
import { MaxWidthContainer } from "@/components/MaxWidthContainer";

export type Ingredient = {
  id: string;
  name: string;
  description: string;
  image: string;
};

const INGREDIENTS: Ingredient[] = [
  {
    id: "ingredient_a",
    name: "Estriol",
    description: `Topical Estriol can help maintain skin health by increasing collagen production, retaining and restoring skin moisture, increasing skin firmness, decreasing pore size, decreasing wrinkle depth, and increasing skin elasticity.`,
    image: "/assets/images/ingredients/estriol.png",
  },
  {
    id: "ingredient_b",
    name: "Glycerin",
    description: `Glycerin is a type of carbohydrate known as a sugar alcohol or a polyol. This odorless liquid has a sweet taste and a syrupy consistency. While glycerin occurs naturally in plants through the fermentation of sugars, most of the glycerin nowadays is produced from the hydrolysis of fats and oils.`,
    image: "/assets/images/ingredients/glycerin.png",
  },
  {
    id: "ingredient_c",
    name: "Oleic acid",
    description: `Oleic acid is an omega-9 fatty acid. It can be made by the body. It is also found in foods. Highest levels are found in olive oil and other edible oils. Oleic acid is most commonly used for preventing heart disease and reducing cholesterol.`,
    image: "/assets/images/ingredients/oleic-acid.png",
  },
  {
    id: "ingredient_d",
    name: "Vitamin E",
    description: `E is a nutrient that's important to vision, reproduction, and the health of your blood, brain and skin. Vitamin E also has antioxidant properties.`,
    image: "/assets/images/ingredients/vitamin-e.png",
  },
];

interface ScienceBackedIngredientsSectionProps {}

const ScienceBackedIngredientsSection: FC<
  ScienceBackedIngredientsSectionProps
> = () => {
  const [selectedIngredient, setSelectedIngredient] = useState(INGREDIENTS[0]);

  return (
    <div className="bg-secondary text-primary py-10">
      <MaxWidthContainer>
        <div className="mx-5 flex flex-col lg:flex-row">
          <h2 className="text-[38px] leading-10 font-extrabold mb-8 lg:font-semibold lg:basis-1/3">
            Science-backed ingredients
          </h2>

          <div className="flex flex-col basis-2/3">
            <div className="flex flex-col flex-wrap overflow-x-auto -mr-9 pr-9 lg:mr-0 lg:pr-0">
              <div className="grid grid-rows-1 grid-flow-col gap-5 lg:gap-8">
                {INGREDIENTS.map((ing) => {
                  const { id, name, image } = ing;
                  return (
                    <div
                      key={id}
                      className="w-[78px] lg:w-[140px] cursor-pointer"
                      onClick={() => setSelectedIngredient(ing)}
                    >
                      <CircularImage
                        isActive={selectedIngredient.id === id}
                        text={name}
                        alt={name}
                        src={image}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="mt-5 text-lg font-semibold h-48 leading-relaxed lg:mt-10 lg:text-[22px]">
              {selectedIngredient.description}
            </p>
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export { ScienceBackedIngredientsSection };
