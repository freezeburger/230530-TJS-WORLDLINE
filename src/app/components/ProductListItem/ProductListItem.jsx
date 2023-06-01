import PropTypes from 'prop-types';
import './ProductListItem.css';
import styled from "@emotion/styled";
const DesignedImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 10px;
  border-radius: 3px;
`
const ProductListItem = (props) => {
    const {thumbnail, title, rating, description, price} = props.item;
    return (
        <div className="ProductListItem" data-testid="ProductListItem">
            <figure>
                <DesignedImage src={thumbnail}/>
            </figure>
            <article>
                <h1>{title}</h1>
                <p>{description}</p>
                <h2>{price}</h2>
            </article>
            <aside>
                <span>{rating}</span>
            </aside>
        </div>
    );
}
ProductListItem.propTypes = {
    item:PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        rating: PropTypes.number,
        thumbnail: PropTypes.string
    })
};
ProductListItem.defaultProps = {
    item:{
        id: 0,
        title: "Default Title",
        description: "No description",
        price: 42.99,
        rating: 3,
        thumbnail: "https://placehold.co/100x100"
    }
};
export default ProductListItem;