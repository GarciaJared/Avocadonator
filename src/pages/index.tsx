import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "src/Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails/ProductsDetails";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [productList, setProductList] = useState<TProduct[]>([]);

  // useEffect(() => {
  //   window
  //     .fetch("api/Avo/Avo")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json))
  //     .then(({ data }) => {
  //       setProductList(data);
  //     });
  // }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Navbar></Navbar>
      {/* <div>
        {productList.map((product) => (
        <div
        key={product.id}
        >{product.name}</div>
      ))}
      </div> */}
      <ProductDetails></ProductDetails>
    </main>
  );
}
