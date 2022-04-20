import Header from "./componants/Header";
import Footer from "./componants/Footer";
import { useNavigate, useParams } from "react-router-dom";
import React, { useCallback, useContext, useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { DataStateContext } from "./App";
import PostList from "./componants/PostList";


const SecondList = () => {
    const data = useContext(DataStateContext);
    const navigate = useNavigate();
    const [filteredData, setFilteredData] = useState();
    const {category} = useParams();

    const handleWriteButton = useCallback(() => {
        navigate("/write");
    }, []);

    useEffect(() => {
        setFilteredData(data.filter((it) => it.category === category));

    }, [data, category])
    if(filteredData){
        return (
            <>
            <Header />
            <div className="list">
                <div className="list-title">
                    <h1>제목</h1>
                </div>
                <div className="write-btn">
                    <button className="write-button" onClick={handleWriteButton}><FontAwesomeIcon icon={faEdit} /></button>
                </div>
            </div>
      
            <div style={{float: "none", height: "40px"}}></div>
            <hr />
            <div className="list-top">
                <div className="list-top-title">
                    <p>글제목</p>
                </div>
                <div className="list-top-writer">
                    <p className="list-writer">작성자</p>
                    <p>작성일</p>
                </div>
            </div>
            {filteredData.map((it) => 
                <PostList key={it.id} data={it} />
            )}
            <Footer />
            </>
        );
    }else{
        return( 
            <div>로딩중입니다.</div>
        )
    }
   
}

export default SecondList;