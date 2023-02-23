
import { Footer } from "./Components/Footer/Footer";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { Navbar } from "./Components/Navbar/Navbar"; //importar por constante o función
import { ProductCard } from "./Components/ProductCard/ProductCard";
//import Navbar from "./Components/Navbar/Navbar"; //importar por defecto

//{/* COMENTAR */}
function App() {
  return (
    <div>
      <Navbar/>
      
      <ItemListContainer greeting={"hola"}/>

      <Footer/>
    </div>

  );
}

export default App;
