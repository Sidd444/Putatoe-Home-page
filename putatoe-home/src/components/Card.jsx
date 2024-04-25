import React from 'react'

export default function Card(props) {
  return (
    <div id='card'>
        <img style={{height:"200px",width:"200px"}} src={props.imgLink} alt="" />
        <h4 style={{marginTop:"-10px",color:'rgb(11, 129, 119);'}}>{props.name}</h4>
        <h3 style={{marginTop:"-25px"}}>{props.name}</h3>
        <p style={{marginTop:"-20px",color:"rgb(11, 129, 119)"}}>{props.type}</p>
        <p style={{marginTop:"-20px"}}>₹{props.price}</p><span>{props.dicount}</span>
        <p style={{marginTop:"-20px"}}>In Stock</p>
        <p style={{marginTop:"-20px"}}>Unit: 1</p>
        <div style={{display:"flex",justifyContent:"space-between"}}></div>
        <select defaultValue="quantity: 1" style={{marginRight:"10px"}}>
            <option value="1">quantity:1</option>
            <option value="2">quantity:2</option>
            <option value="3">quantity:3</option>
        </select>
        <button style={{borderRadius:"10px",backgroundColor:"blue",color:"white",height:"40px",width:"100px",fontSize:"smaller",marginleft:"50px",alignItems:"center",padding:"1%"}}>Add To Cart</button>
    </div>
  )
}
