import './App.css'
import React, { useState, useEffect } from "react";
import Love from './Love.png'
import Like from './like.png'
import Sad from './sad.png'
import Happy from './happy.png'


function EmojiCounter(props) {
  const [count, setCount] = useState(0);
  const [pic, setPic] = useState(Love);

  useEffect(() => {
          console.log('useEffect called');

          if (props.pic === 'Love') {
            setPic(Love);

          } else if (props.pic === 'like') {
            setPic(Like);

          } else if (props.pic === 'sad') {
            setPic(Sad);

          } else if (props.pic === 'happy') {
            setPic(Happy);
          }
});
const ClickHandle =() =>
{
       console.log('count', count)   
       setCount(count+1);
};
return (
          <div>
                    <p>
                              {props.pic}<span></span>
                              <img src={pic} alt='' />
                              <button onClick ={ClickHandle}>{count}</button>
                    </p>
          </div>
)
}

export default EmojiCounter