import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets.js";

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="menu">
      <h1>Explore our menu</h1>
      <p className="menu-p">
        No more menu overwhelm! Filter, search, and customize. We help you find
        the perfect dish for every craving.
      </p> 
      <div className="list-item">
        {menu_list.map((i,key) => {
          return(
            <div className="item" key={key} onClick={()=>{
              setCategory((prev)=>(prev===i.menu_name?"All":i.menu_name));
              console.log(category);
              }
              } >
              <img className={category===i.menu_name?"active":""} src={i.menu_image} alt="" />
              <p>{i.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr></hr>
    
      
    </div>
  );
};

export default ExploreMenu;
