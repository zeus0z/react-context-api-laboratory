
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import NavigationBar from './components/NavigationBar/NavigationBar';



function App() {
  return (
    <div className="App">
      <h1>Context Api</h1>
      <BrowserRouter>
      <NavigationBar/>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Products />} path='/products' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
