import React, { useEffect, useState } from "react";

export default function Products() {

  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange =() => setChecked((prev)=> !prev);
  // //cors
  useEffect(()=> {
    console.log(process.env.NODE_ENV);
    if(process.env.NODE_ENV === 'development') {
      fetch(`portfolio/data/${checked ? 'sale_': ''}products.json`)
      .then((res)=> res.json()) 
      .then((data) => {
        console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      });
      return () => {
        console.log('🧹깨끗하게 청소하는 일들을 합니다.')
      }
    } else {
      fetch(`data/${checked ? 'sale_': ''}products.json`)
      .then((res)=> res.json()) 
      .then((data) => {
        console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      });
      return () => {
        console.log('🧹깨끗하게 청소하는 일들을 합니다.')
      }
    }
  }, [checked]);


  // useEffect(()=> {
  //   fetch(`data/${checked ? 'sale_': ''}products.json`, {
  //     headers: {
  //       Accept: "application/json"
  //     }
  //   })
  //   .then((res)=> res.json()) 
  //   .then((data) => {
  //     console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
  //     setProducts(data);
  //   });
  //   return () => {
	//     console.log('🧹깨끗하게 청소하는 일들을 합니다.')
  //   }
  // }, [checked]);

  return (
    <>
    <input type="checkbox" value={checked} onChange={handleChange} />
    <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
