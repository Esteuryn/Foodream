import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from "framer-motion";
import menuItems from '../data/MenuItems';
const popularItems = menuItems.slice(0, 6);

function PopularMenuSlider() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Dishes</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
        >
          {popularItems.map((item) => (
            <SwiperSlide key={item.name}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-neutral-900 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-yellow-400 mt-1">${item.price.toFixed(2)}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default PopularMenuSlider;
