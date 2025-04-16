import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // ✅ Step 1: Import PropTypes

const MealBox = ({ meal }) => {
  return (
    <div className="meal-box">
      <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
      <p>{meal.strMeal.slice(0, 25)}</p>
      <Link to={`/meal/${meal.idMeal}`}>
        <i className="ri-arrow-right-up-line"></i>
      </Link>
    </div>
  );
};

// ✅ Step 2: Add prop-types validation
MealBox.propTypes = {
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired
  }).isRequired
};

export default MealBox;
