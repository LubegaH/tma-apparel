import React from 'react';
import CategoryItem from '../category-items/Category-items.jsx';
import './directory.scss';

const Directory = ({ categories }) => {
  return (
    <div className='container-categories'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
