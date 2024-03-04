import logo from './logo.svg';
import './App.css';
import Cabeza from './components/headahe.jsx'
import Imagenbanner from './components/imagebanner.jsx'
import Navegacion from './/components/navegation.jsx'
import Cartassoluciones from './components/cartassoluciones.jsx';
import Cientifico from './components/cientifico.jsx';
import Productos from './components/productos.jsx';
import Noticias from './components/noticias.jsx';
import Publicaciones from './components/publicaciones.jsx';
import Footer from './components/footer.jsx'
import Aliados from './components/aliados.jsx'
function App() {
  return (
    <div className="App">
      <Cabeza></Cabeza>
      <Navegacion></Navegacion>
      <Imagenbanner/>

      <Cartassoluciones/>

      <Cientifico/>

      <Productos/>
      <Noticias/>
      <Publicaciones/>
      <Aliados/>
      <Footer></Footer>
    </div>
  );
}

export default App;
