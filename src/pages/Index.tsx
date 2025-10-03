import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import heroImage from "@/assets/hero-marketplace.jpg";
import { Link } from "react-router-dom";
import React from "react";
import { ArrowRight, Sparkles, Zap, DollarSign, TrendingUp, Star, MessageSquare, Coins, CreditCard  } from "lucide-react";


const sellTypes1 = [
  { icon: <Zap />, title: "Digital Art" },
  { icon: <Sparkles />, title: "UI Kits" },
  { icon: <DollarSign />, title: "Templates" },
  { icon: <Star />, title: "Fonts" },
];

const sellTypes2 = [
  { icon: <TrendingUp />, title: "Courses" },
  { icon: <MessageSquare />, title: "Ebooks" },
  { icon: <Zap />, title: "Plugins" },
  { icon: <Sparkles />, title: "Icons" },
];

const sellTypes3 = [
  { icon: <DollarSign />, title: "Music" },
  { icon: <Star />, title: "Photography" },
  { icon: <TrendingUp />, title: "3D Assets" },
  { icon: <MessageSquare />, title: "Stock Photos" },
];
const Index = () => {
  // Mock featured products (used lower)
  const featuredProducts = [
    {
      id: "1",
      title: "UI Design System",
      creator: "Jane Doe",
      creatorSlug: "jane-doe",
      price: 49,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      category: "Design",
    },
    {
      id: "2",
      title: "Illustration Pack",
      creator: "Jane Doe",
      creatorSlug: "jane-doe",
      price: 29,
      image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&q=80",
      category: "Graphics",
    },
    {
      id: "3",
      title: "Logo Templates",
      creator: "Jane Doe",
      creatorSlug: "jane-doe",
      price: 39,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      category: "Templates",
    },
  ];

  // small list of sellable types for marquee
  const sellTypes = [
    { id: 1, icon: <Sparkles className="w-5 h-5" />, title: "Designs" },
    { id: 2, icon: <Zap className="w-5 h-5" />, title: "Templates" },
    { id: 3, icon: <DollarSign className="w-5 h-5" />, title: "Courses" },
    { id: 4, icon: <TrendingUp className="w-5 h-5" />, title: "Audio" },
    { id: 5, icon: <Star className="w-5 h-5" />, title: "Photos" },
    { id: 6, icon: <Sparkles className="w-5 h-5" />, title: "3D Assets" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fbf7ee", fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }}>
      <Navigation />

      {/* Scoped styles for animations */}
      <style>{`
        @keyframes floatY {
          0% { transform: translateY(0px); opacity: .95; }
          50% { transform: translateY(-14px); opacity: 1; }
          100% { transform: translateY(0px); opacity: .95; }
        }
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .float-slow { animation: floatY 6s ease-in-out infinite; }
        .marquee { white-space: nowrap; display: inline-block; animation: marquee-left 20s linear infinite; }
        /* subtle fading edges for marquee */
        .marquee-wrap::before, .marquee-wrap::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: 6rem; pointer-events: none;
        }
        .marquee-wrap::before { left: 0; background: linear-gradient(90deg, #fbf7ee 0%, rgba(251,247,238,0) 100%); }
        .marquee-wrap::after { right: 0; background: linear-gradient(270deg, #fbf7ee 0%, rgba(251,247,238,0) 100%); }
      `}</style>

  {/* HERO - Center Dynamic */}

<section className="relative min-h-screen bg-yellow-100 flex items-center justify-center">
  <div className="container mx-auto px-4">
    <div className="relative flex flex-col items-center justify-center text-center">

      {/* Left floating accent */}
      <div 
        className="absolute left-10 top-1/3 w-40 h-40 rounded-full bg-yellow-300/60 blur-3xl"
        style={{ animation: "floatY 6s ease-in-out infinite" }}
      />

      {/* Right floating accent */}
      <div 
        className="absolute right-10 top-1/4 w-32 h-52 rounded-lg bg-pink-300/50 blur-3xl"
        style={{ animation: "floatY 8s ease-in-out infinite" }}
      />

      {/* Top spinning circle */}
      <div 
        className="absolute top-10 left-1/2 w-80 h-80 border-4 border-gradient-to-tr from-yellow-400 to-yellow-600 rounded-full opacity-40"
        style={{ animation: "spin360 25s linear infinite", transformOrigin: "center" }}
      />

      {/* Floating money icons (bigger + away from text) */}
      <div 
        className="absolute top-20 left-12 text-7xl"
        style={{ animation: "floatY 7s ease-in-out infinite" }}
      >
        💰
      </div>
      <div 
        className="absolute bottom-24 right-16 text-8xl"
        style={{ animation: "floatY 9s ease-in-out infinite" }}
      >
        💵
      </div>
      <div 
        className="absolute top-32 right-20 text-7xl"
        style={{ animation: "floatY 11s ease-in-out infinite" }}
      >
        🪙
      </div>

      {/* Hero Text (centered) */}
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900">
          Earn your first penny
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-10">
          Sell your first digital product and keep maximum profit
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link to="/start-selling">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white shadow-lg hover:-translate-y-1 transition-transform">
              Start Selling
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>

          <Link to="/discover">
            <Button size="lg" variant="outline" className="bg-white text-black border border-black">
              Discover
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* Floating animation keyframes */}
  <style>
    {`
      @keyframes floatY {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-25px); }
      }
      @keyframes spin360 {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}
  </style>
</section>


 
      {/* 2:1 + 3-card row section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Left large card spanning 2 columns on wide screens */}
            <div className="lg:col-span-2">
              <Card className="bg-white border border-black rounded-xl shadow-md h-full overflow-hidden">
                <CardContent className="p-8 flex flex-col lg:flex-row gap-6 items-center">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">Sell anything</h2>
                    <p className="text-gray-700 mb-4">Upload designs, templates, courses, audio, photos — your creativity has value.</p>
                    <div className="flex gap-4">
                      <Button className="px-4 py-2 bg-white text-black border border-black">Learn More</Button>
                      <Link to="/start-selling">
                        <Button className="px-4 py-2 bg-primary text-white">Start Now</Button>
                      </Link>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/3 rounded-lg overflow-hidden border border-black">
                    <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&q=80" alt="sell anything" className="w-full h-48 object-cover" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right small card */}
            <div>
              <Card className="bg-white border border-black rounded-xl shadow-md h-full overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Sell to anyone</h3>
                  <p className="text-gray-700 mb-4">Reach a global audience with built-in delivery and payments.</p>
                  <div className="w-full rounded-lg overflow-hidden border border-black">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80" alt="sell to anyone" className="w-full h-36 object-cover"/>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Below: 3 ratio cards (equal) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white border border-black rounded-lg p-6">
              <h4 className="font-semibold mb-2">Sell to everyone</h4>
              <p className="text-gray-700 text-sm mb-4">Optimized storefronts to sell across platforms.</p>
              <div className="h-28 rounded-md overflow-hidden border border-black">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80" alt="sell to everyone" className="w-full h-full object-cover"/>
              </div>
            </div>

            <div className="bg-white border border-black rounded-lg p-6">
              <h4 className="font-semibold mb-2">Become a developer</h4>
              <p className="text-gray-700 text-sm mb-4">Get tools & components that integrate with your workflow.</p>
              <div className="h-28 rounded-md overflow-hidden border border-black">
                <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&q=80" alt="developer" className="w-full h-full object-cover"/>
              </div>
            </div>

            <div className="bg-white border border-black rounded-lg p-6">
              <h4 className="font-semibold mb-2">Sell anything</h4>
              <p className="text-gray-700 text-sm mb-4">Flexible product types and file delivery options.</p>
              <div className="h-28 rounded-md overflow-hidden border border-black">
                <img src="https://images.unsplash.com/photo-1526378724198-9d8f6f2d8f2b?w=900&q=80" alt="anything" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marquee container */}
<section className="py-12">
  <div className="container mx-auto px-4">
    <div className="marquee-wrapper mb-6">
      <div className="marquee-line"></div>
      <div className="marquee-title">Endless possibilities</div>
      <div className="marquee-line"></div>
    </div>

    {[sellTypes1, sellTypes2, sellTypes3].map((line, idx) => (
      <div key={idx} className="marquee-container mb-4">
        <div className="marquee-track animate-marquee">
          {[...line, ...line].map((t, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 px-6 py-3 border border-black/10 rounded-md bg-white"
            >
              <div className="w-8 h-8 flex items-center justify-center border border-black/10 rounded-md">
                {t.icon}
              </div>
              <div className="text-sm font-semibold">{t.title}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>





      {/* Beautiful animated image section */}
 <section className="py-20">
  <div className="container mx-auto px-4">
    <div className="bg-white border border-black rounded-2xl shadow-2xl overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Text Section */}
        <div className="p-12 flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-4">A beautiful place to showcase your work</h3>
          <p className="text-gray-700 mb-6">Animated galleries, previews and rich media help you present better and sell more.</p>
          <Link to="/discover">
            <Button className="bg-primary text-white">Explore gallery</Button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="w-full h-96 overflow-hidden">
            <img 
              src={heroImage} 
              alt="animated" 
              className="w-full h-full object-cover transform transition-transform duration-600 hover:scale-105" 
            />
          </div>

          {/* Floating badges/icons */}
          <div className="absolute -top-6 -left-6 bg-amber-100 border border-black rounded-full p-3 shadow float-slow">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className="absolute top-12 -right-8 bg-pink-200 border border-black rounded-full p-2 shadow float-medium">
            <Zap className="w-5 h-5" />
          </div>
          <div className="absolute bottom-10 left-16 bg-green-200 border border-black rounded-full p-2 shadow float-fast">
            <DollarSign className="w-5 h-5" />
          </div>
          <div className="absolute bottom-0 -right-6 bg-blue-200 border border-black rounded-full p-3 shadow float-medium">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="absolute top-20 left-28 bg-purple-200 border border-black rounded-full p-2 shadow float-slow">
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Featured products grid (kept simple) */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">Trending products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((p) => (
              <div key={p.id} className="rounded-lg border border-black bg-white shadow-md overflow-hidden">
                <ProductCard {...p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white mt-16">
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* left: subscribe */}
          <div>
            <h4 className="text-xl font-bold mb-3">DEVROAD</h4>
            <p className="text-sm text-white/70 mb-4">Subscribe to get updates & tips</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 rounded-sm text-black" />
              <button className="px-4 py-2 bg-pink-500 text-white rounded-sm">Subscribe</button>
            </div>
          </div>

          {/* middle: sections (editable names) */}
          <div>
            <h5 className="font-semibold mb-3">Sections</h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#sell" className="hover:underline">Sell anything</a></li>
              <li><a href="#discover" className="hover:underline">Discover</a></li>
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
              <li><a href="#community" className="hover:underline">Community</a></li>
            </ul>
          </div>

          {/* right: links (editable) */}
          <div>
            <h5 className="font-semibold mb-3">Resources</h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#docs" className="hover:underline">Docs</a></li>
              <li><a href="#support" className="hover:underline">Support</a></li>
              <li><a href="#terms" className="hover:underline">Terms</a></li>
              <li><a href="#privacy" className="hover:underline">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} DevRoad — All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Index;
