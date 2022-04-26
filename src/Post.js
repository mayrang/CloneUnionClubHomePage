import Header from "./componants/Header";
import Footer from "./componants/Footer";
import {clubCategoryList} from "./utils/ClubList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState, useCallback } from "react";
import { DataDispatchContext, DataStateContext } from "./App";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

const Post = () => {
    const data = useContext(DataStateContext);
    const {onRemove} = useContext(DataDispatchContext);
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");
    const [title, setTitle] = useState();
    const [submitType, setSubmitType] = useState("");
    const [src, setSrc] = useState();
    const [content, setContent] = useState();
    const [categoryName, setCategoryName] = useState();
    const {id} = useParams();
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        console.log(0);
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
                    if(post){
                        setCategoryName("서류/양식");
                        setTitle(post.title);
                        setSrc("");
                        setContent(post.content);
                        break;
                    }else{
                        break;
                    }
                    
                }else{
                    break;
                }
                
            case "report":
                if(data.length > 0){
                    post = data.find((it) => parseInt(it.id) === parseInt(id));
                    if(post){
                        setTitle(post.title);
                        setCategoryName("동아리 활동보고");
                        setSrc("");
                        setContent(post.content);
                        break;
                    }else{
                        break;
                    }
                    
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

    const handleList = useCallback(() => {
        if(category === "physical" || category === "art" || category === "volunteer" || category === "performance" || category === "religion"){
            navigate(`/list/${category}`);
        }else if(category === "document" || category === "report"){
            navigate(`/secondlist/${category}`);
        }else{
            navigate('/', {replace: true});
        }
    }, [category]);

    const handlePrevContent = useCallback(() => {
        if(category === "document" || category === "report"){
            const categoryObj = data.filter((it) => it.category === category);
            const prevContentList = categoryObj.filter((it) => parseInt(it.id) < parseInt(id));
            if(prevContentList.length > 0){
                const prevContentId = prevContentList[0].id;
                navigate(`/post/${prevContentId}?category=${category}`);
                navigate(0);
            }else{
                alert("이전 콘텐츠가 없습니다.");
                return;
            }
        }else if(category === "physical" || category === "art" || category === "volunteer" || category === "performance" || category === "religion"){
            const categoryObj = clubCategoryList.filter((it) => it.category === category);
            const prevContentList = categoryObj.filter((it) => parseInt(it.id) < parseInt(id));
            if(prevContentList){
                const prevContentId = prevContentList[0].id;
                navigate(`/post/${prevContentId}?category=${category}`);
                navigate(0);
            }else{
                alert("이전 콘텐츠가 없습니다.");
                return;
            }
        }else{
            navigate("/", {replace: true});
        }
    }, [data]);



    const handleNextContent = useCallback(() => {
        if(category === "document" || category === "report"){
            const categoryObj = data.filter((it) => it.category === category);
            const nextContentList = categoryObj.filter((it) => parseInt(it.id) > parseInt(id));
            if(nextContentList.length > 0){
                const nextContentId = nextContentList[0].id;
                navigate(`/post/${nextContentId}?category=${category}`);
                navigate(0);
            }else{
                alert("다음 콘텐츠가 없습니다.");
            }
        }else if(category === "physical" || category === "art" || category === "volunteer" || category === "performance" || category === "religion"){
            const categoryObj = clubCategoryList.find((it) => it.category === category);
            const nextContentList = categoryObj.list.filter((it) => parseInt(it.id) > parseInt(id));
            if(nextContentList.length > 0){
                const nextContentId = nextContentList[0].id;
                navigate(`/post/${nextContentId}?category=${category}`);
                navigate(0);
            }else{
                alert("다음 콘텐츠가 없습니다.");
            }
        }else{
            navigate("/", {replace: true});
        }
    }, [data]);

    const handleSubmit = useCallback(() => {
        if(category === "physical" || category === "art" || category === "volunteer" || category === "performance" || category === "religion"){
            alert("권한이 없습니다.");
            document.getElementById("Modal").style.display = 'none';
            document.getElementById("submitType").value = "";
            return;
        }else if(category === "document" || category === "report"){
            const post = data.find((it) => parseInt(it.id) === parseInt(id));
            const postPwd = post.password;
            if(pwd === postPwd){
                const submitType = document.getElementById("submitType").value;
                if(submitType === "remove"){
                    onRemove(id);
                    navigate(-1, {replace:true});
                }else{
                    navigate(`/edit/${id}?category=${category}`);
                }
                

            }else{
                alert("비밀번호 틀림");
                setPwd("");
                return;
            } 
        }
      
    }, [data, pwd]);

    const closeModal = useCallback(() => {
        document.getElementById("Modal").style.display = 'none';
        document.getElementById("submitType").value = "";
    }, []);

    const showModal = useCallback((type, e) => {
        document.getElementById("Modal").style.display = 'block';
        setSubmitType(type);
        console.log(type)
    }, []);


    const onChangePwd = useCallback((e) => {
        setPwd(e.target.value);
    }, [])



    if(title){
        return (
            <>

            <div id="Modal" className="modal">
                <div className="xcontainer">
                    <span onClick={closeModal} className="close" title="Close Modal">&times;</span>
                </div>

                <div className="modalContainer">
                    <input type="password" className="pwd" placeholder="Enter Password" name="pwd" onChange={onChangePwd} value={pwd} required />
                    <input type="hidden" id="submitType" value={submitType} />
                <button className="modalButton" onClick={handleSubmit}>Login</button>
                    </div>
                </div>
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
                    <button id="contentEditButton" type="button" onClick={(e) => {showModal("edit", e)}}>
                        <FontAwesomeIcon icon={faEdit}  />
                    </button>
                    <button id="contentDeleteButton" onClick={(e) => {showModal("remove", e)}}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
                <hr/>
                <div className="content-img">
                    {src && <img src={src} alt="error" />}
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
                            <button type="button" onClick={handleList}><FontAwesomeIcon icon={faList} /></button>
                        </div>
                    </div>
                    <div className="other-contents">
                        <button className="prev-content-button" type="button" onClick={handlePrevContent}>
                            <span>&lang;</span><h3>Prev Content Title</h3>
                        </button>
                        <button className="next-content-button" type="button" onClick={handleNextContent}>
                            <h3>Next Content Title</h3><span>&rang;</span>
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