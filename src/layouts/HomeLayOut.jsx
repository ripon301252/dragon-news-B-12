import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";
import Loading from "../Pages/Loading";

const HomeLayOut = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <Header></Header>
        {import.meta.env.VITE_name}
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3  {*:border} grid md:grid-cols-12 grid-cols-1 gap-5">
        <aside className="md:col-span-3 col-span-6 sticky top-0 h-fit ">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
        <aside className="md:col-span-3 col-span-6 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayOut;
