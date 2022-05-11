import React, { useState,useCallback, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataDispatchContext } from "../App";

const Editor = ({isEdit, data}) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("#")
    const [pwd, setPwd] = useState("")
    const [imgBase64, setImgBase64] = useState([]); // 파일 base64
    const [imgFile, setImgFile] = useState(null);	//파일	
    const textRef = useRef(null);
    const categoryRef = useRef(null);
    const {onCreate, onEdit} = useContext(DataDispatchContext);

    useEffect(() => {
        if(isEdit){
            setTitle(data.title);
            setCategory(data.category);
            document.getElementById("editor").innerHTML = data.content;
            setPwd(data.password);
        }
    }, [isEdit, data]);



    const handleChangeFile = (event) => {
        console.log(event.target.files)
        setImgFile(event.target.files);
        //fd.append("file", event.target.files)
        setImgBase64([]);
        for(var i=0;i<event.target.files.length;i++){
        if (event.target.files[i]) {
          let reader = new FileReader();
          reader.readAsDataURL(event.target.files[i]); // 1. 파일을 읽어 버퍼에 저장합니다.
          // 파일 상태 업데이트
          reader.onloadend = () => {
            // 2. 읽기가 완료되면 아래코드가 실행됩니다.
            const base64 = reader.result;
            if (base64) {
            //  images.push(base64.toString())
            var base64Sub = base64.toString()
               
            setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
            //  setImgBase64(newObj);
              // 파일 base64 상태 업데이트
            //  console.log(images)
            }
          }
        }
      }
    }
    useEffect(() => {
        
    }, [])
    const changeFont = (e) => {
        if(textRef.current){
            const size = e.target.dataset.size
            document.execCommand("fontSize", false, size.toString());
            textRef.current.focus();
        }
        
    }

    const changeStyle = (e) => {
        if(textRef.current){
            const style = e.target.dataset.style;
            document.execCommand(style);
            textRef.current.focus();
        }
    }


    const changeCategory = useCallback((e) => {
        setCategory(e.target.value);
    }, []);

    const chagngePwd = useCallback((e) => {
        setPwd(e.target.value);
    }, []);

    const changeTitle = useCallback((e) => {
        setTitle(e.target.value);
    }, []);
    const handleSubmit = useCallback(() => {
        console.log(imgFile)
        if(category === "#"){
            alert("카테고리를 설정해주세요");
            categoryRef.current.focus();
            
        }else{
            const content = document.getElementById("editor").innerHTML;
            if(isEdit){
                onEdit(data.id, title, content, category, pwd);
            }else{
                onCreate(title, content,category, pwd);
            }
            
            navigate("/", {replace: true});
        }
        
    }, [ title, category, pwd]);
    return (
        <div className="write-page">
            <div className="write-title">
                <input style={{color: "black"}} className="back-color" type="text" id="title" placeholder="제목을 입력하세요" value={title} onChange={changeTitle}/>
            </div>
            <hr />
            <div className="write-menu-bar">
            <button className="back-color" id="btnBigFont" onClick={changeFont} data-size={"7"}>대</button>
            <button className="back-color" id="btnMiddleFont" onClick={changeFont} data-size={"5"}>중</button>
            <button className="back-color" id="btnSmallFont" onClick={changeFont} data-size={"3"}>소</button>

            <button className="back-color" id="btnBold" data-style={"bold"} onClick={changeStyle}><b>B</b></button>
            <button className="back-color" id="btnItalic" data-style={"italic"} onClick={changeStyle}><span style={{fontStyle: "italic"}}>I</span></button>
            <button className="back-color" id="btnStrike" data-style={"strikeThrough"} onClick={changeStyle}>T</button>
            <input className="image-selector back-color" id="imgSelector" type="file" onChange={handleChangeFile}/>
            <div className="write-category">
                <select ref={categoryRef} className="back-color symbol-color" name="category" value={category} onChange={changeCategory}>
                <option value="#">카테고리</option>
                <option value="document">서류/양식</option>
                <option value="report">동아리활동보고</option>
                <option value="meeting">대표자 회의록</option>
                </select>
                {/* <select id="clubname" value={}>
                <option>동아리명</option>
                </select>  */}
            </div>
            <div className="deletePwd">
                <input className="back-color" id="deletepwd" type="password" placeholder="비밀번호를 입력하시오" value={pwd} onChange={chagngePwd}/>
            </div>


        </div>
  
        
        <div contentEditable={true} ref={textRef} className="write-contents" data-text="텍스트를 입력하세요." id="editor"  tabIndex={-1}></div>  

        
        <div className="write-last-button">
            <button className="complete-button symbol-color back-color" onClick={handleSubmit}>저장하기</button>
        </div>

        

    </div>
    );
}

export default React.memo(Editor);