import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Page imports
import Home from './views/Home';
import NotFound from './views/NotFound';

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;