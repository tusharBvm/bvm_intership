import { useEffect, useState } from "react";

const useFetch = (url) => {
  //   console.log("url ==>", url);

  const [data, setData] = useState(null);

  //   first way  ==========================

  //   useEffect(() => {
  //     fetch(url)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Response Not Ok");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log("data ===>", data);
  //         setData(data)
  //       });
  //   }, [url]);

  // ==   first way end  =========================

  ///   fack code  ==============  start ===============

  // useEffect(()=>{
  //     fetch(url)
  //     .then((response,data)=>{
  //         if (response) {
  //              response.json()
  //             // console.log(response);
  //         }else if(!response.ok){

  //         }
  //     })
  // },[url])

  // .then((response)=>{

  //         console.log(response.text());
  //     if (!response.ok) {
  //         throw new Error("Response Not Ok");
  //     }else if (response.ok) {
  //         response.json()
  //         setData(data)

  //         // console.log("data ==>",data);
  //     }
  // })

  // fack code end ===================================

  useEffect(() => {
    (async () => {
      const data = await fetch(url);
    //   console.log("data ==>",data);
      const newData = await data.json();
    //   console.log("newData ==>",newData);
      if (newData) {
        setData(newData);
      }
    })();
  }, [url]);
  return [data];
};

export default useFetch;
