import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import "./slick.css"
import { BsFire } from 'react-icons/bs';


const Slick = () => {
    const images = [
        {
          id: 1,
          src: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/g/1/f/6-11g-787-6-campus-wht-sil-b-org-original-imaghycd7arhuqk9.jpeg?q=70",
          alt: "Image 1",
          title: "CAMPUS RUNNING SHOES",
          description:
            "The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.",
        },
        {
          id: 2,
          src: "https://rukminim2.flixcart.com/image/832/832/xif0q/kids-top/u/y/u/15-16-years-girls-white-rayon-embroidered-casual-round-tie-up-original-imagrxczeafv7pbn.jpeg?q=70",
          alt: "Image 2 ",
          title: " Cotton Blend Fashion Sleeve Top",
          description:
            "This Turbo S variant comes with an engine putting out 641 bhp @ 6750 rpm and 800 Nm @ 2500 rpm of max power and max torque respectively.",
        },
        {
          id: 3,
          src: "https://rukminim2.flixcart.com/image/416/416/xif0q/lipstick/0/r/g/soft-matte-long-stay-lipstick-with-jojoba-oil-vitamin-e-for-12-original-imagnkvfmz8hfvyh.jpeg?q=70",
          alt: "Image 3",
          title: "Mamaearth Soft Matte Long Stay Lipstick",
          description: 
            "For offroad lovers. Super fast, Super Comfortable.",
        },
        {
          id: 4,
          src: "https://rukminim2.flixcart.com/image/416/416/km2clu80/stuffed-toy/g/5/u/soft-toys-long-soft-lovable-hugable-cute-giant-life-size-teddy-original-imagf2f8xpduqwrg.jpeg?q=70",
          alt: "Image 4",
          title: "Plushie Teddy Bear valentines",
          description:
            "Aventador SV provide thrills unlike anything that has ever been experienced before.",
        },
        {
          id: 5,
          src: "https://rukminim2.flixcart.com/image/832/832/xif0q/earring/4/3/m/-original-imagqg5sduhx73m8.jpeg?q=70",
          alt: "Image 5",
          title: "Traditional Jhumki Afghani Wedding Earrings",
          description:
            "0 to 100 km/h (0 to 62 mph) takes 3.0 seconds and the Spider is capable of a top speed of 400 km/h (249 mph).",
        },
        {
          id: 6,
          src: "https://rukminim2.flixcart.com/image/416/416/xif0q/recliner/k/u/s/185-2-seater-grey-96-polyester-avalontwinrecmanfabgr2s-duroflex-original-imagrvegwkbxpzze.jpeg?q=70",
          alt: "Image 6",
          title: "duroflex Avalon Twin - Modern 2 Seater Sofa",
          description:
            "The Porsche 911 (pronounced Nine Eleven or in German: Neunelfer) is a two-door 2+2 high performance rear-engined sports car.",
        },
        {
          id: 7,
          src: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/d/k/k/-original-imagqkqnb2fpbhyb.jpeg?q=70",
          alt: "Image 7",
          title: "ASUS Vivobook Pro 15 ",
          description:
            "The Challenger has a classic muscle-car interior, with a simple design",
        },
        {
          id: 8,
          src: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/v/8/s/free-net-1-ellesti-fab-unstitched-original-imagrpmzbpzpkmha.jpeg?q=70",
          alt: "Image 8",
          title: "Embellished Daily Wear Net Saree",
          description:
            "The Gallardo is a 2 seater 10 cylinder car and has length of 4345mm, width of 1900mm and a wheelbase of 2560mm.",
        },
        {
          id: 9,
          src: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/r/f/-original-imaghkvuhzwge3za.jpeg?q=70",
          alt: "Image 9",
          title: "REDMI Note 12 Pro 5G ",
          description:
            "Its electric motor can provide up to 184 pound-feet of torque on demand.",
        },
        {
          id: 10,
          src: "https://rukminim2.flixcart.com/image/832/832/xif0q/short/3/f/6/32-combo-of-3-shorts-powermerc-original-imagbmsswhpzsngr-bb.jpeg?q=70",
          alt: "Image 9",
          title: "Women Multicolor Hotpants",
          description:
            "Its electric motor can provide up to 184 pound-feet of torque on demand.",
        },
      ];


    const settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
  return (
    <div className="content">
    <h1 className="header flex justify-center items-center text-primary uppercase bold" >Hot <BsFire/> products
   
    </h1>
    <div className="container " >
      <Slider {...settings}>
        {images.map((item) => (
          <div key={item.id} >
            <img src={item.src} alt={item.alt} className="img" />
            <h2 className="title">{item.title}</h2>
            {/* <p className="description">{item.description}</p> */}
          </div>
        ))}
      </Slider>
    </div>
  </div>
  )
}

export default Slick