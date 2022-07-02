import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from '../Screens/Home';
import ProductDetails from '../Screens/ProductDetails';


function Routing() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/productDetails/:key' element={<ProductDetails />} />
            </Routes>
        </Router>
    )
}

export default Routing
