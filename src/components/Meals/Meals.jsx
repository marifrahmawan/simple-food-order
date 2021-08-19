import React from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSumary from './MealsSummary';

const Meals = (props) => {
  return (
    <React.Fragment>
      <MealsSumary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
