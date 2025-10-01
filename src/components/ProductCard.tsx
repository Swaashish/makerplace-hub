import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  title: string;
  creator: string;
  creatorSlug: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, title, creator, creatorSlug, price, image, category }: ProductCardProps) => {
  return (
    <Link to={`/${creatorSlug}/${id}`}>
      <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
        <div className="aspect-video overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4">
          <Badge variant="secondary" className="mb-2">{category}</Badge>
          <h3 className="font-semibold text-lg mb-1 line-clamp-2">{title}</h3>
          <p className="text-sm text-muted-foreground">by {creator}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <span className="text-xl font-bold text-primary">${price}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
