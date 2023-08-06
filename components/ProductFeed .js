import React, { useEffect } from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
	useEffect(() => {
		console.log("hello", products);
	}, []);
	return (
		<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
			{products?.map(({ id, title, description, price, category, thumbnail }) => (
				<Product
					key={id}
					id={id}
					title={title}
					description={description}
					price={price}
					category={category}
					image={thumbnail}
				/>
			))}
			<img src="/images/col_img.jpg" alt="" className="md:col-span-full" />
		</div>
	);
};

export default ProductFeed;
