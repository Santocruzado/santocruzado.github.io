import Carousel from "./Carousel";
import HeaderButton from "./HeaderButton";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
  const slides = [
    { imageUrl: "/images/header/header1.jpg", caption: "Slide 1" },
    { imageUrl: "/images/header/header2.jpg", caption: "Slide 2" },
    { imageUrl: "/images/header/header3.jpg", caption: "Slide 3" },
  ];

  return (
    <header className="relative w-full h-screen">
      <Carousel slides={slides} />
      <HeaderTitle />
      <HeaderButton />
    </header>
  );
};

export default Header;
