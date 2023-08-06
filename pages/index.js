import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed ";
import { getSession } from "next-auth/client";

const Home = ({ products }) => {
	return (
		<main className="max-w-screen-2xl mx-auto">
			{/* Banner */}
			<Banner />
			{/* Product Feed */}
			<ProductFeed products={products?.products} />
		</main>
	);
};
export default Home;

export async function getServerSideProps(context) {
	const session = await getSession(context);
	const products = await fetch("https://dummyjson.com/products").then((res) =>
		res.json()
	);
	return {
		props: {
			products,
		},
	};
}

//** GET  >>> https://fakestoreapi.com/products */
