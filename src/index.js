import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'

import App from './components/App'
import Welcome from './components/Welcome';
import Signup from './components/Auth/signup';
import reducers from './reducers';

const store = configureStore({
        reducer:reducers},
         {},
         applyMiddleware(reduxThunk)
         )
const container = document.querySelector('#root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
          <BrowserRouter>
        <App>
            <Routes>
            <Route path='/' element={<Welcome />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            </Routes>

        </App>
    </BrowserRouter>
    </Provider>
    


);



