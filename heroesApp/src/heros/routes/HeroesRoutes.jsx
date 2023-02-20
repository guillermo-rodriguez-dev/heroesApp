import { Navigate } from "react-router-dom"
import { Navbar } from "../../ui/components"
import { Route, Routes } from 'react-router-dom'
import Marvel from "../pages/Marvel"
import Dc from "../pages/Dc"




export const HeroesRouters = () => {
    return (
        <>
            <Navbar>

            </Navbar>
            <div className="container">
            <Routes>
                <Route path='marvel' element={<Marvel />}></Route>
                <Route path='dc' element={<Dc />}></Route>
                <Route path='search' element={<Dc />}></Route>

                <Route path='hero' element={<Dc />}></Route>

                <Route path='/' element={<Navigate to="/marvel" />}></Route>
            </Routes>

            </div>
       
        </>
    )
}