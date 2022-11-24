import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListNews from "./components/ListNews/ListNews";
import Form from "./components/Form/Form";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ListNews />} />
          <Route path="/new-article" element={<Form />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;