import { useNavigate } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Header = () => {
    const navigate = useNavigate();
    const openMenu = () => {
      document.getElementsByClassName("topMenu")[0].style.display = 'block';
      document.getElementsByClassName("close-menu")[0].style.display = 'block';
      document.getElementsByClassName("open-menu")[0].style.display = 'none';
      document.getElementsByClassName("topMenu-ul")[0].style.background = 'white';
      // document.getElementsByClassName("executive-contents")[0].style.opacity = 0.5;

      document.getElementsByClassName("footer")[0].style.opacity = 0.5;

    }

    const closeMenu = () => {
      document.getElementsByClassName("topMenu")[0].style.display = 'none';
      document.getElementsByClassName("close-menu")[0].style.display = 'none';
      document.getElementsByClassName("open-menu")[0].style.display = 'block'
      document.getElementsByClassName("topMenu-ul")[0].style.background = 'none'
      document.getElementsByClassName("footer")[0].style.opacity = 1;
      // document.getElementsByClassName("executive-contents")[0].css('opacity','1');

    }

    const OpenSmallMenu1 = () => {
      document.getElementById("SmallMenu1").style.display = 'block';
    }

    const OpenSmallMenu2 = () => {
      document.getElementById("SmallMenu2").style.display = 'block';
    }


    return (
        <header>
        <nav>
            <div className="menu-button">
                <i className="fas fa-bars open-menu" onClick={openMenu}> <FontAwesomeIcon icon={faBars} /></i>

                <i className="fas fa-times close-menu" onClick={closeMenu}><FontAwesomeIcon icon={faTimes} /></i>
            </div>
          <div className="logo">
              <img src={process.env.PUBLIC_URL + "/images/logo.png"} style={{cursor: 'pointer'}} onClick={() => navigate("/")}  alt="error"/>
          </div>
        <div className="topMenu">
            <ul className="topMenu-ul">
              <li><a href="/UnionClub">?????????????????????</a></li>
              <li><a onClick={OpenSmallMenu2} href="#!">????????? ?????? <span>???</span></a>
                <ul id="SmallMenu2">
                  <li><a href={"/list/physical"}>????????????</a></li>
                  <li><a href={"/list/performance"}>????????????</a></li>
                  <li><a href={"/list/art"}>??????/????????????</a></li>
                  <li><a href={"/list/volunteer"}>????????????</a></li>
                  <li><a href={"/list/religion"}>????????????</a></li>
                </ul>
              </li>
                <li><a onClick={OpenSmallMenu1} href="#!">???????????????<span>???</span></a>
                  <ul id="SmallMenu1">
                    <li><a href={"/secondlist/document"}>??????/??????</a></li>
                    <li><a href={"/secondlist/report"}>????????? ????????????</a></li>
                  
                  </ul>
                </li>
              <li><a href={"/secondlist/meeting"} >????????? ?????????</a></li>
            </ul>
        </div>
      </nav>
    </header>

 
    );
}

export default Header;