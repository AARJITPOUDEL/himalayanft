import React from "react";
import styles from "./Button.module.scss";
import product from "../HomePage/HomePage";
import { StaticImageData } from "next/image";
import { useState } from "react";

const CartButton = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  type Product = {
    id: number;
    name: string;
    price: number;
    image: string | StaticImageData;
    description: string;
  };
  const handleAddToCart = (products: Product) => {
    alert(`${products.name} added to cart!`);
  };
  return (
    <div>
      <button
        className={styles.cartbtn}
        onClick={() => handleAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
