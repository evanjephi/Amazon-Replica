import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

interface Product {
    id: number;
    title: string;
    price: string;
    image: string;
}

function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json));
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <Link key={product.id} to={`/product/${product.id}`} className="product-item">
                              <div className="product-info">
                            <h2 className="product-title">{product.title}</h2>
                            <p className="product-price">${product.price}</p>
                        </div>
                    <div className="product">
                        <img src={product.image} alt={product.title} className="product-image" />
              
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ProductList;
