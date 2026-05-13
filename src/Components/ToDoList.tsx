import { useState } from "react"
import { useLocation } from "react-router-dom"

import { Container, Header, Button, Input, ContainerForm } from "../styles/to_do_list";

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

    const removeTask = (id: number) => {
        const newList = list?.filter((item) => item.id !== id);

        setList(newList);
    }
    
    return (
        <div style={{minHeight: '100vh'}}> 
            <Header>
                <h1>Informações do Login</h1>
                <h3>Email: {data.email}</h3>
            </Header>
            
            <br /><br /><hr /><br /><br />

            <ContainerForm>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="Task"
                        placeholder="Digite uma tarefa..."
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    
                    <Button type="submit">Adicionar</Button>
                </form>
            </ContainerForm>

            <Container>
                {list.map(value => (
                    <div key={value.id}>
                        <span>{value.task}</span>
                        <button onClick={() => removeTask(value.id)}>X</button>
                    </div>
                ))}
            </Container>
        </div>
    )
}