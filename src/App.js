
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="app"
        style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header />

      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
