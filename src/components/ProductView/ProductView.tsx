import React from "react";
import styles from "./ProductView.module.scss";
import { useRouter } from "next/router";
const Product = () => {
  const router = useRouter(); 
  const name = router.query.name;
  const image = router.query.image;
  const price = router.query.price;
  const description = router.query.description;
  return (
    <div className={styles.ProductView}>
      <div className={styles.Details}>
        <div className={styles.image}>
          <img src="img.jpg" alt="Image"></img>
        </div>{" "}
        <div className={styles.data}>
          {" "}
          <p style={{ fontSize: "50px", marginBottom: "1rem" }}>{name}</p>
          <p style={{ fontSize: "25px", marginBottom: "1rem" }}>{price}</p>
          <button className={styles.Cart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
