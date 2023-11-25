import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    // Card is a Bootstrap component that is used to display a card containing some content
    // The "my-3" class is a Bootstrap class that adds margin to the top and bottom of an element
    // The "p-3" class is a Bootstrap class that adds padding to all sides of an element
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant="top"
        />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-3">
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
