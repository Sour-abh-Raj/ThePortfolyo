import { Swiper, SwiperSlide } from "swiper/react";

const Clients = ({ services }) => {
  // Check if services is defined and is an array
  if (!Array.isArray(services)) {
    return null; // or return an appropriate fallback UI
  }

  return (
    <section className="clients">
      <div className="clients-container animated-layer fade-in-right-animation fadeInUp wow">
        <h3>My Clients</h3>
        <Swiper
          className="swiper swiper-clients fadeInUp wow"
          loop={true}
          pagination={{ clickable: true }}
        >
          {/* Map over services to render each client */}
          {services.map((client, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div>
                <img src={client.image.url} alt={client.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};

export default Clients;
