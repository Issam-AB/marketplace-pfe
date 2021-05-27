import React from 'react';
import Product from '../components/Product';

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-32 ">
      {products?.map(({ id, title, decription, price, category, image }) => (
        <Product
          key={id}
          title={title}
          decription={decription}
          price={price}
          category={category}
          image={image}
        />
      ))}
    </div>
  );
};

export default ProductFeed;
