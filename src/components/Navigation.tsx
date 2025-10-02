import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // auth state listener
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      try {
        data?.subscription?.unsubscribe();
      } catch {
        // ignore
      }
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You've been successfully signed out",
    });
    setUser(null);
    navigate("/");
  };

  const goToDashboard = () => {
    if (user) {
      navigate("/admin");
    } else {
      navigate("/auth");
    }
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between font-bold">
        {/* Left: Logo */}
        <Link
          to="/"
          className="text-2xl tracking-wider uppercase"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          DEVLAB
        </Link>

        {/* Middle Navigation */}
        <div className="flex items-center space-x-6 text-base">
          <Link to="/discover" className="hover:text-pink-400 transition-colors">
            Discover
          </Link>

          <span className="h-6 w-px bg-white/40" />

          <Link to="/community" className="hover:text-pink-400 transition-colors">
            Community
          </Link>

          <span className="h-6 w-px bg-white/40" />

          <Link to="/pricing" className="hover:text-pink-400 transition-colors">
            Pricing
          </Link>

          <span className="h-6 w-px bg-white/40" />
        </div>

        {/* Right: Dashboard + Auth */}
        <div className="flex items-center gap-3">
          <button
            onClick={goToDashboard}
            className="px-4 py-2 rounded-lg font-semibold bg-white text-black border border-black hover:bg-stone-100 transition"
            title={user ? "Go to dashboard" : "Login to access dashboard"}
          >
            Dashboard
          </button>

          {user ? (
            <button
              onClick={handleSignOut}
              className="px-4 py-2 rounded-lg font-bold bg-pink-100 text-pink-600 border border-pink-300 hover:bg-pink-200 transition"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => navigate("/auth")}
              className="px-4 py-2 rounded-lg font-bold bg-pink-100 text-pink-600 border border-pink-300 hover:bg-pink-200 transition"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
