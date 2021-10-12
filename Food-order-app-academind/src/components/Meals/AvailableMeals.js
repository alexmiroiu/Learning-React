import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import classes from './AvailableMeals.module.css';
import { useState, useEffect } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  
  const getMeals = async () => {
    const response = await fetch('https://react-http-e2bde-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
    const data = await response.json();

    let fetchedMeals = [];
    for(const item in data) {
      fetchedMeals.push({
        id: item,
        name: data[item].name,
        description: data[item].description,
        price: data[item].price
      })
    }
    console.log(fetchedMeals)
    setMeals(fetchedMeals)
  }
  useEffect(() => {
    getMeals()

  }, [])
  
    const mealsList = meals.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}></MealItem>)

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>

    );
}

export default AvailableMeals;