
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import NavigationBar from './components/NavigationBar';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar/>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Page2 />} path='/page2' />
          <Route element={<Page3 />} path='/page3' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
