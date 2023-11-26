import { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col
            key={product._id}
            // The "xs={12}" prop means that the column will take up 12 columns on extra small screens (i.e. screens with a width of less than 576 pixels)
            sm={12}
            // The "md={6}" prop means that the column will take up 6 columns on medium screens (i.e. screens with a width of 576 pixels or more)
            md={6}
            // The "lg={4}" prop means that the column will take up 4 columns on large screens (i.e. screens with a width of 992 pixels or more)
            lg={4}
            // The "xl={3}" prop means that the column will take up 3 columns on extra large screens (i.e. screens with a width of 1200 pixels or more)
            xl={3}
          >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
