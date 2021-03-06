import Footer from "./componants/Footer";
import Header from "./componants/Header";


const UnionClub = () => {
    return (
      <>
      <Header />
      <div className="unionclub">
        <div className="unionclub-introduce">
          <div>
            <h1 className="unionclub-title">SKETCH</h1>
          </div>
          <div className="unionclub-groupimg">
            <img src={process.env.PUBLIC_URL + "/images/groupPhoto.jpeg"} alt="error" />
          </div>
          <div style={{marginBottom: "100px"}}>
            <p>안녕하십니까!</p>
            <p>국립한밭대학교 제 37대 총동아리 연합회 SKETCH입니다.</p>
          </div>
          <div style={{float: "left", maxWidth: "300px", width: "30%"}}>
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} width="100%" alt="error"/>
          </div>
          <div style={{paddingTop: "50px"}}>
            <h2>팀 이름 & 로고</h2>
            <p>SKETCH는 '밑그림'이라는 의미이며 로고에는 기린을 사용하고 있습니다</p>
            <p>팀 이름에는 총동아리연합회 소속 중앙동아리들이 자신의 색을 마음껏 칠할 수 있는 밑그림이 되자는 의미를 담고 있고,</p>
            <p>로고는 기린처럼 높고 넓은 시야로 항상 멀리보며 큰 그림을 만들어나가겠다는 의미를 담고 있습니다.</p>
          </div>
          <div style={{wdith: "100%", margin: "auto"}}>
            <img src={process.env.PUBLIC_URL + "/images/clublist_w.jpg"}width="100%" alt="error" />
          </div>
          <div style={{width: "100%", margin: "auto"}}>
            <img src={process.env.PUBLIC_URL + "/images/sketchposter.jpg"} width="100%" alt="error" />
          </div> 
        </div>
      </div>
      <Footer />
      </>
    );
}

export default UnionClub;