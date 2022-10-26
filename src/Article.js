import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Article2 from "./Article2";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './index.css'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Article() {
  return (
    <>
            <Swiper
        slidesPerView={10.7}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        autoplay={{
            delay: 2300,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mySwiperArticle"
        breakpoints={{
            0: {
                slidesPerView:1,
            },
            375: {
                slidesPerView: 5.4,
            },
            425: {
                slidesPerView: 5.4,
            },
            768: {
                slidesPerView: 8.2,
            },
            1024: {
                slidesPerView: 10.4,
            },
            1280: {
                slidesPerView: 10,
            }
        }
        }
      >
        
        <SwiperSlide>
            <Article2 
                data={{
                    storyURL: "https://www.trendyol.com/sanaozel/1?versionKey=singleProducts_JFY_Original_Woman_Deng",
                    storyImgURL : "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2022/3/9/Top_Widget_202203091801.png",
                    storyName: "Sana Özel"
                }}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Article2 
                data={{
                    storyURL: "https://www.trendyol.com/sr/?fl=encoksatanurunler",
                    storyImgURL : "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2022/3/7/Coksatanlar1_202203072239.png",
                    storyName: "Sen De Al!"
                }}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Article2 
                data={{
                    storyURL: "https://www.trendyol.com/milli-piyango-x-b142528",
                    storyImgURL : "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2022/3/7/Coksatanlar1_202203072239.png",
                    storyName: "Çekiliş Kuponu"
                }}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Article2 
                data={{
                    storyURL: "https://www.trendyol.com/trendyolmilla-x-b101476",
                    storyImgURL : "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355388_Trendyolmilla.png",
                    storyName: "TrendyolMilla"
                }}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Article2 
                data={{
                    storyURL: "https://www.trendyol.com/adidas-x-b33",
                    storyImgURL : "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15461619354815_Adidas.png",
                    storyName: "adidas"
                }}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Article2 
                data={{
                    storyURL: "https://www.trendyol.com/puma-x-b160",
                    storyImgURL : "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15541619355266_Puma.png",
                    storyName: "Puma"
                }}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Article2 
                data={{
                    storyURL: "https://www.trendyol.com/hummel-x-b136",
                    storyImgURL : "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15511619355075_Hummel.png",
                    storyName: "HUMMEL"
                }}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Article2 
                data={{
                    storyURL: "https://www.trendyol.com/samsung-x-b794",
                    storyImgURL : "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2022/1/3/samsung2.png",
                    storyName: "Samsung"
                }}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Article2 
                data={{
                    storyURL: "https://www.trendyol.com/sr?wb=101470&os=1&sk=1",
                    storyImgURL : "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2022/1/3/apple12.png",
                    storyName: "Apple"
                }}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Article2 
                data={{
                    storyURL: "https://www.trendyol.com/xiaomi-x-b101939",
                    storyImgURL : "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2022/1/3/xiaomi13.png",
                    storyName: "Xiaomi"
                }}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Article2 
                data={{
                    storyURL: "https://www.trendyol.com/nike-x-b44",
                    storyImgURL : "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15531619355211_Nike.png",
                    storyName: "Nike"
                }}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Article2 
                data={{
                    storyURL: "https://www.trendyol.com/magaza/lufian-m-104814?sst=0",
                    storyImgURL : "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15521619355143_Lufian.png",
                    storyName: "Luifan"
                }}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Article2 
                data={{
                    storyURL: "https://www.trendyol.com/philips-x-b577",
                    storyImgURL : "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15511619355083_Ipekyol.png",
                    storyName: "İpekyol"
                }}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Article2 
                data={{
                    storyURL: "https://www.trendyol.com/philips-x-b577",
                    storyImgURL : "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15541619355251_Philips.png",
                    storyName: "Philips"
                }}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Article2 
                data={{
                    storyURL: "https://www.trendyol.com/magaza/bershka-m-104961?sst=0",
                    storyImgURL : "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15471619354871_Bershka.png",
                    storyName: "Bershka"
                }}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Article2 
                data={{
                    storyURL: "https://www.trendyol.com/twist-x-b168",
                    storyImgURL : "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355394_Twist.png",
                    storyName: "Twist"
                }}
            />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
