import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed ';

const Home = () => {
  return (
    <main className="max-w-screen-2xl mx-auto">
      {/* Banner */}
      <Banner />
      {/* Product Feed */}
      <ProductFeed />
    </main>
  );
};
export default Home;
