import { useState } from "react"
import { useLocation } from "react-router-dom"

type Task = {
    id: number, task: string
}

export default function ToDoList() {
    const [task, setTask] = useState('');
    const [list, setList] = useState<Task[]>([]);

    const location = useLocation();
    const data = location.state;

    const handleSubmit = (event: React.SyntheticEvent) => {
       event.preventDefault();

       if (task.trim() === '') return;

       const newTask: Task = { id: list.length + 1, task };

       setList([...list, newTask]);

       setTask('');
    }
    
    return (
        <>
            <h1>Informações do Login</h1>
            <h3>Email: {data.email}</h3>
        
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Task"
                    placeholder="Digite uma tarefa..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                
                <button type="submit">Adicionar</button>
            </form>

            <br /><br /><hr /><br /><br />

            {list.map(value => (
                <div key={value.id}>
                    <h1>{value.task}</h1>
                </div>
            ))}
        </>
    )
}