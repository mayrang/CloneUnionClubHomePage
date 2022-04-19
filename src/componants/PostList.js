import React from "react";
import { Link } from "react-router-dom";

const PostList = ({data}) => {
    return (
        <div className="list-content-element">
            <Link to={{
                pathname: `/post/${data.id}`,
                search: `?category=${data.category}`
            }}>
            <div className="list-content-title">
                <p>{data.title}</p>
            </div>
            <div className="list-content-writer">
                <p className="list-writer">관리자</p>
                <p>{new Date(data.date).toISOString().slice(0, 10)}</p>
            </div>
            </Link>
        </div>
    );
}

export default React.memo(PostList);