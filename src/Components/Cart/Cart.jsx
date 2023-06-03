import React from "react";
import { Badge, Dropdown ,Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Cart.module.css";
import { CartState } from "../../Context/cartContext";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    state: { cartItems },
    dispatch,
  } = CartState();
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
          <FaShoppingCart color="#383838" />
          <Badge className={`bg-transparent p-1 ${styles.BadgeColor}`}>
            {cartItems.length}
          </Badge>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ minWidth: 325 }}>
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((slide) => (
                <span key={slide.id} className={styles.allCart}>
                  <img src={slide.imgPro} alt={slide.name} className={styles.imgCart}/>
                  <div className={styles.cartDetails}>
                    <span>{slide.name}</span>
                    <span>EGY <span className={styles.cartPrice}>{slide.price}</span></span>
                  </div>
                  <AiFillDelete className={styles.cartIcon}
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: slide,
                      })
                    }
                  />
                

                </span>
                  
              ))}
          <Link to='/details'>
            <Button className={styles.cartBtn}>
              Go to cart
            </Button>

          </Link>
            </>
          ) : (
            <p className="text-center mb-0">Cart is Empty !</p>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
