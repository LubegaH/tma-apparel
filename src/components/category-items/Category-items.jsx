import './category-items.scss';
const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className='container-category'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='category-content'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
