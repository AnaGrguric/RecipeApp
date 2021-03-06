import Star from "../icons/star.svg";
import Time from "../icons/time.svg";
import Portion from "../icons/portion.svg";
import BtnSave from "./BtnSave";
import EmptyState from "./EmptyState";

function Card(props) {
  const recipeArray = props.recipe;
  console.log(recipeArray)

  const filteredRecipeArray = recipeArray.filter((val) => {
    if (props.input === "") {
      return val;
    } else if (val.name.toLowerCase().includes(props.input.toLowerCase())) {
      return val;
    }
    return false;
  });

  return (
    <div>
      <div className="card-row">
        {filteredRecipeArray == 0 ? (
          <EmptyState />
        ) : (
          filteredRecipeArray.map((item, i) => {
            return (
              <div className="card" key={i}>
                <div className="card-img-center">
                  <div
                    style={{ backgroundImage: `url(${item.img})` }}
                    className="recipe-img-round"
                  ></div>
                </div>
                <h6 className="recipe-name">{item.name}</h6>
                <div className="tags">
                  <span className="tag">
                    <img src={Star} alt="star-icon"></img>
                    <p>{item.star}</p>
                  </span>
                  <span className="tag">
                    <p>{item.difficulty}</p>
                  </span>
                  <span className="tag">
                    <img src={Time} alt="time-icon"></img>
                    <p>{item.time}</p>
                  </span>
                  <span className="tag">
                    <img src={Portion} alt="person-icon"></img>
                    <p>{item.portion}</p>
                  </span>
                </div>
                <div className="recipe">
                  <p className="card-text">Ingredients:</p>
                  <ul className="ingredients-list">
                    {item.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                </div>
                <BtnSave onLike={props.onSave}/>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Card;
