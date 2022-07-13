import React, { useState } from 'react';
import FunImg from './FunImg';


  function FuncComp() {
      const [count, setCount] = useState(0);
      const [name, setName] = useState("Dhaval");
      const [age, setAge] = useState("29");
      const [number, setNumber] = useState(1);
      const [isImg, setIsImg] = useState(false);



      const  changeState = () => {

          setName({ name: "Anita" });
          setAge({age:"30"});
      }

      const numberplus = () => {
          
          setNumber(number + 1);
      }

      const numberminus = () => {

          setNumber(number - 1);
      }



     return (
         <div>
             
             <h1>My Name is {name} and my age is {age}</h1>
             <p>You clicked {count} times</p>
             
         <button onClick={() => setCount(count + 1)}>Click me
        </button>
             <button onClick={() => changeState()}>Change State</button>
             
             <hr />
             <button onClick={() => numberplus()}>+</button><br></br>
             <h1>{number}</h1>
             <button onClick={() => numberminus()}>-</button><br></br><br></br>


             <button onClick={() => setIsImg({ isImg:true })}>Show</button>
             <button onClick={() => setIsImg({ isImg: false })}>Hide</button><br></br><br></br>
             {

                 <FunImg />
                 
             }
             
      </div>
    );
}
  
export default FuncComp;