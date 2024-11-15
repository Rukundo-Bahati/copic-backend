import { Link } from "react-router-dom";
import Cards from "../components/card";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import imageOne from "../images/bg.png";
import vector from "../images/vector.png";
const Home = () => {
  return (
    <div>
      <div
        className="flex flex-col  z-10 "
        style={{
          backgroundImage: `url(${imageOne})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "600px",
        }}
      >
        <Navbar className="fixed top-0 " />
        <div className=" flex flex-1 items-center justify-center pr-6 pl-6 pb-6 flex-col gap-10  ">
          <h1 className="text-white font-semibold md:text-[35px] text-[20px] text-center">
            Photography preserves special moments.
            <br /> Inspire us to live more,
            <br /> see new perspectives,
            <br /> allow self-expression & unites us together.
          </h1>
          <Link to={'/sign'}>
          <button className="h-10 w-24 text-white bg-[#B60418] hover:bg-[#8B0313] transition-all duration-300  ">
            Sign Up
          </button>
          </Link>
          <img src={vector} alt="" className="w-18 h-12 pb-2" />
        </div>
      </div>
      <div className="bg-black flex flex-col p-10 text-white gap-10 h-[600px]">
        <h2 className="text-opacity-80">What we do</h2>
        <div className="flex flex-col text-center items-center justify-center">
          <p className="text-[15px] max-w-[550px]">
            At Copic we want to connect Subjects to Photographers all based in
            Rwanda. Whatever picture they want and no matter where they live, we
            want to give them access to the best of the best Photographers, let
            them experience beyond pictures to reality. Our members book
            Photographers they want & get connected in one simple click. We’re
            connecting more than 100 Subjects & Photographers because great
            Pictures hold onto great memories and allow people to express
            themselves . We are the biggest fans of pictures and we are looking
            to help find “Your next favorite Photographer”
          </p>
        </div>
        <h2 className="text-opacity-80">How it works</h2>
      </div>
      <div
        className="flex flex-col xl:flex-row  items-center justify-center flex-1 p-10 text-white h-cover pb-20 gap-10"
        style={{
          background: "linear-gradient(to right, black 50%, #0F0F0F 50%)",
          color: "black",
        }}
      >
        <div className="flex flex-col text-white gap-10">
          <h2 className="text-opacity-80 text-white">Testimonials</h2>
          <h2 className="text-[40px] font-semibold text-center">
            Our users love
            <br /> what we do
          </h2>
          <p className="text-center max-w-[500px]">
            Over 100 Photographers & their Clients use Copic to connect, and get
            their wonderful moments captures all at one
          </p>
          <h2 className="text-[40px] font-semibold text-center">
            Connect Now !
          </h2>
          <button
            className="bg-[#B60418] text-white h-[50px] w-[100px] md:mx-[200px] flex items-center justify-center"
            style={{ minHeight: "50px", lineHeight: "50px",minWidth:"100px" }}
          >
            Sign Up
          </button>
        </div>
        <div className="gap-10 flex flex-1 flex-col ">
          <Cards/>
          <Cards/>

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
