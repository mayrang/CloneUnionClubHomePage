

const ClubCard = ({category, name, src}) => {
    return(
        <div className="project-cards">
            <div className="project-card-component">
                <a className="project-views" href="#">
                    <div style={{height: "500px", borderBottom: "1px solid black"}}>
                        <img src={`https://import-bucket-s3.s3.ap-northeast-2.amazonaws.com/unionclub/${category}/${src}`} alt="" className="project-thumbnail" />
                    </div>
                    <p className="name">{name}</p>
                </a>
                <div className="links">
                    <div className="link-item">
                        <p>Go to Page</p>
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default ClubCard;