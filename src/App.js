import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
   return (
      <div>
         <NavBar/>
         <div className="container py-[40px]
            grid gap-[24px] sm:grid-cols-3">
            <ItemListContainer greeting="Producto 1"/>
            <ItemListContainer greeting="Producto 2"/>
            <ItemListContainer greeting="Producto 3"/>
         </div>
      </div>
   );
}

export default App;
