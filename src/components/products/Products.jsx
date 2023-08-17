import React from 'react';
import Item from '../item/Item';
import products from '../../data';

const Products = () => {
  return (
    <React.Fragment>
    <h1>Products</h1>
    <div className='container d-flex gap-2 flex-wrap justify-content-center py-3'>
      
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
    </React.Fragment>
  );
};

export default Products;