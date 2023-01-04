import './App.css';
import React, { useState, useEffect } from 'react';
import db from './firestore';
import logo from './Mr-Beast-Logo.png'
import audio from './audio.mp3'

// const docRef = doc(db, "count", "count");
// const docSnap = await getDoc(docRef);
// console.log(docSnap)
function App() {
  const [count, setCount] = useState([]);
  const docRef= db.collection("count").doc("count")

  const fetchCount = async()=>{
    db.collection("count").doc("count")
    .onSnapshot((doc) => {
        setCount(parseInt(doc.data().count));
    });
    
  }

  const addCount = () => {
    var playAudio = new Audio(audio)
    playAudio.play()
    docRef.update({count: [count + 1]})
  }

  useEffect(() => {
      fetchCount();
    }, [])


    console.log(count)
  return (

    // <Todo/>
    <div className="main">
      <div className='counter'>{count}</div>

      <img
        src={logo}
        alt='Mr. Beast Logo'
      >
      </img>
      

      <div className='wrapper'><button onClick={() => addCount()}>Logan Paul</button></div>

    </div>
  );
 }

export default App;
