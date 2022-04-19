import {useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {clubCategoryList} from "./utils/ClubList";
import ClubCard from "./componants/ClubCard";
import Header from "./componants/Header";
import Footer from "./componants/Footer";


const List = () => {
    const [clubCategory, setClubCategory] = useState();
    const {category} = useParams();

    useEffect(() => {
        setClubCategory(clubCategoryList.find((it) => it.category === category));
        
    }, [])

    if(clubCategory){
        return (
            <>
            <Header />
            <div className="contents">
            <div className="title">
                
    
                <h2>{clubCategory.name}</h2>
                <sup className="total">{clubCategory.list.length}</sup>
            </div>
            <div className="project-cards-container">
                {clubCategory.list.map((it) => (
                    <ClubCard  key={it.id} data={it} category={category}/>
                ))}
            </div>
        </div>
        <Footer />
        </>
        );
    }else{
       return(<div>로딩중..</div>)
    }
 
}

export default React.memo(List);