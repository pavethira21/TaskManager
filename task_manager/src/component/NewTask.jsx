import { useRef } from "react";
import Inputs from "./Inputs.jsx";
import Modal from "./Modal.jsx";

export default function NewTask({onAdd, onCancel}){
    const modal =useRef();
const title = useRef();
const descrip =useRef();
const dd = useRef();



function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDes = descrip.current.value;
    const enteredDd = dd.current.value;
    if (enteredTitle.trim() ==='' || 
    enteredDes.trim()==='' || 
    enteredDd.trim()===''){
        modal.current.open();
        return;
    }
    onAdd({
        title:enteredTitle,
        description:enteredDes,
        dueDate:enteredDd

    });
}

return(
    <>
    <Modal ref={modal} buttonCaption='Okay'>
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>Make sure to enter a valid element</p>
    </Modal>
     <div className="w-[35rem] mt-16">

    <menu className="flex items-center justify-end gap-4 my-4">
        <li><button onClick={onCancel}
        className="test-stone-800 hover:text-stone-950">
            Cancel</button>
            </li>
        <li>
            <button 
        onClick={handleSave}
        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save</button>
            </li>
    </menu>

    <div>
    <Inputs ref={title} type ='text' label="Title"  />
    <Inputs ref={descrip} label='Description' textarea/>
    <Inputs ref={dd} type='date' label="Due Date"  />
    </div>
    

</div></>
)
}