import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Contact from './component/Home/Contact';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Projects from './component/Home/Projects';
import Footer from './component/Header/Footer';
import Blog from './component/Home/Blog';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/"element={<Home/>}></Route>
        <Route path="/home"element={<Home/>}></Route>
        <Route path="/projects"element={<Projects/>}></Route>
        <Route path="/contact"element={<Contact/>}></Route>
        <Route path="/blog"element={<Blog/>}></Route>
        <Route path="*"element={<NotFound/>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
