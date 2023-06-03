import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import storeProduct from "../../data/storeProduct.json";
import styles from "./sliderProduct.module.css";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartState } from "../../Context/cartContext";

export default function SliderProduct() {
  //  USE Context:=
  const {
    state: { cartItems },
    dispatch,
  } = CartState();

  //Slider Function:=
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //Cart Quantity:=
  // const quantity = 0;
  return (
    <>
      <div className={styles.sliderSection}>
        <Container className="w-75">
          <div className="text-center pt-4 ">
            <h2>
              {" "}
              New <span className="pinkText">Collection</span>{" "}
            </h2>
            <p className="muted">Send the perfect gift to show your love</p>
          </div>

          <Slider {...settings}>
            {storeProduct.map((slide, index) => (
              <div data-index={index} key={index} className={styles.sliderBox}>
                <div className={styles.sliderItems}>
                  <img className="w-100" src={slide.imgPro} alt="" />
                  <div className={styles.productLayer}>
                    <p className={styles.sliderBoxTit}>{slide.name}</p>
                  </div>
                </div>
                {slide.discount ? (
                  <div className={styles.productInfo}>Sale</div>
                ) : (
                  ""
                )}
                {slide.bestSale ? (
                  <div className={styles.productMoreInfo}>Best Selling</div>
                ) : (
                  ""
                )}

                <div className={styles.bottomText}>
                  <p className={styles.sliderInfo}> {slide.desc}</p>
                  <Link to="" className={styles.sliderLink}>
                    Read More
                  </Link>

                  {slide.discount ? (
                    <p className={styles.sliderPrice}>
                      {" "}
                      <span className={styles.sliderDiscount}>
                        EGY {slide.sales}
                      </span>{" "}
                      EGY {slide.price}
                    </p>
                  ) : (
                    <p className={styles.sliderPrice}> EGY {slide.price}</p>
                  )}
                  {cartItems.some((p) => p.id === slide.id) ? (
                    <Button className={styles.RCartBtn}
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: slide,
                        });
                      }}
                    >
                      Remove
                    </Button>
                  ) : (
                    <Button className={styles.CartBtn}
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: slide,
                        });
                      }}
                    >
                      Add to cart
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </Container>
      </div>
    </>
  );
}
