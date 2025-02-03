import Header from './components/Header';
import './App.css';
import NavHeader from './components/NavHeader';
import PictureSlide from './components/PictureSlide';
import PersonalizedRecommendation from './components/PersonalizedRecommendation';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function AmazonReplica() {
  return (
    <div>
      <Header />
      <NavHeader />
      <PictureSlide />
      <ProductList />
      <PersonalizedRecommendation />
      <Footer />
    </div>
  );
}

export default AmazonReplica;
