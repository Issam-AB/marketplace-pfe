import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed ';

const Home = ({ products }) => {
  return (
    <main className="max-w-screen-2xl mx-auto">
      {/* Banner */}
      <Banner />
      {/* Product Feed */}
      <ProductFeed products={products} />
    </main>
  );
};
export default Home;

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}

//** GET  >>> https://fakestoreapi.com/products */
