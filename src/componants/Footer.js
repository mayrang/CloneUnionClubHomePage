import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="footer">
        <div className="sns">
          <ul className="snss">
            <li><a href="https://www.instagram.com/37th_sketch/"><i className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></i></a></li>
            <li><a href="http://pf.kakao.com/_CxgZub"><img src="../images/kakaoimg.png" width="35px" alt="" /></a></li>
          </ul>
        </div>
          <div className="copyright">
              <p>Copyright 2022. SKETCH all right reserved.</p>
          </div>
            <div className="address">
              <p>대전광역시 유성구 동서대로 125 동아리관 N12동 200호</p>
            </div>
        </div>
    );
}

export default Footer;