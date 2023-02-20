


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../auth/pages/Login'
import Dc from '../heros/pages/Dc'
import Marvel from '../heros/pages/Marvel'
import { HeroesRouters } from '../heros/routes/HeroesRoutes'
import { Navbar } from '../ui/components'

export const AppRouter = () => {
    return (
        <>
            <Routes>
              
                <Route path='login' element={<Login/>}></Route>
                <Route path='*' element={<HeroesRouters/>}></Route>

            </Routes>
        </>
    )
}
