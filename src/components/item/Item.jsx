import React from 'react'


const Item =({product})=>{
    return  <div className="card" style={{width: '18rem' }}>
    <img src={product.images[0]} className="card-img-top" alt="image"></img>
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{product.description}</p>
      <p className="card-text">{product.price}</p>
      <a href="#" class="btn btn-primary">Go Details</a>
    </div>
  </div>
   
}

export default Item;

