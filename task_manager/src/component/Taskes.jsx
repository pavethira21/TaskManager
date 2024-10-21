import NewT from "./NewT";

export default function Tasks({onAddT,onDeleteT,tasks}){
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 uppercase mb-8">tasks</h2>
        <NewT onAdd={onAddT}/>
        {tasks.length === 0 &&(
            <p className="text-stone-800 my-4">This project does not havetask</p>
        )}
         
        {tasks.length > 0 && 
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map((task)=>(
                <li key={task.id} className="flex justify-between my-4">
            <span>{task.text}</span>
            <button className="text-stone-700 hover:text-red-800" onClick={()=>onDeleteT(task.id)}>Clear</button>
          </li>
            ))}
          
</ul>}
    </section>
}