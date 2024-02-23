import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './page/SearchPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<SearchPage />} />
            </Routes>
        </Router>
    );
}

export default App;
