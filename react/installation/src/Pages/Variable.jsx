import React from 'react'

function Variable() {
  // variable

        // var ==> global scope, reassign - true , redeclare - true
        // let ==> block scope , redeclare - false , reassgin - true
        // const ==> block scope , redeclare - false , reassgin - false


        // successfully work var 
        //   {
        //     var x = 5
        //   }
        //   console.log("x==>global scope",x);

        // let and const  is block scope not working on out of scope given this error 
        // Uncaught ReferenceError: y is not defined
        //   {
        //     let  y = 10
        // }
        // console.log("y==>block Scope",y);

        // var ==> redeclare and reassign 
        // var z = 10
        // var z = 15
        // console.log("z",z);

        // let ==> not redeclare given this error => Identifier 'e' has already been declared
        // let e = 5
        // let e =10

        // let reaasign 
        // let e = "nehil"
        //     e = 20
        //     console.log("e==>",e);

        // const not redeclare and reassign 
        // redeclare error ==> Identifier 'z' has already been declared
        // const z = 50
        // const z = 80

        // reassign error => TypeError: Assignment to constant variable.
        // const d = 90
        //     d = 100
        //     console.log("d=>",d);

  return (
    <>
    
    </>
  )
}

export default Variable
