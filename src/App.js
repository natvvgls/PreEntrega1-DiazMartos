import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
   return (
      <div>
         <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting='¡Bienvenido!' />} /> 
            <Route path="/category/:idCategory" element={<ItemListContainer/>} /> 
            <Route path="/item/:id" element={<ItemDetailContainer />} />  
          </Routes>
        </BrowserRouter>
      </div>
   );
}

export default App;
