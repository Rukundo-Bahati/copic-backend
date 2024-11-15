import { useParams } from "react-router-dom";
import UserNavbar from "../components/usernavbar";
import imageOne from "../images/user1.png";
import imageTwo from "../images/user2.png";
import imageThree from "../images/user3.png";
import imageFour from "../images/user4.png";
import imageFive from "../images/user5.png";
import imageSix from "../images/user6.png";

const images = [
  { id: 1, src: imageOne, title: "Senior Photography", description: "This is a detailed description of Senior Photography." },
  { id: 2, src: imageTwo, title: "Wedding Photography", description: "This is a detailed description of Wedding Photography." },
  { id: 3, src: imageThree, title: "Fashion Photography", description: "This is a detailed description of Fashion Photography." },
  { id: 4, src: imageFour, title: "Stilllife Photography", description: "This is a detailed description of Stilllife Photography." },
  { id: 5, src: imageFive, title: "Landscape Photography", description: "This is a detailed description of Landscape Photography." },
  { id: 6, src: imageSix, title: "Headshot Photography", description: "This is a detailed description of Headshot Photography." },
];

export default function ImageDetail() {
  const { id } = useParams();
  const image = images.find(img => img.id === parseInt(id));

  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <div className="bg-black bg-opacity-100 text-white pb-10">
      <UserNavbar />
      <div className="pl-20 pr-10 pt-10">
        <div className="text-center">
          <h1 className="text-[30px] font-bold">{image.title}</h1>
          <img src={image.src} alt={image.title} className="mt-5 mb-5 max-w-full h-auto" />
          <p className="text-[18px]">{image.description}</p>
        </div>
      </div>
    </div>
  );
}
