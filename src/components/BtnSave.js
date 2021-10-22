import Heart from "../icons/heart.svg";

function BtnSave(props) {

 

  return (
    <button className="btn-save" onClick={props.onLike}>
      <img src={Heart} alt="heart-icon"></img>
      Like
    </button>
  );
}

export default BtnSave;
