import CoursesCards from "./CoursesCards";
import bgmiImg from "../assests/images/BgmiCarding.jpeg";
import binFindImg from "../assests/images/BinFind.jpeg";
import instaMartImg from "../assests/images/Instamart.jpeg";
import cardingImg from "../assests/images/Carding.jpeg";
import carderZoneImg from "../assests/images/CarderZone.jpeg";

const courses = [
  {
    id: 1,
    title: "BGMI UC CARDING COURSE",
    price: "1500.00",
    image: bgmiImg,
    description: "This course include bin find method , live uc hit recorded videos , 5 cc shop official link , working bins , validity 30+days , cc killing method , refund trick prozone daily live , doubt solving via chat ",
  },
  {
    id: 2,
    title: "PREMIUM BIN FIND METHOD",
    price: "1000.00",
    image: binFindImg,
    description: "This method include bin find for bgmi,zomato,blinkit,how to use raven,instamart,zepto,swiggy,ff,how to use cc shop",
  },
  {
    id: 3,
    title: "INSTAMART ZEPTO CARDING COURSE",
    price: "2000.00",
    image: instaMartImg,
    description: "",
  },
  {
    id: 4,
    title: "PAID CC",
    price: "1000.00",
    image: cardingImg,
    description: "You will get cc with balance over 3-10k inr you can use in play store , bgmi uc , ff , yt premium , zepto , blinkit.  This cc have few term and condition must jion bgmi uc carding method or vip when we send card you only have 7 minutes to spend whole amount #non refundable",
  },
  {
    id: 5,
    title: "BASIC CARDING",
    price: "800.00",
    image: cardingImg,
    description: "This course include yt premium , snapchat premium , chat gpt , remini , spotify open ai any subscription based website carding",
  },
  {
    id: 6,
    title: "VIP + COURSE",
    price: "2500.00",
    image: carderZoneImg,
    description: "This course includes all method of carding such as zomato swiggy myntra meesho instamart blinkit zepto bgmi uc ff bin find method 5 cc shop binance deposit a to z pay in two times pay 2k and then pay 500 ",
  },
];

const Courses = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <CoursesCards key={index} {...course} />
      ))}
    </div>
  );
};

export default Courses;
export { courses };
