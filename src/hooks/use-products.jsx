import {useEffect, useState} from 'react';

export default function useProducts({salesOnly}) {
  /*
   * set Loading Message & Error Message
   */
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  /* useEffect가 호출되었다는 것은 데이터 로딩을 위해서 호출되었다는 것이라고 보면됨 */
  useEffect(() => {
    setLoading(true); // 로딩시작
    setError(undefined); // 에러초기화

    if (process.env.NODE_ENV === "development") {
      fetch(`portfolio/data/${salesOnly ? "sale_" : ""}products.json`)
        .then((res) => res.json())
        .then((data) => {
          console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
          setProducts(data);
        })
        .catch((e) => setError("에러가 발생했음!"))
        .finally(() => setLoading(false));
      return () => {
        console.log("🧹깨끗하게 청소하는 일들을 합니다.");
      };
    } else {
      fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
        .then((res) => res.json())
        .then((data) => {
          console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
          setProducts(data);
        })
        .catch((e) => setError("에러가 발생했음!"))
        .finally(() => setLoading(false));
      return () => {
        console.log("🧹깨끗하게 청소하는 일들을 합니다.");
      };
    }
  }, [salesOnly]);

  return [loading, error, products];
}

