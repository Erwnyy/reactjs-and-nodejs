import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import './itemProduct.css'

// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper";

const ProductDetail = () => {
  return (
    <div>
        <section class="home" id="home">
            <div class="productDetail_container">
                    <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                    }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                    <img src="https://intaninchan.files.wordpress.com/2013/02/weh5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://intaninchan.files.wordpress.com/2013/02/weh5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://intaninchan.files.wordpress.com/2013/02/weh5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://intaninchan.files.wordpress.com/2013/02/weh5.jpg" />
                    </SwiperSlide>
                    </Swiper>

                    <div className='detail_data'>
                            <span class="home_new">Bali, ubud 2020</span>
                            <h1 className="home_title">Pantai Rinjau Tanjung Ranung</h1>
                            <p class="home_description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <Link to="/produk_detail" className='button-dark'>Explore now</Link>
                    </div>
            </div>
        </section>
    </div>
  )
}

export default ProductDetail