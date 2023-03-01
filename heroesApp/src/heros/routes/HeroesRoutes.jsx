import { Navigate } from "react-router-dom"
import { Navbar } from "../../ui/components"
import { Route, Routes } from 'react-router-dom'
import Marvel from "../pages/Marvel"
import Dc from "../pages/Dc"
import HeroPage from "../pages/HeroPage'"
import SearchPage from "../pages/SearchPage"




export const HeroesRouters = () => {
    return (
        <>
            <Navbar>

            </Navbar>
            <div className="container">
            <Routes>
                <Route path='marvel' element={<Marvel />}></Route>
                <Route path='dc' element={<Dc />}></Route>
                <Route path='search' element={<SearchPage />}>
                    
                </Route>

                <Route path='hero/:id' element={<HeroPage />}></Route>

                <Route path='/' element={<Navigate to="/marvel" />}></Route>
            </Routes>

            </div>
       
        </>
    )
}