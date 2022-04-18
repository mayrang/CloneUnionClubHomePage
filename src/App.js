import './App.css';
import {Routes, BrowserRouter, Route} from "react-router-dom";
import Post from "./Post.js";
import Edit from './Edit';
import Write from './Write';
import UnionClub from './UnionClub';
import List from './List';
import SecondList from './SecondList';
import Home from './Home.js';
import React, {useMemo, useReducer, useRef, useCallback} from "react";

const reducer = (state, action) => {
  let newData = [];
  switch(action.type){
    case "CREATE":
      newData = [
        action.data,
        ...state
      ]
      break;
    default:
      return state;
  }
  localStorage.setItem("data", JSON.stringify(newData));
  return newData;
}

export const DataStateContext = React.createContext();
export const DataDispatchContext = React.createContext();


function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(1);
  const onCreate = useCallback((title, content, category)=>{
    const newData = {
      id: idRef.current,
      title, 
      content,
      date: new Date().getTime(),
      category
    };
    dispatch({type:"CREATE", data:newData});
    idRef.current += 1;
  }, []);

  const memorizedDispatch = useMemo(() => {
    return {onCreate};
  }, [onCreate]);
  return (
    <DataStateContext.Provider value={data}>
    <DataDispatchContext.Provider value={memorizedDispatch}>
    <BrowserRouter>
    
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/UnionClub"} element={<UnionClub />} />
        <Route path={"/secondlist/:category"} element={<SecondList />} />
        <Route path={"/list/:category"} element={<List />} />
        <Route path={"/post/:id"} element={<Post />} />
        <Route path={"/write"} element={<Write />} />
        <Route path={"/edit/:id"} element={<Edit />} />
      </Routes>
    </div>

    </BrowserRouter>
    </DataDispatchContext.Provider>
    </DataStateContext.Provider>
  );
}

export default App;
