import { useParams, Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Shield, RefreshCw } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

// Mock products list (can be replaced with API)
const PRODUCTS = [
  {
    id: "1",
    title: "UI Design System",
    creator: "Jane Doe",
    price: 49,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    category: "Design",
    description:
      "A comprehensive UI design system with over 200+ components, ready to use in your next project. Includes Figma files, Sketch files, and React components.",
    features: [
      "200+ Components",
      "Figma & Sketch Files",
      "React Components",
      "Lifetime Updates",
      "Commercial License",
    ],
    rating: 4.9,
    sales: 1234,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=JaneDoe",
    products: 12,
    followers: 2345,
  },
  {
    id: "2",
    title: "Web Development Course",
    creator: "Mike Chen",
    price: 99,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    category: "Courses",
    description: "Learn full stack web development with practical projects.",
    features: ["30+ Hours Content", "Projects & Assignments", "Lifetime Access"],
    rating: 4.7,
    sales: 567,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MikeChen",
    products: 5,
    followers: 1230,
  },
  // Add more products here
];

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const found = PRODUCTS.find((p) => p.id === productId);
    setProduct(found || null);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((p: any) => p.id === product.id);
    if (!existing) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.title} added to cart!`);
    } else {
      alert("Product already in cart!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Author Card on left */}
          <div className="lg:w-1/4">
            <Card className="p-6 shadow-lg border border-black bg-white">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src={product.avatar} />
                  <AvatarFallback>{product.creator[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">{product.creator}</h3>
                  <p className="text-sm text-muted-foreground">Creator</p>
                </div>
              </div>

              <div className="flex justify-between text-center mb-4">
                <div>
                  <p className="font-bold">{product.products}</p>
                  <p className="text-sm text-muted-foreground">Products</p>
                </div>
                <div>
                  <p className="font-bold">{product.followers}</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div>
                  <p className="font-bold">{product.sales}</p>
                  <p className="text-sm text-muted-foreground">Sales</p>
                </div>
              </div>

              <Button className="w-full border border-black bg-white text-black hover:bg-stone-100">
                Follow
              </Button>
            </Card>
          </div>

          {/* Product details on right */}
          <div className="lg:w-3/4 flex flex-col gap-6">
            <div>
              <Link
                to={`/`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                ← Back to store
              </Link>
            </div>

            <Badge variant="secondary" className="mb-4">
              {product.category}
            </Badge>

            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <span className="font-semibold">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">({product.sales} sales)</span>
            </div>

            {/* Product Image with thin black border */}
            <div className="aspect-video rounded-xl overflow-hidden border border-black shadow-lg mb-6">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-muted-foreground mb-8 text-lg">{product.description}</p>

            <Card className="p-6 mb-6">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-4xl font-bold text-primary">${product.price}</span>
                <span className="text-muted-foreground">one-time payment</span>
              </div>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent text-lg"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </Card>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">What's included:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <Download className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">Instant Access</p>
              </div>
              <div className="text-center">
                <RefreshCw className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">Free Updates</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">Secure Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
