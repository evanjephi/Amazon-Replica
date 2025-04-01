import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import PersonalizedRecommendation from './components/PersonalizedRecommendation';
import './ProductDetails.css';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => setProduct(json))
    }
  }, [id]);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <Header />
      <NavHeader />
      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
        <div className="product-price-info">
          <h2>${product.price}</h2>
          <p>$15.71 Shipping & Import Charges to Canada Details</p>
          <p>$7.68 delivery</p>
          <p className="small-text">Deliver to Canada</p>
          <p className="important-text">This item will be released on March 25, 2025.</p>
          <p>Pre-order now.</p>
          <p>Quantity: 1</p>
          <button className="pre-order-button">Pre-order now</button>
          <p className="small-text">Ships from Amazon.com</p>
          <p className="small-text">Sold by Amazon.com</p>
          <p className="small-text">Returns: 30-day refund/replacement</p>
          <p className="small-text">Payment: Secure transaction</p>
          <p className="small-text">Trade-In and save</p>
          <label className="gift-receipt-checkbox">
            <input type="checkbox" />
            Add a gift receipt for easy returns
          </label>
        </div>
      </div>
      <PersonalizedRecommendation />
      <Footer />
    </div>
  );
};

export default ProductDetails;
