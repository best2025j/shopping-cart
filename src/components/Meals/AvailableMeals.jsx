import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "finest fish and veggies",
    price: 25.99,
  },

  {
    id: "m2",
    name: "Suya",
    description: "beef catfish and pockmeat",
    price: 20.5,
  },

  {
    id: "m3",
    name: "Schnitzel",
    description: "A german specialisty!",
    price: 45.49,
  },

  {
    id: "m4",
    name: "Barbecue",
    description: "American raw, meat",
    price: 15.39,
  },

  {
    id: "m5",
    name: "Vegetable",
    description: "Healthy and green...",
    price: 20.99,
  },
];


const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className="max-w-[940px] mx-auto text-sm w-[90%] mt-6 ">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
