import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    // Card is a Bootstrap component that is used to display a card containing some content
    // The "my-3" class is a Bootstrap class that adds margin to the top and bottom of an element
    // The "p-3" class is a Bootstrap class that adds padding to all sides of an element
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant="top"
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title
            as="div"
            // The "product-title" class from assets/styles/index.css is preventing to overflow the text. The title is displayed in one line.
            className="product-title"
          >
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          {/* The Rating component is used to display the rating of a product */}
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
