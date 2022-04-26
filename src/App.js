import './App.css';
import {Routes, BrowserRouter, Route} from "react-router-dom";
import Post from "./Post.js";
import Edit from './Edit';
import Write from './Write';
import UnionClub from './UnionClub';
import List from './List';
import SecondList from './SecondList';
import Home from './Home.js';
import React, {useMemo, useReducer, useRef, useCallback, useEffect} from "react";

const reducer = (state, action) => {
  let newData = [];
  switch(action.type){
    case "INIT":
      return action.data;
    case "CREATE":
      newData = [
        action.data,
        ...state
      ]
      break;
    case "REMOVE":
      newData = state.filter((it) => parseInt(it.id) !== parseInt(action.id));
      break;
    case "EDIT":
      newData = state.map((it) => parseInt(it.id) === parseInt(action.id) ? {...action.data} : it);
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

  useEffect(() => {
    const localData = localStorage.getItem("data");
    if(localData){
      const dataList = JSON.parse(localData).sort((a, b) => parseInt(b.id) - parseInt(a.id));
      if(dataList.length > 0){
        dispatch({type: "INIT", data: dataList});
        idRef.current = parseInt(dataList[0].id) + 1;
      }

    }
  }, [])
  const onCreate = useCallback((title, content, category, pwd)=>{
    const newData = {
      id: idRef.current,
      title, 
      content,
      date: new Date().getTime(),
      category,
      password: pwd
    };
    dispatch({type:"CREATE", data:newData});
    idRef.current += 1;
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({type: "REMOVE", id: targetId});
  }, []);

  const onEdit = useCallback((targetId, title, content, category, pwd) => {

    const newData = {
      id: parseInt(targetId),
      title,
      content,
      category,
      date: new Date().getTime(),
      password: pwd
    };
    dispatch({type: "EDIT", data: newData, id: targetId});

  }, []);

  const memorizedDispatch = useMemo(() => {
    return {onCreate, onRemove, onEdit};
  }, [onCreate, onRemove]);
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
