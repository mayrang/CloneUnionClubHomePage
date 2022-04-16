import './App.css';
import {Routes, BrowserRouter, Route} from "react-router-dom";
import Post from "./Post.js";
import Edit from './Edit';
import Write from './Write';
import UnionClub from './UnionClub';
import List from './List';
import SecondList from './SecondList';
import Home from './Home.js';
import Header from './componants/Header';
import Footer from './componants/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/UnionClub"} element={<UnionClub />} />
        <Route path={"/list/:category"} element={<List />} />
        <Route path={"/secondlist/:category"} element={<SecondList />} />
        <Route path={"/post/:id"} element={<Post />} />
        <Route path={"/write"} element={<Write />} />
        <Route path={"/edit/:id"} element={<Edit />} />
      </Routes>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
