
import { Product } from '../types/Product';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface ProductCardProps {
  product: Product;
  onViewProduct: (product: Product) => void;
}

const ProductCard = ({ product, onViewProduct }: ProductCardProps) => {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <Card className="group cursor-pointer transition-all hover:shadow-lg" onClick={() => onViewProduct(product)}>
      <CardContent className="p-0">
        <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
            <div className="w-24 h-24 bg-foreground/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">👟</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-2">
            <p className="text-sm text-muted-foreground font-medium">{product.brand}</p>
            <h3 className="font-semibold text-foreground">{product.name}</h3>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg">${product.price}</span>
              {hasDiscount && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
