import React from "react";
import "./Banner.css";
import BannerImage from "./BannerImage";
const Banner = () => {
  return (
    <div className="flex mt-20 text-justify alignment">
      <div className="ml-10 flex-1">
        <h1 className="text-5xl font-semibold">
          {" "}
          <span className="text-orange-400">KTM</span> Customer Review
        </h1>
        <p className="mb-6 mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, earum
          voluptas hic minima porro magnam, labore necessitatibus praesentium
          modi, iusto amet. Molestias repellendus consectetur non, dolor
          voluptate quasi praesentium officiis necessitatibus corrupti ipsam
          nostrum neque facere est quis aliquid facilis eligendi ratione aliquam
          reprehenderit fugiat. Soluta eius odio corporis corrupti unde
          reiciendis. Omnis similique velit nostrum? Ex maxime voluptates
          blanditiis accusantium, laboriosam velit tempora quod debitis nam
          mollitia quibusdam quis explicabo molestias cupiditate fuga voluptate,
          ullam sint nihil autem ipsa ratione? Nisi doloribus nam tempora iure
          itaque voluptatibus, quas similique! Maiores exercitationem natus ea
          commodi numquam odio hic sunt facilis.
        </p>
        <a
          className="mx-6 my-5 px-5 py-2 rounded-md hover:bg-purple-500 hover:rounded-3xl hover:font-bold hover:text-white bg-orange-300"
          href="https://www.linkedin.com/in/rajesh-mondal-51544922a/"
          target="_blank"
        >
          Visit This Site
        </a>
      </div>
      <div className="flex-1">
        <BannerImage></BannerImage>
      </div>
    </div>
  );
};

export default Banner;
