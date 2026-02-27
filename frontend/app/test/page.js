'use client';
import { Button } from '@/components/ui/button';
import { useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';

export default function TestPage() {
    
    // @type {number} counter
    const [counter, setCounter] = useState(0);
    const [formData, setFormData] = useState({
      name: "",
      age : 0,
      food : "none"
    })
    const ref = useRef(0);
    const socket = useRef(null);
    socket.current = io("http://10.10.15.140:3279");
    let socketConn = socket.current;

    socketConn.on("connect", () => {
      console.log("connected to socket server");
    });

    socketConn.on("disconnect", () => {
      console.log("disconnected from socket server");
    } );  

    socketConn.on("message", (data) => {    
      console.log("message from server : ", data);
    });

    const onFormChange = (e) => {
      setFormData((prev)=>{
        return {
        ...prev, 
        [e.target.name] : e.target.value
        }
      })
      // this updates form asynchronously 
      // console.log(formData);
    }


    const onFormSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      socketConn.emit("message", formData);
    }


    useEffect( ()=> {
      console.log(formData);
    }, [formData]);


    useEffect(()=> {
      console.log("mounted once");
    },[]);

    

    useEffect(()=> {
      console.log("rerendered ") ;
    });


  return (
    <div>
      <h1>Test Page</h1>
      <p>This is a test page for the frontend application.</p>
      <p> {counter} {"<-- Increase this counter with useState???"} <Button onClick={() => setCounter(counter+1)} className={undefined} variant={undefined} size={undefined} /> </p>
      <p> {ref.current} {"<-- Increase this counter with useRef???"} <Button onClick={() => ref.current++} className={undefined} variant={undefined} size={undefined} /> </p>
      <form method="post" onSubmit = {onFormSubmit}> 
      <div className='flex flex-col gap-4'> 
        <h1> Optimized useState Form Handler </h1>
        Name : <input type = "text" className= "text-black" name="name" onChange = {onFormChange}/>  <br></br> 
        Age : <input type = "number" className= "text-black" name="age" onChange = {onFormChange} />  <br></br>
        Food : <select name="food" id="food" className= "text-black" onChange = {onFormChange}>
          <option value="pizza">Pizza</option>
          <option value="burger">Burger</option>
          <option value="sushi">Sushi</option>
        </select>   
      </div> 

      <Button type="submit" className={undefined} variant={undefined} size={undefined} >Submit</Button>
      </form>
    
    
    </div>
  );
}