
import { useState } from 'react';
import { Product } from '../types/Product';
import { products } from '../data/products';
import { CartProvider } from '../hooks/useCart';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import ProductDetail from '../components/ProductDetail';
import Cart from '../components/Cart';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

type ViewType = 'home' | 'product' | 'cart';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProduct(null);
  };

  const handleViewCart = () => {
    setCurrentView('cart');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'product':
        return selectedProduct ? (
          <ProductDetail product={selectedProduct} onBack={handleBackToHome} />
        ) : null;
      case 'cart':
        return <Cart onBack={handleBackToHome} />;
      default:
        return (
          <div className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className="bg-muted rounded-2xl p-8 mb-12 relative overflow-hidden">
              <div className="relative z-10 max-w-lg">
                <div className="text-4xl font-bold text-orange-500 mb-2">25% OFF</div>
                <h1 className="text-4xl font-bold mb-4">Summer Sale</h1>
                <p className="text-muted-foreground mb-6">
                  Discover our summer styles with discount
                </p>
                <Button className="bg-foreground text-background hover:bg-foreground/90">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="absolute right-8 top-1/2 -translate-y-1/2">
                <div className="w-48 h-48 bg-gradient-to-br from-green-200 to-green-400 rounded-full flex items-center justify-center">
                  <span className="text-6xl">👟</span>
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Explore our latest drops</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewProduct={handleViewProduct}
                  />
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header onCartClick={handleViewCart} />
        {renderContent()}
        
        {/* Footer */}
        <footer className="bg-foreground text-background py-8 mt-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">☀</span>
                </div>
                <span className="text-lg font-semibold">SUN CO.</span>
              </div>
              <p className="text-sm text-background/70">
                © 2023 dot.cards text task. All rights reserved
              </p>
              <div className="flex space-x-4">
                <span className="text-sm">📱</span>
                <span className="text-sm">🐦</span>
                <span className="text-sm">📺</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;
