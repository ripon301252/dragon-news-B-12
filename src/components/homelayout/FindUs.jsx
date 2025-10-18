import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>
      <div className="join join-vertical w-full">
        <button className="btn bg-base-100 justify-start join-item">
          <FaFacebook  className="text-2xl"/> FaceBook
        </button>
        <button className="btn bg-base-100 justify-start join-item">
          <FaTwitter className="text-2xl"/> Twitter
        </button>
        <button className="btn bg-base-100 justify-start join-item">
          <FaInstagram className="text-2xl"/> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
