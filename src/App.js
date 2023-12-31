import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import Header from "./features/Header";
import Footer from "./features/Footer";
import Todos from "./features/Todos";

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;