import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./landingviews/LandingPage";
import React from "react";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;