import React from "react";
import { Link } from "react-router-dom";

const ClubCard = ({category, data}) => {
    return(
        <div className="project-cards">
            <div className="project-card-component">
                <Link className="project-views" to={{
                    pathname: `/post/${data.id}`,
                    search: `?category=${category}`
                }}>
                    <div style={{height: "500px", borderBottom: "1px solid black"}}>
                        <img src={`https://import-bucket-s3.s3.ap-northeast-2.amazonaws.com/unionclub/${category}/${data.src}`} alt="" className="project-thumbnail" />
                    </div>
                    <p className="name">{data.name}</p>
                </Link>
                <div className="links">
                    <div className="link-item">
                        <p>Go to Page</p>
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default React.memo(ClubCard);