import { useNavigate } from 'react-router-dom';

import {
  BackgroundImage,
  CategoryContent,
  ContainerCategory,
} from './CategoryItems.styles';

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <ContainerCategory onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryContent>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryContent>
    </ContainerCategory>
  );
};

export default CategoryItem;
