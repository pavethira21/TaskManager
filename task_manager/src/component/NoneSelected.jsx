import npImage from '../assets/no-projects.png';
import Button from './Button.jsx';

export default function NoneSelected({onStart}){
    return<div className="mt-24 text-center w-2/3">
      <img src={npImage} 
      alt="image not displayed" 
      className='w-16 h-16 object-contain mx-auto'/>
      <h2 className='text-xl font-bold text-stone-500 my-4'>
        no project selected
        </h2>
      <p className='text-stone-400 mb-4'>Select a project or get started with new one </p>
      <p className='mt-8 '>
        <Button onClick={onStart}> Create New Project</Button>
      </p>

    </div>
}