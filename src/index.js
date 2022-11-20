import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './components/App'
import Welcome from './components/Welcome';
import Signup from './components/Auth/signup';

const container = document.querySelector('#root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <App>
            <Routes>
            <Route path='/' element={Welcome()}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            </Routes>

        </App>
    </BrowserRouter>


);



