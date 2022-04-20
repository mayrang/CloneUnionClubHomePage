import Header from "./componants/Header";
import Footer from "./componants/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";

const Post = () => {
    return (
        <>
        <Header />
        <div className="post">
            <div className="post-category">
                <h2>category</h2>
            </div>
            <div className="post-content-title">
                <h2>title</h2>
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
                <img src="" />
            </div>
                <div id="contentBody">
                    content
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
}

export default Post;