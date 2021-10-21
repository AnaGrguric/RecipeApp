import { useState } from 'react';
import Plus from '../icons/plus.svg';
import PopupAddRecipe from './PopupAddRecipe';

function BtnAddNew(props){

    const [openPopup, setOpenPopup] = useState(false);
    return(
        <div>
            <button className="btn-add" onClick={() => setOpenPopup(true)}><img src={Plus} alt="plus-icon"></img>Add New</button>
            { openPopup && <PopupAddRecipe onAdd={props.onAdd} close={() => setOpenPopup(false)}/>}
        </div>
    )
}
export default BtnAddNew;