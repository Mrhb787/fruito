import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import CategoryList from '@/components/CategoryList';
import ProductCard from '@/components/ProductCard';
import CheckoutBar from '@/components/CheckoutBar';
import { fetchCategories, fetchProducts } from '@/api/products';

function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [catsData, prodsData] = await Promise.all([
          fetchCategories(),
          fetchProducts(),
        ]);
        setCategories(catsData);
        setProducts(prodsData);
      } catch (error) {
        console.error('Failed to load data', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-primary">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 font-outfit text-lg font-medium">
          Loading Freshness...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans pb-24">
      <Hero />
      <CategoryList
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <div className="px-6 mt-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 font-outfit">
          Fresh Picks For You
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>

      <CheckoutBar itemCount={cart.length} total={cartTotal} />
    </div>
  );
}

export default Home;
