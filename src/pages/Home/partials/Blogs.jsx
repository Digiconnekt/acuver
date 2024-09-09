import "swiper/css";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "@/assets/images/home/blogs/1.png";
import Img2 from "@/assets/images/home/blogs/2.png";
import Img3 from "@/assets/images/home/blogs/3.png";
import { Autoplay, Pagination } from "swiper/modules";
import UserImg from "@/assets/images/user-profile.png";

const BLOGS_DATA = [
  {
    img: Img1,
    href: "#",
    date: "Sep 01, 2024",
    title: "IT Training",
    desc: "There are only three major services you need for your Organization. They are what to implement, where to procure, and how to deploy & operate at full capacity",
    author: {
      img: UserImg,
      name: "Sara Smith",
      position: "Software Engineer",
    },
  },
  {
    img: Img2,
    href: "#",
    date: "Sep 01, 2024",
    title: "IT Training",
    desc: "There are only three major services you need for your Organization. They are what to implement, where to procure, and how to deploy & operate at full capacity",
    author: {
      img: UserImg,
      name: "Sara Smith",
      position: "Software Engineer",
    },
  },
  {
    img: Img3,
    href: "#",
    date: "Sep 01, 2024",
    title: "IT Training",
    desc: "There are only three major services you need for your Organization. They are what to implement, where to procure, and how to deploy & operate at full capacity",
    author: {
      img: UserImg,
      name: "Sara Smith",
      position: "Software Engineer",
    },
  },
  {
    img: Img1,
    href: "#",
    date: "Sep 01, 2024",
    title: "IT Training",
    desc: "There are only three major services you need for your Organization. They are what to implement, where to procure, and how to deploy & operate at full capacity",
    author: {
      img: UserImg,
      name: "Sara Smith",
      position: "Software Engineer",
    },
  },
];

const Blogs = () => {
  return (
    <>
      <section className="container">
        <h2 className="text-primary text-4xl font-bold mb-3">
          Read the latest
        </h2>
        <h3 className="text-secondary text-3xl font-semibold mb-4">
          from our experts
        </h3>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="home-blogs mt-10"
          style={{ paddingBottom: "30px" }}
        >
          {BLOGS_DATA.map((data, i) => (
            <SwiperSlide
              key={i}
              className="border bg-white hover:bg-gray-50 rounded-lg group"
            >
              <Link to={data.href} className="">
                <div className="h-60 overflow-hidden">
                  <img
                    src={data.img}
                    alt={data.title}
                    loading="lazy"
                    className="w-full object-cover rounded-t-lg group-hover:scale-125 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-600">{data.date}</p>
                  <h4 className="mt-3 text-2xl font-bold text-primary">
                    {data.title}
                  </h4>
                  <p className="text-gray-600 mt-2">{data.desc}</p>

                  <div className="border-t mt-5 pt-5 flex items-center gap-3">
                    <img
                      src={data.author.img}
                      alt={data.author.name}
                      className="w-14 h-14"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-sm">
                        {data.author.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {data.author.position}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Blogs;
