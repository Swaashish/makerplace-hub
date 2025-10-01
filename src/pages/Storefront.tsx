import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Mail, Globe, Twitter } from "lucide-react";

// Mock data - would come from backend
const mockCreators = {
  "jane-doe": {
    name: "Jane Doe",
    bio: "Digital artist and creator. Making beautiful illustrations and design resources for creative professionals.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    website: "janedoe.com",
    products: [
      {
        id: "1",
        title: "UI Design System",
        price: 49,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        category: "Design"
      },
      {
        id: "2",
        title: "Illustration Pack",
        price: 29,
        image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&q=80",
        category: "Graphics"
      },
      {
        id: "3",
        title: "Logo Templates",
        price: 39,
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
        category: "Templates"
      }
    ]
  }
};

const Storefront = () => {
  const { creatorSlug } = useParams();
  const creator = mockCreators[creatorSlug as keyof typeof mockCreators];

  if (!creator) {
    return <div>Creator not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        {/* Creator Header */}
        <div className="flex items-start gap-6 mb-12">
          <img 
            src={creator.avatar} 
            alt={creator.name}
            className="w-24 h-24 rounded-full border-4 border-border"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{creator.name}</h1>
            <p className="text-muted-foreground mb-4 max-w-2xl">{creator.bio}</p>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
              <Button variant="ghost" size="sm">
                <Globe className="w-4 h-4 mr-2" />
                {creator.website}
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creator.products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                creator={creator.name}
                creatorSlug={creatorSlug!}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storefront;
