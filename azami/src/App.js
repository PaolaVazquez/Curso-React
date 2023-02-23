
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
      <ProductCard title="Producto 1" price={200} isRed={false}/>
      <ProductCard title="Producto 2" price={500} isRed={true}/>
      <ProductCard title="Producto 3"isRed={true}/>
      <ItemListContainer greeting={"hola"}/>

      <Footer/>
    </div>

  );
}

export default App;
