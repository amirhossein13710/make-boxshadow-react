import React,{useState} from 'react'

function App() {

  const [hori,setHori] = useState(10)
  const [veri,setVeri] = useState(10)
  const [blur,setBlur] = useState(10)
  const [spread,setSpread] = useState(10)
  const [color,setColor] = useState("black")

  console.log(hori,veri,blur,spread,color);


  return (
    <div className='app'>
      <div className='right-box'>
        <div className='form-group'>
          <label>طول افقی</label>
          <input type="range" className='form-range' min= "-200" max= "200" value={hori} onChange={(e)=>setHori(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label>طول عمودی</label>
          <input type="range"  className='form-range' min= "-200" max= "200" value={veri} onChange={(e)=>setVeri(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label>تاری</label>
          <input type="range" className='form-range' min= "0" max= "100" value={blur} onChange={(e)=>setBlur(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label>گسترش رنگ</label>
          <input type="range" className='form-range' min= "-100" max= "50" value={spread} onChange={(e)=>setSpread(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label> رنگ</label>
          <input type="color" value= {color} onChange={(e)=>setColor(e.target.value)}/>
        </div>
      </div>
      <div className='left-box' style={{boxShadow:`${hori}px ${veri}px ${blur}px ${spread}px ${color}`}}>
        <div className='change'>
          <p>box-shadow : {hori}px {veri}px {blur}px {spread}px {color}</p>
        </div>
      </div>
    </div>
  )
}

export default App