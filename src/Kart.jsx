import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Kart2 from "./Kart2";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './index.css'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


export default function Kart() {
  return (
    <>

      <div id='cardMainBox'>
        <div className="cardHeader">
          <h2>Öne Çıkanlar</h2>
            <a href="https://www.trendyol.com/sr?tag=AnasayfaAll">
              <p>Tüm Ürünler!</p>
            </a>
        </div>
        <br />


        <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation ]}
        className="mySwiper2 swiperCard"
        breakpoints={{
          0: {
              slidesPerView:1,
              spaceBetween: 10
          },
          375: {
            slidesPerView:1.7,
            spaceBetween: 10
        },
          425: {
              slidesPerView: 2.1,
          },
          768: {
            slidesPerView: 3.5,
          },
          1024: {
              slidesPerView: 5.2,
              spaceBetween: 10
          },
          1280: {
              slidesPerView: 5.7,
              spaceBetween: 10
          }
      }
      }
      >
        
        <SwiperSlide>
            <Kart2 data={{
              kargo: "KARGO BEDAVA",
              cardLink: "https://www.trendyol.com/pure-baby/organik-bambu-ozlu-islak-havlu-24-60-1440-yaprak-p-318355258?boutiqueId=611090&merchantId=574495&sav=true",
              imgSrc: "https://cdn.dsmcdn.com/ty488/product/media/images/20220724/1/148777046/508492842/1/1_org.jpg", 
              cardBrandName: "Pure Baby", 
              cardExp:" Organik bambu özlü ıslak mendil", 
              price:"139 TL",
              promText:"150 Tl ve üzeri indirim"
              }}/>
        </SwiperSlide>
        <SwiperSlide>
            <Kart2 data={{
              firsatLogo: "https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2022/8/17/FlashIndirimBadge_202208171505.png",
              cardLink: "https://www.trendyol.com/riot-games/8500-vp-valorant-points-tr-p-40275314?boutiqueId=61&merchantId=170397&sav=true",
              imgSrc: "https://cdn.dsmcdn.com/ty351/product/media/images/20220308/19/65558589/71335040/2/2_org.jpg", 
              cardBrandName: "Riot Games", 
              cardExp:" 8500 VP Volarant Points Tr", 
              price:"584 TL",
              promText:""
              }}/>
        </SwiperSlide>
        <SwiperSlide>
            <Kart2 data={{
              cardLink: "https://www.trendyol.com/papara/lite-card-p-118767585?boutiqueId=61&merchantId=388828&sav=true",
              imgSrc: "https://cdn.dsmcdn.com/ty384/product/media/images/20220406/17/84651663/191221510/1/1_org.jpg", 
              cardBrandName: "PAPARA", 
              cardExp:" Lite card", 
              price:"5 TL",
              promText:""
              }}/>
        </SwiperSlide>
        <SwiperSlide>
            <Kart2 data={{
              firsatLogo: "https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2022/8/17/FlashIndirimBadge_202208171505.png",
              cardLink: "https://www.trendyol.com/mujgan/4-lu-armut-sunger-seti-p-59379186?boutiqueId=603009&merchantId=357668&sav=true",
              imgSrc: "https://cdn.dsmcdn.com/ty572/product/media/images/20221018/22/196834212/105325118/1/1_org.jpg", 
              cardBrandName: "MUJGAN", 
              cardExp:" 4'lü armut sünger seti", 
              price:"21,57 Tl",
              promText:"150 Tl ve üzeri indirim"
              }}/>
        </SwiperSlide>
        <SwiperSlide>
            <Kart2 data={{
              cardLink: "https://www.trendyol.com/beohome/lux-dolap-cekmece-kulpu-kumru-kulp-1-adet-96mm-mobilya-kulplari-sert-plastik-polimer-p-86880592?boutiqueId=61&merchantId=317028&sav=true",
              imgSrc: "https://cdn.dsmcdn.com/ty75/product/media/images/20210224/11/66423183/145421792/0/0_org.jpg", 
              cardBrandName: "BEOHOME", 
              cardExp:" Lüks dolap çekmece kulpu", 
              price:"4,8 TL",
              promText:""
              }}/>
        </SwiperSlide>
        <SwiperSlide>
            <Kart2 data={{
              cardLink: "https://www.trendyol.com/clasy-care/aloevera-gel-mask-p-347764493?boutiqueId=613720&merchantId=553542&sav=true",
              imgSrc: "https://cdn.dsmcdn.com/ty521/product/media/images/20220901/16/168186240/557007241/1/1_org.jpg", 
              cardBrandName: "Clasy Care", 
              cardExp:" Aleovera Gel Mask", 
              price:"139 TL",
              promText:"150 Tl ve üzeri indirim"
              }}/>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
