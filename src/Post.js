import Header from "./componants/Header";
import Footer from "./componants/Footer";
import {clubCategoryList} from "./utils/ClubList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { DataStateContext } from "./App";
import { useParams, useSearchParams } from "react-router-dom";

const Post = () => {
    const data = useContext(DataStateContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get("category");
    const [title, setTitle] = useState();
    const [src, setSrc] = useState();
    const [content, setContent] = useState();
    const [categoryName, setCategoryName] = useState();
    const {id} = useParams();
 
    useEffect(() => {
        let post = {};
        switch(category){
            case "physical":
                const physical = clubCategoryList.find((it) => it.category === "physical"); 
                post = physical.list.find((it) => parseInt(it.id) === parseInt(id));
                setTitle(post.name);
                setCategoryName("체육분과");
                setSrc(`https://import-bucket-s3.s3.ap-northeast-2.amazonaws.com/unionclub/${category}/${post.src}`);
                setContent("");
                break;
            case "performance":
                const performance = clubCategoryList.find((it) => it.category === "performance"); 
                post = performance.list.find((it) => parseInt(it.id) === parseInt(id));
                setTitle(post.name);
                setCategoryName("공연분과");
                setSrc(`https://import-bucket-s3.s3.ap-northeast-2.amazonaws.com/unionclub/${category}/${post.src}`);
                setContent("");
                break;
            case "art":
                const art = clubCategoryList.find((it) => it.category === "art"); 
                post = art.list.find((it) => parseInt(it.id) === parseInt(id));
                setTitle(post.name);
                setCategoryName("전시/교양분과");
                setSrc(`https://import-bucket-s3.s3.ap-northeast-2.amazonaws.com/unionclub/${category}/${post.src}`);
                setContent("");
                break;
            case "volunteer":
                const volunteer = clubCategoryList.find((it) => it.category === "volunteer"); 
                post = volunteer.list.find((it) => parseInt(it.id) === parseInt(id));
                setTitle(post.name);
                setCategoryName("봉사분과");
                setSrc(`https://import-bucket-s3.s3.ap-northeast-2.amazonaws.com/unionclub/${category}/${post.src}`);
                setContent("");
                break;
            case "religion":
                const religion = clubCategoryList.find((it) => it.category === "religion"); 
                post = religion.list.find((it) => parseInt(it.id) === parseInt(id));
                setTitle(post.name);
                setCategoryName("종교분과");
                setSrc(`https://import-bucket-s3.s3.ap-northeast-2.amazonaws.com/unionclub/${category}/${post.src}`);
                setContent("");
                break;
            case "document":
                if(data.length > 0){
                    post = data.find((it) => parseInt(it.id) === parseInt(id));
                    setCategoryName("서류/양식");
                    setTitle(post.title);
                    setSrc("");
                    setContent(post.content);
                    break;
                }else{
                    break;
                }
                
            case "report":
                if(data.length > 0){
                    post = data.find((it) => parseInt(it.id) === parseInt(id));
                    setTitle(post.title);
                    setCategoryName("동아리 활동보고");
                    setSrc("");
                    setContent(post.content);
                    break;
                }else{
                    break;
                }
               
            default:
                setTitle("");
                setSrc("");
                setContent("");
                break;
        }
    }, [data]);

    if(title){
        return (
            <>
            <Header />
            <div className="post">
                <div className="post-category">
                    <h2>{categoryName}</h2>
                </div>
                <div className="post-content-title">
                    <h2>{title}</h2>
                </div>
                <div className="post-content-info">
                    <span>관리자</span>
                </div>
                <div id="contentButtons">
                    <button id="contentEditButton" type="button">
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button id="contentDeleteButton">
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
                <hr/>
                <div className="content-img">
                    <img src={src} />
                </div>
                    <div id="contentBody">
                        {content}
                    </div>
                    <hr/>
                    <div className="post-footer-btn">
                        <div className="post-comment-btn">
                            <button type="button">
                                <FontAwesomeIcon icon={faCommentDots} />
                            </button>
                        </div>
                        <div className="post-list-btn">
                            <button type="button"><FontAwesomeIcon icon={faList} /></button>
                        </div>
                    </div>
                    <div className="other-contents">
                        <button className="prev-content-button" type="button">
                            <span>&lang;</span><h3>Prev Content Title</h3>
                        </button>
                        <button className="next-content-button" type="button">
                            <h3>Next Content Title</h3><span>&rnag;</span>
                        </button>
                    </div>
            </div>
            <Footer />
            </>
        );
    }else{
        <div>로딩중입니다...</div>
    }
    
}

export default Post;