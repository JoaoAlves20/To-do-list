import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/Login";
import ToDoList from "./Components/ToDoList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/to-do-list" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  )
}