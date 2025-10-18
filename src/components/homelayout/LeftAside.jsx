import React, { Suspense } from "react";
import Categories from "../categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<div className="flex justify-center items-center"><span className="loading loading-bars loading-xs"></span></div>}>
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
