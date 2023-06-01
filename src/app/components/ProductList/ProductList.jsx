import PropTypes from 'prop-types';
import './ProductList.css';
import ProductListItem from "../ProductListItem/ProductListItem.jsx";

const createProductItemFromList = (productItemList) => {
    if (!productItemList.length) return <div>No products</div>;

    return productItemList.map(product => <ProductListItem key={product.id} item={product}></ProductListItem>);
}

const ProductList = ({listProducts}) => (
  <div className="ProductList" data-testid="ProductList">
      {
          createProductItemFromList(listProducts)
      }
  </div>
);

ProductList.propTypes = {
    listProducts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        price: PropTypes.number,
        rating: PropTypes.number,
        thumbnail: PropTypes.string
    }))
};

ProductList.defaultProps = {
    listProducts: []
};

export default ProductList;