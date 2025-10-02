import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Star } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Section 1: Hero - Yellow Gradient */}
      <section className="relative py-36 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 border-b border-black overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-extrabold mb-6 text-black" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Earn your first penny
          </h1>
          <p className="text-2xl text-black mb-12">
            Sell your first digital product and keep maximum profit.
          </p>
          <Button size="lg" className="bg-black text-white font-bold hover:bg-black/90">
            Start Selling
          </Button>
        </div>

        {/* Large animated gradient shapes */}
        <div className="absolute inset-0 flex justify-around items-center pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 animate-float-slow shadow-2xl"
              style={{
                transform: `rotate(${i * 60}deg)`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Section 2: Split merged with 3D icons */}
      <section className="relative py-36 grid lg:grid-cols-2 gap-12 border-b border-black">
        {/* Left: Large 3D gradient icons */}
        <div className="relative flex flex-col justify-center items-center space-y-12 bg-gradient-to-tr from-purple-600 via-pink-500 to-red-500 rounded-xl overflow-hidden">
          <div className="transform rotate-12 shadow-2xl">
            <TrendingUp className="text-white w-40 h-40 drop-shadow-2xl" />
          </div>
          <div className="transform -rotate-6 shadow-2xl">
            <Zap className="text-white w-36 h-36 drop-shadow-2xl" />
          </div>
          <div className="transform rotate-3 shadow-2xl">
            <Star className="text-white w-32 h-32 drop-shadow-2xl" />
          </div>
        </div>

        {/* Right: Explanation */}
        <div className="px-4 flex flex-col justify-center bg-black text-white rounded-xl p-12 space-y-4">
          <h2 className="text-4xl font-extrabold mb-4">Sell with confidence</h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>Instant payouts</li>
            <li>Keep most of your profit</li>
            <li>Global reach for your digital products</li>
            <li>Easy-to-use dashboard</li>
            <li>Track performance with analytics</li>
          </ul>
        </div>
      </section>

      {/* Section 3: CTA - Pink Background */}
      <section className="relative py-36 text-center bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-purple-500">
        <h2 className="text-5xl font-extrabold text-white mb-6">Share your work</h2>
        <Button size="lg" className="bg-black text-white font-bold hover:bg-black/90">
          Start Selling
        </Button>
      </section>
    </div>
  );
};

export default Pricing;
