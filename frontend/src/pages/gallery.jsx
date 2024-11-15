import { useState } from 'react';
import UserNavbar from "../components/usernavbar";
import imageOne from "../images/user1.png";
import imageTwo from "../images/user2.png";
import imageThree from "../images/user3.png";
import imageFour from "../images/user4.png";
import imageFive from "../images/user5.png";
import imageSix from "../images/user6.png";
import { FaComment, FaHeart, FaPaperPlane, FaShare } from 'react-icons/fa';

const imageDetails = [
  {
    src: imageOne,
    title: "Senior Photography",
    description: "This is a senior photography image taken by our expert photographers.",
  },
  {
    src: imageTwo,
    title: "Wedding Photography",
    description: "Capture the best moments of your wedding with our top-tier wedding photography.",
  },
  {
    src: imageThree,
    title: "Fashion Photography",
    description: "Fashion photography with a touch of elegance and style.",
  },
  {
    src: imageFour,
    title: "Stilllife Photography",
    description: "Artistic still life photography showcasing the beauty in everyday objects.",
  },
  {
    src: imageFive,
    title: "Landscape Photography",
    description: "Breathtaking landscape photography capturing the beauty of nature.",
  },
  {
    src: imageSix,
    title: "Headshot Photography",
    description: "Professional headshot photography for your personal and business needs.",
  },
];

export default function UserGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className={`bg-black bg-opacity-100  text-white pb-10 ${selectedImage ? 'overflow-hidden':'overflow-visible'}`}>
      <UserNavbar />
      <div className={`pl-20 pr-10 ${selectedImage ? 'pt-5' : 'pt-0'} ${selectedImage ? '-mt-10':"-mt-0"} pb-20`}>
        {selectedImage ? (
          <div className="flex flex-col  ">
            <div className="w-full gap-10 flex md:flex-row  flex-col  items-center justify-center text-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-[500px] h-[300px] opacity-100 transition-opacity duration-300"
              />
              <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-100">
                <p className="text-[30px] font-bold">{selectedImage.title}</p>
                <p className=''>{selectedImage.description}</p>
                <button
                  className="mt-5 bg-red-600 px-4 py-2 text-white"
                  onClick={() => setSelectedImage(null)}
                >
                  Back to Gallery
                </button>
      
              </div>
            </div>
            <div className='flex md:pl-20 pl-5 pt-5 gap-10 text-red-600 '>
              <FaHeart className='h-[40px] w-[40px]'/>
              <FaComment  className='h-[40px] w-[40px]' />
              <FaShare  className='h-[40px] w-[40px]'/>
              <FaPaperPlane  className='h-[40px] w-[40px]'/>
              

            </div>
            
          </div>
        ) : (
          <>
            <p className="text-[22px]">
              View all kinds of pictures taken by photographers
              <br /> in our
              <span className="text-[#B60418]"> Collection Gallery</span>
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className="flex xl:flex-row flex-col pl-2 pr-2 gap-5 pt-5 items-center justify-center">
                <div
                  className="relative w-[250px] md:w-[300px] h-[500px] text-center cursor-pointer"
                  onClick={() => setSelectedImage(imageDetails[0])}
                >
                  <img
                    src={imageDetails[0].src}
                    alt={imageDetails[0].title}
                    className="w-full h-full opacity-100 transition-opacity duration-300 hover:opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <p className="text-[30px] font-bold">{imageDetails[0].title}</p>
                  </div>
                </div>

                <div className="flex flex-col flex-wrap gap-10 items-center justify-center pl-4 pr-4">
                  <div className="flex flex-wrap gap-4">
                    <div
                      className="relative w-[250px] h-[210px] text-center cursor-pointer"
                      onClick={() => setSelectedImage(imageDetails[1])}
                    >
                      <img
                        src={imageDetails[1].src}
                        alt={imageDetails[1].title}
                        className="w-full h-full opacity-100 transition-opacity duration-300 hover:opacity-50"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <p className="text-[30px] font-bold">{imageDetails[1].title}</p>
                      </div>
                    </div>

                    <div
                      className="relative w-[250px] md:w-[300px] h-[210px] text-center cursor-pointer"
                      onClick={() => setSelectedImage(imageDetails[2])}
                    >
                      <img
                        src={imageDetails[2].src}
                        alt={imageDetails[2].title}
                        className="w-full h-full opacity-100 transition-opacity duration-300 hover:opacity-50"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <p className="text-[30px] font-bold">{imageDetails[2].title}</p>
                      </div>
                    </div>

                    <div
                      className="relative w-[250px] h-[210px] text-center cursor-pointer"
                      onClick={() => setSelectedImage(imageDetails[3])}
                    >
                      <img
                        src={imageDetails[3].src}
                        alt={imageDetails[3].title}
                        className="w-full h-full opacity-100 transition-opacity duration-300 hover:opacity-50"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <p className="text-[30px] font-bold">{imageDetails[3].title}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:flex-row flex-col gap-4 items-center justify-center">
                    <div
                      className="relative w-[250px] md:w-[570px] h-[210px] text-center cursor-pointer"
                      onClick={() => setSelectedImage(imageDetails[4])}
                    >
                      <img
                        src={imageDetails[4].src}
                        alt={imageDetails[4].title}
                        className="w-full h-full opacity-100 transition-opacity duration-300 hover:opacity-50"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <p className="text-[30px] font-bold">{imageDetails[4].title}</p>
                      </div>
                    </div>

                    <div
                      className="relative w-[250px] h-[210px] text-center cursor-pointer"
                      onClick={() => setSelectedImage(imageDetails[5])}
                    >
                      <img
                        src={imageDetails[5].src}
                        alt={imageDetails[5].title}
                        className="w-full h-full opacity-100 transition-opacity duration-300 hover:opacity-50"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <p className="text-[30px] font-bold">{imageDetails[5].title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
