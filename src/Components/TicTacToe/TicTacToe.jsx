import React, {useState, useRef } from 'react'
import './TicTacToe.css'

import circleBox from '../Assets/oxparent.png'
import xBox from '../Assets/xxparent.png';

//this will be the storage
let data = ["","","","","","","","",""];

const TicTacToe = () => {

  //set the variables and array to be used
  let [count, setCount] = useState(0)
  let [lock, setLock] = useState(false)
  let titleRef = useRef(null);

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);  
  let box4 = useRef(null); 
  let box5 = useRef(null);
  let box6 = useRef(null); 
  let box7 = useRef(null); 
  let box8 = useRef(null);
  let box9 = useRef(null);
  let boxArray = [box1,box2,box3, box4, box5, box6, box7, box8, box9];


  //toggle function will execute onclicking the boxes
  const toggle = ( e, num ) => {
    //if a user wins, lock will be set to true and the boxes will lock, 
    //and the rest of the toggle code will not execute
    if (lock) {
      return 0;
    }
    //if current count is even number, set the box to "X", else, set it to "O"
    if (count%2===0) {
      e.target.innerHTML = `<img src='${xBox}'>`;
      //based on the passed in parameter value, set the data array's index to x 
      data[num]='x';
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${circleBox}'>`;
      data[num]='o';
      setCount(++count);
    } 
    //invoke checkWin() function after box has been toggled
    checkWin()
  }

  const checkWin = () => {
    //all the possible box winning combinations
    if (data[0]===data[1] && data[1]===data[2] && data[2]!=="")    {
      won(data[2]);
    } 
    else if (data[3]===data[4] && data[4]===data[5] && data[5]!=="")    {
      won(data[5]);
    } 
    else if (data[6]===data[7] && data[7]===data[8] && data[8]!=="")    {
      won(data[8]);
    }    
    else if (data[0]===data[3] && data[3]===data[6] && data[6]!=="")    {
      won(data[6]);
    } 
    else if (data[1]===data[4] && data[4]===data[7] && data[7]!=="")    {
      won(data[7]);
    } 
    else if (data[2]===data[5] && data[5]===data[8] && data[8]!=="")    {
      won(data[8]);
    } 
    else if (data[0]===data[4] && data[4]===data[8] && data[8]!=="")    {
      won(data[8]);
    } 
    else if (data[0]===data[1] && data[1]===data[2] && data[2]!=="")    {
      won(data[2]);
    } 
    else if (data[2]===data[4] && data[4]===data[6] && data[6]!=="")    {
      won(data[6]);
    }    
  } 

  // lock the boxes and display who won the match
  const won = (winner) => {
    setLock(true);
    if(winner==='x'){
      titleRef.current.innerHTML = `Player "X" wins!`;
    } else  {
      titleRef.current.innerHTML = `Player "O" Wins!`;
    }
  }

  //This reset function will reset the boxes to blank
  const reset = (e) => {
    //unlock the boxes
    setLock(false);
    //make the indexes empty
    data = ["","","","","","","","",""];
    titleRef.current.innerHTML = '<span>React</span>&nbsp; Tic Tac Toe '
    //map the boxes and use innerHTML = ""
    boxArray.forEach((e)=>{
      e.current.innerHTML = "";
      return
    })
    setCount(0)
  }

  return (
    <div className='container'>
      <h1 className='title' ref={titleRef}> <span>React</span> 	&nbsp; Tic Tac Toe</h1>
      <div className='board'>
        <div className='row1'>
            <div className='boxes' ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
            <div className='boxes' ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
            <div className='boxes' ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        <div className='row2'>
            <div className='boxes' ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
            <div className='boxes' ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
            <div className='boxes' ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className='row3'>
            <div className='boxes' ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
            <div className='boxes' ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
            <div className='boxes' ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
        </div>

      </div>
      <button className='reset' onClick={()=>{reset()}}>Reset</button>
    </div>
  )
}

export default TicTacToe