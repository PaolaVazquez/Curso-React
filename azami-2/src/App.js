import { BrowserRouter } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      {/* <CartContext> */}
        <Navbar/>
        <Footer/>
      {/* </CartContext> */}
    </BrowserRouter>
    
  );
}

export default App;
