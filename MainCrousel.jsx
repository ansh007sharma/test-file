import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const MainCarousel = () => {
  const items = mainCarouselData.map((item) => (
    <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      <img
        className="w-full h-full object-cover object-top cursor-pointer"
        role="presentation"
        src={item.image}
        alt=""
      />
    </div>
  ));

  return (
    <AliceCarousel
      items={items}
      controlsStrategy="alternate"
      className="w-full"
      disableButtonsControls
      autoPlay
      infinite
      autoPlayInterval={2500}
    />
  );
};
export default MainCarousel;
