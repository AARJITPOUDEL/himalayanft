import React, { useState } from "react";
import styles from "@/components/HomePage/HomePage.module.scss";
import macbook from "@/components/HomePage/images/macbook.jpg";
import iphone from "@/components/HomePage/images/iphone.png";
import asus from "@/components/HomePage/images/asus.png";
import headphones from "@/components/HomePage/images/headphones.png";
import keychron from "@/components/HomePage/images/keychron.png";
import monitor from "@/components/HomePage/images/monitor.png";
import ssd from "@/components/HomePage/images/ssd.png";
import { StaticImageData } from "next/image";
import logo from "@/components/HomePage/images/logo.png";
import Navbar from "../Navbar/Navbar";
import { useRouter } from "next/router";
type Product = {
  id: number;
  name: string;
  price: number;
  image: string | StaticImageData;
  description: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Macbook Air M1 2020",
    price: 19.99,
    image: macbook,
    description: "Best Screen Display Quality",
  },
  {
    id: 2,
    name: "Iphone 14 Pro Max",
    price: 29.99,
    image: iphone,
    description: "Best Screen Display Quality",
  },
  {
    id: 3,
    name: "Asus ROG Strix 15",
    price: 29.99,
    image: asus,
    description: "Best Screen Display Quality",
  },
  {
    id: 4,
    name: "Apple Headphones",
    price: 29.99,
    image: headphones,
    description: "Best Screen Display Quality",
  },
  {
    id: 5,
    name: "KeyChron k8 Mechanical Keyboard",
    price: 29.99,
    image: keychron,
    description: "Best Screen Display Quality",
  },
  {
    id: 6,
    name: "Curved Monitor",
    price: 29.99,
    image: monitor,
    description: "Best Screen Display Quality",
  },
  {
    id: 7,
    name: "2TB External SSD",
    price: 29.99,
    image: ssd,
    description: "Best Screen Display Quality",
  },
  {
    id: 8,
    name: "Sample Product",
    price: 29.99,
    image: "product.jpg",
    description: "Best Screen Display Quality",
  },
];

const HomePage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleAddToCart = (products: Product) => {
    alert(`${products.name} added to cart!`);
  };

  return (
    <div className={styles.homePage}>
      <Navbar></Navbar>
      <div className={styles.topbar}>
        <img src={logo.src} className={styles.logo}></img>
        <input
          type="search"
          onChange={handleSearch}
          placeholder="Search Products"
          className={styles.searchbar}
        />
      </div>
      <h1 className={styles.title}>Featured Products</h1>
      <div className={styles.productContainer}>
        {filteredProducts.map((product) => (
          <div className={styles.product} key={product.id}>
            <div
              onClick={() => {
                router.push({
                  pathname: "/ProductView",
                  query: {
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    image: product.image,
                  },
                });
              }}
              style={{ cursor: "pointer" }}
            >
              {typeof product.image === "string" ? (
                <img src={product.image} alt={product.name} />
              ) : (
                <img
                  src={product.image.src}
                  alt={product.name}
                  height={200}
                  width={200}
                />
              )}
              <h3>{product.name}</h3>
              <p>Rs.{product.price}</p>
            </div>
            <button
              className={styles.cartbtn}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
