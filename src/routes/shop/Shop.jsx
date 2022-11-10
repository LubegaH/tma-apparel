import { Routes, Route } from 'react-router-dom';
import CategoriesPreviewComponent from '../categories-preview-routes/CategoriesPreviewComponent';
import Category from '../category/Category';

import './shop.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewComponent />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
