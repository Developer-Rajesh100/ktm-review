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
          When the KTM 390 Adventure debuted in fall of 2019, I was immediately
          intrigued. It looked like a lot of bike for little money. I didn’t get
          a chance to ride the new model in 2020 (thanks, COVID!), but now I’ve
          just got back from a 5,400 km trip around Newfoundland on the
          made-in-India Katoom—one of the longest tests I’ve ever done on a
          press bike. Here’s what I found out about the machine:
        </p>
        <p className="mb-6 mt-6">
          On the street, the KTM 390 Adventure is a nimble as a barrel racer,
          with a surprisingly powerful single-cylinder engine. It’s funny,
          because the engine was my biggest concern when I picked up the bike. I
          was riding pretty carefully during the 1,000 km break-in period,
          because the 5-inch TFT dash (easily controlled by a four-button array
          on the left handlebar) would flash menacingly as I approached 6,500
          rpm. Heeding the warnings, I backed off on the throttle.
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
