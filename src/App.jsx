import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { About } from './pages/About/About';
import { Blog } from './pages/Blog/Blog';
import { Home } from './pages/Home/Home';
import { Pricing } from './pages/Pricing/Pricing';
import { Product } from './pages/Product/Product';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
