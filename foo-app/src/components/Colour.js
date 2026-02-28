import React,{useState} from 'react'

export default function Colour() {
    const [colour, setcolour] = useState('black')
  return (
    <div>
        <p style={{color:colour}}>Text</p>
        <button onClick={()=>setcolour("red")}>Red</button>
        <button onClick={()=>setcolour("blue")}>Blue</button>
        <button onClick={()=>setcolour("green")}>Green</button>
        <button onClick={()=>setcolour("yellow")}>Yellow</button>

        <p>You have selected {colour}</p>
    </div>
  )
}
