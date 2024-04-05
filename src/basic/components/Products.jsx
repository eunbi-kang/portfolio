import React, { useEffect, useState } from "react";

export default function Products() {

  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange =() => setChecked((prev)=> !prev);
  
  /* 
   * set Loading Message & Error Message
   */
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();


  /* useEffect가 호출되었다는 것은 데이터 로딩을 위해서 호출되었다는 것이라고 보면됨 */
  useEffect(()=> {
    setLoading(true);    // 로딩시작
    setError(undefined); // 에러초기화

    if(process.env.NODE_ENV === 'development') {
      fetch(`portfolio/data/${checked ? 'sale_': ''}products.json`)
      .then((res)=> res.json()) 
      .then((data) => {
        console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      }).catch(e=> setError('에러가 발생했음!'))
      .finally(()=> setLoading(false));
      return () => {
        console.log('🧹깨끗하게 청소하는 일들을 합니다.')
      }
    } else {
      fetch(`data/${checked ? 'sale_': ''}products.json`)
      .then((res)=> res.json()) 
      .then((data) => {
        console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      }).catch(e=> setError('에러가 발생했음!'))
      .finally(()=> setLoading(false))
      return () => {
        console.log('🧹깨끗하게 청소하는 일들을 합니다.')
      }
    }
  }, [checked]);

  if(loading) return <p>Loading ...</p>
  if(error) return <p>{error}</p>
  

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
