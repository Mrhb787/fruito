const CheckoutBar = ({ itemCount, total }) => {
  if (itemCount === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent pointer-events-none z-50">
      <div className="bg-primary text-white rounded-2xl shadow-xl p-4 flex items-center justify-between pointer-events-auto max-w-2xl mx-auto">
        <div className="flex flex-col">
          <span className="text-sm font-medium opacity-90">
            {itemCount} items
          </span>
          <span className="text-xl font-bold">${total.toFixed(2)}</span>
        </div>
        <button className="bg-secondary text-primary font-bold px-6 py-2 rounded-xl shadow-sm hover:bg-orange-400 transition-colors">
          Checkout ➝
        </button>
      </div>
    </div>
  );
};

export default CheckoutBar;
