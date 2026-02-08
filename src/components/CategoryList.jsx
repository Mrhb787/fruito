import PropTypes from 'prop-types';

const CategoryList = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="flex overflow-x-scroll justify-between px-6 pb-6 pt-4 scrollbar-hide gap-4">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          className={`flex-shrink-0 flex flex-col items-center space-y-2 group`}
        >
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-sm transition-all duration-300 ${
              cat.color
            } ${
              activeCategory === cat.id
                ? 'ring-4 ring-primary/20 scale-110'
                : 'hover:scale-105'
            }`}
          >
            {cat.icon}
          </div>
        </button>
      ))}
    </div>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      color: PropTypes.string,
    })
  ).isRequired,
  activeCategory: PropTypes.string.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

export default CategoryList;
