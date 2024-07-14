import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { useContext} from "react";
import { StoreContext } from "../../Context/StoreContext";  
const FoodItem = ({ id, name, image, price, description }) => {
    /*const[itemCount,setItemCount]=useState(0); idhar na kar kr cintext provider m krege Taaki itemCount har item k liye baar baar create na ho*/
    const{cartItems,add_to_cart,remove_from_cart}=useContext(StoreContext);
    return (
    <>
      <div className="individual-food-item">
        <div className="food-img">
          <img src={image} alt={name} />
          <div className="quantity">
            {!cartItems[id]?<img onClick={()=>add_to_cart(id)} src={assets. add_icon_white} alt="Add" />
            :
            <div className="after-update-quantity">
                 <img onClick={()=>remove_from_cart(id)} src={assets.remove_icon_red} alt="" />
                 <p>{cartItems[id]}</p>
                 <img onClick={()=>add_to_cart(id)} src={assets.add_icon_green} alt="" />
            </div>
            }    
        </div>
        
        </div>
        <div className="for-padding">
          <div className="food-info">
            <p>{name}</p>
            <img src={assets.rating_starts}></img>
          </div>
          <div className="food-description">
            <p>{description}</p>
          </div>
          <div className="food-price">
            <p>${price}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default FoodItem;
