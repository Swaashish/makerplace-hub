import { Link } from "react-router-dom";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Bookmark } from "lucide-react";

interface ProductCardProps {
  id: string;
  title: string;
  creator: string;
  creatorSlug: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({
  id,
  title,
  creator,
  creatorSlug,
  price,
  image,
  category,
}: ProductCardProps) => {
  return (
    <Link to={`/${creatorSlug}/${id}`} className="block">
      <div className="group relative bg-white border border-black rounded-md shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        
        {/* Image */}
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <CardContent className="p-4">
          <Badge variant="secondary" className="mb-2">
            {category}
          </Badge>
          <h3 className="font-semibold text-lg mb-1 line-clamp-2">{title}</h3>
          <p className="text-sm text-muted-foreground">by {creator}</p>
        </CardContent>

        {/* Footer */}
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <span className="text-xl font-bold text-primary">${price}</span>
          <button
            type="button"
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            title="Save for later"
          >
            <Bookmark className="w-5 h-5 text-stone-700" />
          </button>
        </CardFooter>
      </div>
    </Link>
  );
};

export default ProductCard;
