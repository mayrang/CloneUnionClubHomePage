import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/core";
import 'swiper/css';
import { Link} from "react-router-dom";

const SlideBorder = ({data}) => {
    console.log(1)
    return (
        <div className="slide-border">
            <div className="index-intorduce-club-title">
                <h2>{data.headText}</h2>
            </div>
            <div className="w3-content w3-section" style={{maxWidth: "400px"}}>
            <Swiper
        
        spaceBetween={0}
        slidesPerView = {1}
        autoplay={{ delay: 3000, disableOnInteraction: false,}}
        loop={true}
        modules={[Autoplay]} 
        
      >
                {data.list.map((it, idx) => {
                    if(idx === 0){
                        return <SwiperSlide key={idx}><img key={idx} className={`${data.name}Slides`} src={"https://mayrang-bucket.s3.ap-northeast-2.amazonaws.com/testImages/fox-gcc656c138_1920.jpg"}/*{`https://import-bucket-s3.s3.ap-northeast-2.amazonaws.com/unionclub/${data.name}/${it}`}*/ style={{width: "100%"}} alt="error"/></SwiperSlide>
                    }else{
                        return <SwiperSlide key={idx}><Link to={{pathname: `/post/${idx}`, search: `?category=${data.name}`}}><img key={idx} className={`${data.name}Slides`} src={"https://mayrang-bucket.s3.ap-northeast-2.amazonaws.com/testImages/jack-russell-terrier-g9920751f6_1920.jpg"}/*{`https://import-bucket-s3.s3.ap-northeast-2.amazonaws.com/unionclub/${data.name}/${it}`}*/ style={{width: "100%"}} alt="error"/></Link></SwiperSlide>
                    }
                     
}               )}
                </Swiper>
            </div>
        </div>
    )
}

export default React.memo(SlideBorder);