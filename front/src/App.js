//Toda la lógica 

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from "./components/Navbar";
import Carrousel2 from "./components/Carrousel2";
import Footer2 from "./components/Footer2";
import GetMovies from "./components/GetMovies";

function App() {
  return (
    
    <div>

        <Navbar2 />
        <GetMovies />
        
        <Footer2 />

      </div>
      

  );
}

export default App;
