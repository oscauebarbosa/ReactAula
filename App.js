import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada";
import Header from "./components/Header";


function App(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato/:aa/:/var2" element={<Contato />} />

                <Route path="*" element={<PaginaNaoEncontrada />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;