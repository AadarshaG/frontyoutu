import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { HomeIndex } from './front/home/home.component'
import { Layout } from './front/layout/main.component'


export function AppRouting(){

    return(
        <BrowserRouter>
            <Routes>
                <Route to="/" element={<Layout></Layout>}>
                    <Route index element={<HomeIndex />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}