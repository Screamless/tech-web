
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { Button } from './ui/button';

interface HeaderProps {
  onCartClick: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
            <span className="text-sm font-bold">☀</span>
          </div>
          <span className="text-lg font-semibold">SUN CO.</span>
        </div>
        
        <Button 
          variant="outline" 
          onClick={onCartClick}
          className="relative"
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          View Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;
