import clubList from "./utils/ClubList";
import SlideBorder from "./componants/SlideBorder";

const Home = () => {
    return(
    <>
    <div className="index-introduce-union">
        <div className="index-introduce-union-img">
            <img src={process.env.PUBLIC_URL + "/images/groupPhoto.jpeg"} alt="error" />
        </div>
        <div className="index-introudce-union-comment">
            <h2>SKETCH</h2>
            <p>안녕하십니까! 국립한밭대학교 제 37대 총동아리 연합회 SKETCH입니다.</p>
            <h3>팀 이름 & 로고</h3>
            <p>SKETCH는 '밑그림'이라는 의미이며 로고에는 기린을 사용하고 있습니다.</p>
            <p>팀 이름에는 총동아리연합회 소속 중앙동아리들이 자신들의 색을 마음껏 칠할 수 있는 밑그림이 되자는 의미를 담고 있고,</p>
            <p>로고는 기린처럼 높고 넓은 시야로 항상 멀리보며 큰 그림을 만들어나가겠다는 의미를 담고 있습니다.</p>
        </div>
    </div>
    <div className="index-introduce-union">
        {clubList.map((it, idx)=> 
            <SlideBorder key={idx} data={it} />
        )}
    </div>
    </>
    );
};

export default Home;