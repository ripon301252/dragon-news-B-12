import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div>
      <div className="flex items-center gap-3 p-3 bg-base-200 ">
        <p className="text-base-100 md:text-base text-xs bg-secondary px-3 py-1">Latest</p>
        <Marquee className="flex md:text-base text-xs gap-10" pauseOnHover={true} speed={60}>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            repudiandae perspiciatis dolores....{" "}
          </p>
          <p className="text-black mx-4">
            Lorem ipsum dolor sit amet consectetur....{" "}
          </p>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            repudiandae perspiciatis dolores....{" "}
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
