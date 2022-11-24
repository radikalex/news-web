import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import { GlobalProvider } from "./context/GlobalState";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListNews from "./components/ListNews/ListNews";
import Form from "./components/Form/Form";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<ListNews />} />
            <Route path="/form" element={<Form />} />
            <Route path="*" element={<Navigate to="/" />}  />
          </Routes>
          <Footer />
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;