import Heart from "../icons/heart.svg";

function BtnSave() {
  return (
    <button className="btn-save">
      <img src={Heart} alt="heart-icon"></img>
      Save
    </button>
  );
}

export default BtnSave;
