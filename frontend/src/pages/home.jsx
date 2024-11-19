import { Link } from "react-router-dom";
import Cards from "../components/card";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import imageOne from "../images/bg.png";
import vector from "../images/vector.png";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="flex flex-col z-10"
        style={{
          backgroundImage: `url(${imageOne})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "600px",
        }}
      >
        <Navbar className="fixed top-0" />
        <div className="flex flex-1 items-center justify-center pr-6 pl-6 pb-6 flex-col gap-10">
          <h1 className="text-white font-semibold md:text-[35px] text-[20px] text-center">
            Photography connects us all.
            <br /> We help you find the perfect photographer
            <br /> to capture your most cherished moments.
          </h1>
          <Link to={"/signup"}>
            <button className="h-10 w-24 text-white bg-[#B60418] hover:bg-[#8B0313] transition-all duration-300">
              Sign Up
            </button>
          </Link>
          <img src={vector} alt="" className="w-18 h-12 pb-2" />
        </div>
      </div>

      {/* About Section */}
      <div className="bg-black flex flex-col p-10 text-white gap-10 h-auto">
        <h2 className="text-opacity-80 text-[28px] font-semibold text-center">
          What We Do
        </h2>
        <div className="flex flex-col text-center items-center justify-center">
          <p className="text-[15px] max-w-[550px]">
            At Copic, we connect people in need of professional photography
            services with talented photographers across Rwanda. Whether it's for
            an event, portrait session, or personal project, we make it easy for
            users to find and connect with their ideal photographer. We are not
            photographers ourselves — we’re the bridge that connects users and
            professionals to make unforgettable memories a reality.
          </p>
        </div>
      </div>

      {/* How It Works Section */}

<div className="bg-gray-100 p-10 text-black gap-10">
  <h2 className="text-center text-[28px] font-semibold">How It Works</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center mt-6">
    {/* Step 1 */}
    <div className="p-6 shadow-lg bg-white rounded-lg">
      <h3 className="font-semibold text-[20px]">1. Create an Account</h3>
      <p className="mt-2 text-[14px]">
        Sign up to access our platform. It's quick, free, and only takes a few minutes. 
        Your account helps us match you with the right photographers.
      </p>
    </div>
    {/* Step 2 */}
    <div className="p-6 shadow-lg bg-white rounded-lg">
      <h3 className="font-semibold text-[20px]">2. Browse Photographers</h3>
      <p className="mt-2 text-[14px]">
        Explore a curated list of professional photographers based on their expertise, 
        portfolio, and customer reviews. Use filters to narrow down your search by location, 
        style, or event type.
      </p>
    </div>
    {/* Step 3 */}
    <div className="p-6 shadow-lg bg-white rounded-lg">
      <h3 className="font-semibold text-[20px]">3. View Portfolios</h3>
      <p className="mt-2 text-[14px]">
        Check out detailed portfolios to see the work of each photographer. From weddings 
        to portraits, find the style that resonates with your vision.
      </p>
    </div>
    {/* Step 4 */}
    <div className="p-6 shadow-lg bg-white rounded-lg">
      <h3 className="font-semibold text-[20px]">4. Compare Pricing</h3>
      <p className="mt-2 text-[14px]">
        Get clear and transparent pricing options from photographers so you can make an 
        informed decision that suits your budget.
      </p>
    </div>
    {/* Step 5 */}
    <div className="p-6 shadow-lg bg-white rounded-lg">
      <h3 className="font-semibold text-[20px]">5. Connect Directly</h3>
      <p className="mt-2 text-[14px]">
        Contact photographers directly through our platform. Discuss your requirements, 
        availability, and any other details before finalizing the booking.
      </p>
    </div>
    {/* Step 6 */}
    <div className="p-6 shadow-lg bg-white rounded-lg">
      <h3 className="font-semibold text-[20px]">6. Book and Enjoy</h3>
      <p className="mt-2 text-[14px]">
        Once you've found your perfect match, confirm your booking and get ready to create 
        unforgettable memories with the help of a professional photographer.
      </p>
    </div>
  </div>
</div>


      {/* Testimonials Section */}
      <div
        className="flex flex-col xl:flex-row items-center justify-center flex-1 p-10 text-white h-cover pb-20 gap-10"
        style={{
          background: "linear-gradient(to right, black 50%, #0F0F0F 50%)",
        }}
      >
        <div className="flex flex-col text-white gap-10">
          <h2 className="text-opacity-80 text-[28px] text-white">Testimonials</h2>
          <h2 className="text-[40px] font-semibold text-center">
            Our users love
            <br /> what we do
          </h2>
          <p className="text-center max-w-[500px]">
            "Copic made it so easy to find the perfect photographer for my wedding.
            I couldn't be happier with the results!" — A happy user.
          </p>
          <h2 className="text-[40px] font-semibold text-center">Get Started!</h2>
          <button
            className="bg-[#B60418] text-white h-[50px] w-[100px] flex items-center justify-center"
            style={{ minHeight: "50px", lineHeight: "50px", minWidth: "100px" }}
          >
            Sign Up
          </button>
        </div>
        <div className="gap-10 flex flex-1 flex-col">
          <Cards />
          <Cards />
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="bg-black text-white p-10 text-center">
        <h2 className="text-[28px] font-semibold">Contact Us</h2>
        <p className="mt-2">
          Have questions? Reach out to us at{" "}
          <a href="mailto:info@copic.com" className="text-[#B60418]">
            info@copic.com
          </a>
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
