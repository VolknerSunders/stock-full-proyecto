import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCategoriesMap,
  selectIsLoading,
} from '../../store/categories/category.selector';
import ItemPreview from '../../components/item-preview/item-preview.component';
import Spinner from '../../components/spinner/spinner.component';

const ItemsPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <ItemPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default ItemsPreview;