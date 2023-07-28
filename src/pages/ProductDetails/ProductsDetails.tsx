import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductDetails = () => {

  const [productDetail, setProductDetail] = useState<TProduct[]>([]);

  useEffect(() => {
    if(id){
        window
      .fetch("api/Avo/${id}")
      .then((res) => res.json())
      .then(({ data }) => {
        setProductDetail(data);
      });
    }
    
  });

  const {query: {id}} = useRouter() 
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Products</h1>
      <div>
        {productDetail.map((product) => (
          <div key={product.id}>
            {product.name}
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
