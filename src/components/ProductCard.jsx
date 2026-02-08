import PropTypes from 'prop-types';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div
      className={`relative rounded-[24px] ${product.bgColor} p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-auto`}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-1 z-10">
        {product.badge && (
          <span
            className={`${
              product.badge === 'Sale'
                ? 'bg-red-500 text-white'
                : 'bg-green-600 text-white'
            } text-[10px] font-bold px-3 py-1 rounded-full shadow-sm`}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Image */}
      <div className="w-full h-32 flex items-center justify-center mb-2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain drop-shadow-lg transform hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Details */}
      <div className="mt-2">
        <h3 className="text-lg font-bold text-primary leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1 font-medium">
          ${product.price}{' '}
          <span className="text-xs font-normal">/ {product.unit}</span>
        </p>
      </div>

      {/* Add Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
        className="absolute bottom-4 right-4 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-orange-600 active:scale-95 transition-all text-lg font-bold"
        aria-label="Add to cart"
      >
        +
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    badge: PropTypes.string,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
