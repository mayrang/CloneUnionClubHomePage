import { useContext, useEffect, useState } from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import { DataStateContext } from "./App";
import Editor from "./componants/Editor";



const Edit = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");
    const {id} = useParams();
    const dataList = useContext(DataStateContext);
    const navigate = useNavigate();
    const [data, setData] = useState();
    useEffect(() => {
        if(category === "document" || category === "report" || category === "meeting"){
            const findedData = dataList.find((it) => parseInt(it.id) === parseInt(id));
            if(findedData){
                setData(findedData);
            }else{
                alert("해당되는 페이지가 없습니다.");
                navigate("/", {replace: true});
            }
        }else{
            navigate("/", {replace: true});
        }
    }, [data, category]);
    

    if(data){
        return(
            <>
            <Editor isEdit={true} data={data} />
            </>
        );
    }else{
        return (
            <div>데이터 로딩중..</div>
        );    
    }
    

}

export default Edit;