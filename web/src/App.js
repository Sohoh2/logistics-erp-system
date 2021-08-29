import React from 'react';
import Router from './routes/router.js'
import { Switch, BrowserRouter } from "react-router-dom"



const App = (props) => (
    <BrowserRouter>
        <Router />

    </BrowserRouter>

);

export default App;