import React, { useLayoutEffect, useRef, useState } from 'react'

function UseLayout() {
    const [width,setWidth] = useState(100)
    console.log("width ==>",width);
    const [height,setHeight] = useState(100)
    console.log("height ==>",height);  
    const boxRef = useRef(null)
    // console.log("boxRef ===>",boxRef);

    useLayoutEffect(()=>{
        const handleResize = () =>{
            // console.log("check function");
            setWidth(boxRef.current.clientWidth)
            setHeight(boxRef.current.clientHeight)
        }
        handleResize()

        window.addEventListener('resize',handleResize);
        return () => window.removeEventListener('resize',handleResize)
    },[])

  return (
   <>
        <div ref={boxRef} style={{width:'55%',height:'55%',backgroundColor:'red'}}>
            <p>width:{width}px</p>
            <p>height:{height}px</p>
        </div>
   </>
  )
}

export default UseLayout
