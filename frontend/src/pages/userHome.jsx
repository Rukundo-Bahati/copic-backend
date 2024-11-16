import UserNavbar from "../components/usernavbar";
import Bg from "../images/usertwo.png";
import { useState } from "react";
import imageOne from "../images/userone.png";
import imageTwo from "../images/userthree.png";
import imageThree from "../images/four.png";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function UserHome() {
  const images = [imageOne, Bg, imageTwo, imageThree];

  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className="bg-black bg-opacity-100">
      {/* Background Carousel */}
      <div
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <UserNavbar />
        <div className="flex flex-col items-center justify-center text-white h-full">
          <div className="flex flex-col items-center text-center space-y-5">
            <h2 className="text-[40px] font-bold">
              Choose your own Photographer
            </h2>
            <p className="text-[25px] leading-relaxed">
              We connect you to Rwanda’s
              <br /> best Photographers in just one simple click.
              <br /> Explore Photographers now.
            </p>
            <Link to={"/gallery"}>
              <button className="h-10 w-24 text-white bg-[#B60418] hover:bg-[#8B0313] transition-all duration-300 rounded-md">
                Explore
              </button>
            </Link>
          </div>
          <FaAngleRight
            className="text-[#B60418] w-10 h-10 mt-5 cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex space-x-2 items-center justify-center pt-4">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-red-500" : "bg-white"
            }`}
          ></span>
        ))}
      </div>

      {/* Featured Photographers Section */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8">
          Featured Photographers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Alice", "John", "Sophia"].map((name, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <img
                src={images[index % images.length]}
                alt={`Photographer ${name}`}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{name}</h3>
              <p className="text-gray-500">
                Expert in portrait and event photography.
              </p>
              <button className="mt-4 text-sm text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black text-white">
        <h2 className="text-center text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {[
            {
              name: "Emma",
              feedback: "The platform helped me find the perfect photographer for my wedding!",
            },
            {
              name: "Liam",
              feedback: "A seamless and reliable service. Highly recommended!",
            },
            {
              name: "Olivia",
              feedback: "The photographers were professional and delivered amazing photos.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all w-80"
            >
              <p className="text-sm italic">"{testimonial.feedback}"</p>
              <h4 className="mt-4 text-lg font-bold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="flex flex-col md:flex-row justify-between items-center px-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Photographer Finder. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/about" className="hover:text-red-500">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-red-500">
              Contact
            </Link>
            <Link to="/terms" className="hover:text-red-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
