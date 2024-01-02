import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Carrousel = ({ images, interval, type, pagination }) => {
  return (
    <>
      <Splide
        options={{
          rewind: true,
          type: type ? type : "fade",
          autoplay: true,
          interval: interval ? interval : 7000,
          perPage: 1,
          arrows: false,
          pagination: pagination ? pagination : false,
          pauseOnHover: true,
          resetProgress: false,
        }}
      >
        {images?.map((image, index) => (
          <SplideSlide key={index}>
            <img src={image} alt="home banner image" />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default Carrousel;
