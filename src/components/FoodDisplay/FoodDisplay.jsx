import "./FoodDisplay.css";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem.jsx";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <>
      <h2>Top Picks Near you</h2>
      <div className="food-diplay-list">
        {food_list.map((i, key) => {
          {
            if (category === "All" || i.category === category) {
              return (
                <div key={key}>
                  <FoodItem
                    id={i._id}
                    name={i.name}
                    image={i.image}
                    price={i.price}
                    description={i.description}
                  />
                </div>
              );
            }
          }
        })}
      </div>
    </>
  );
};
export default FoodDisplay;
