import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Projects from './component/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home"element={<Home/>}></Route>
        <Route path="/projects"element={<Projects/>}></Route>
        <Route path="*"element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
