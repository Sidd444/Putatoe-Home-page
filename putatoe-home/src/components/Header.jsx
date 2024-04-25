import React from 'react'

export default function Header() {
  return (
    <div id='head'>
    <div id="header">
        <div className="head"> <img src="https://www.putatoe.com/static/media/logo.aa9da4f6375a03f8abbe.png" alt="logo" /> </div>
        <div className="head">
            <div><h2 style={{marginTop:"-4%",marginLeft:"-30px"}}>Putatoe</h2></div>
            <div><p style={{marginTop:"-20px",marginLeft:"-24px"}}>One Solution</p></div>
        </div>
        <div className="head"><img style={{height:"28px",width:"28px"}} src="https://www.putatoe.com/static/media/bell-svgrepo-com.6f0101ed128197b6d089082da933240d.svg" alt="bell" /></div>
        <div className="head"><img style={{height:"28px",width:"28px"}} src="https://www.putatoe.com/static/media/cart-svgrepo-com.a820f2596d361153df29ebe4dccd767f.svg" alt="cart" /></div>
        <div className="head"><img style={{height:"28px",width:"28px"}} src="https://www.citypng.com/public/uploads/small/11639594342hjraqgbufi3xlb66lt30fz1pwfcydxkjqbynfqdpvufz41ysjtngiet4dyrywgqqqqu56w5nozgrhyecs4ixrlllkl150ogbiid1.png" alt="bell" /></div>
       </div>
       <div>
            <input type="text" placeholder='search for products and brands'/><img style={{height:"30px",width:"30px",marginBottom:"-2%"}} src="https://www.putatoe.com/static/media/comment-multiple-svgrepo-com.f69425ee860b88e3f8e436b83aa01fee.svg" alt="message" />
        </div>
    </div>

  )
}
