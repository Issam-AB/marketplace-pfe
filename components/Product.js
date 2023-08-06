import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slice/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 0;

const Product = ({ id, title, description, price, category, image }) => {
	const [rating] = useState(
		Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
	);
	const [hasPrism] = useState(Math.random() < 0.5);

	const dispatch = useDispatch();
	const addItemToBasket = () => {
		const product = {
			id,
			title,
			description,
			price,
			category,
			image,
			rating,
			hasPrism,
		};
		// Sending product as an action to the redux STORE... the basket slice
		dispatch(addToBasket(product));
	};

	return (
		<div className="relative m-5 flex flex-col z-30 bg-white p-10">
			<p className="absolute top-2 right-2 tex-xs italic text-gray-400">
				{category}
			</p>

			<Image src={image} height={200} width={200} objectFit="contain" />

			<h4 className="my-3">{title}</h4>

			<div className="flex">
				{Array(rating)
					.fill()
					.map((_, i) => (
						<StarIcon className="h-5 text-green-700" key={i} />
					))}
			</div>

			<p className="text-sx my-2 line-clamp-2">{description}</p>

			<div className="mb-5">
				<Currency quantity={price} currency="mad" />
			</div>
			{hasPrism && (
				<div className="flex items-center space-x-8 -mt-5">
					<img
						src="https://qph.fs.quoracdn.net/main-qimg-227bd435134f40c302b9955d96eabaff.webp"
						alt=""
						className="w-12"
					/>
					<p className="text-xs text-gray-500 ">FREE Next-day Delivery </p>
				</div>
			)}
			<button onClick={addItemToBasket} className="mt-auto button">
				Add to Basket
			</button>
		</div>
	);
};

export default Product;
