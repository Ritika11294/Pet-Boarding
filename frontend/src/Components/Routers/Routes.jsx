import { Routes, Route } from "react-router-dom"
import { Home } from "../Home";
import { Entity } from "../Entity";
import { CreateEntity } from "../CreateEntity";
import { NavBar } from "../Navbar";
import { Login } from "../Login"

export const AllRoutes = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/listing/:id" element={<Entity />} />
                <Route path="/listing/create" element={<CreateEntity />} />
                <Route path="/login" element={<Login />} />

            </Routes>
        </>
    )
}