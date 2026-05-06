/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Search, 
  User, 
  ShoppingCart, 
  ChevronRight, 
  Truck, 
  Leaf, 
  Star, 
  Headphones,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Heart
} from "lucide-react";

const CATEGORIES = [
  { name: "CAKES", img: "https://images.unsplash.com/photo-1535141151627-814d9b977717?w=400" },
  { name: "SWEETS", img: "https://images.unsplash.com/photo-1548689816-c399f954f3bb?w=400" },
  { name: "COOKIES", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400" },
  { name: "SNACKS", img: "https://images.unsplash.com/photo-1541334419995-177fed34005b?w=400" },
  { name: "CUSTOM CAKES", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400" },
  { name: "GIFT HAMPERS", img: "https://images.unsplash.com/photo-1549466604-a21f1da2128c?w=400" },
];

const BEST_SELLERS = [
  {
    name: "Black Forest Cake",
    description: "Rich chocolate cake with cream & cherries",
    price: "₹749",
    img: "https://images.unsplash.com/photo-1606313564010-f4ca0831631f?w=600"
  },
  {
    name: "Rasgulla",
    description: "Soft & juicy cottage cheese delight",
    price: "₹299 /kg",
    img: "https://images.unsplash.com/photo-1626202133282-f8502c99278d?w=600"
  },
  {
    name: "Kaju Katli",
    description: "Premium cashew sweets",
    price: "₹599 /kg",
    img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600"
  },
  {
    name: "Butter Cookies",
    description: "Crispy & buttery cookies",
    price: "₹249",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600"
  },
  {
    name: "Veg Puff",
    description: "Flaky puff with spicy vegetable filling",
    price: "₹35",
    img: "https://images.unsplash.com/photo-1601050690597-df056fb1779f?w=600"
  },
  {
    name: "Chocolate Truffle Cake",
    description: "Chocolate sponge with truffle layers",
    price: "₹799",
    img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600"
  }
];

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* TOP BAR */}
      <div className="bg-primary px-4 py-2 flex justify-between items-center text-[10px] md:text-sm font-medium text-black">
        <div className="flex-1 text-center md:text-left">
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Truck size={14} className="animate-bounce" />
            Free delivery on orders above ₹499
          </p>
        </div>
        <div className="hidden md:flex gap-4">
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
      </div>

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#0C0C0C]/80 backdrop-blur-md border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col leading-tight">
            <div className="flex items-center gap-1 border-2 border-primary p-1 bg-primary text-black font-extrabold text-xl">
              <span>HEAVEN</span>
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-center mt-1">BAKERS</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            <a href="#" className="text-primary border-b-2 border-primary pb-1">Home</a>
            <div className="relative group flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
              Shop <ChevronRight size={14} className="rotate-90 group-hover:rotate-0 transition-transform" />
            </div>
            <a href="#" className="hover:text-primary transition-colors">Cakes</a>
            <a href="#" className="hover:text-primary transition-colors">Sweets</a>
            <a href="#" className="hover:text-primary transition-colors">Snacks</a>
            <a href="#" className="hover:text-primary transition-colors">Custom Cakes</a>
            <a href="#" className="hover:text-primary transition-colors">Offers</a>
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <button className="hover:text-primary transition-colors">
              <Search size={22} strokeWidth={2.5} />
            </button>
            <button className="hover:text-primary transition-colors">
              <User size={22} strokeWidth={2.5} />
            </button>
            <div className="relative cursor-pointer hover:text-primary transition-colors">
              <ShoppingCart size={22} strokeWidth={2.5} />
              <span className="absolute -top-1 -right-2 bg-primary text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="z-10"
            >
              <h1 className="text-5xl md:text-7xl font-sans font-black leading-none mb-6">
                MADE WITH LOVE,<br />
                <span className="text-primary italic">BAKED FOR YOU</span>
              </h1>
              <div className="flex items-center gap-2 mb-6">
                <Heart className="fill-primary text-primary" size={20} />
              </div>
              <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                Freshly baked cakes, delicious sweets, and tasty treats for every celebration.
              </p>
              <button className="btn-primary group">
                SHOP NOW <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-primary/20 rounded-full animate-pulse" />
              <div className="relative rounded-full overflow-hidden border-8 border-primary/10 shadow-2xl shadow-primary/20 aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000" 
                  alt="Delicious Chocolate Cake" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#1A1A1A] border border-primary/30 p-6 rounded-2xl hidden md:block backdrop-blur-md">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} className="fill-primary text-primary" />)}
                </div>
                <p className="font-bold text-lg italic">"Simply Heaven!"</p>
                <p className="text-xs text-gray-400">- Satisfied Customer</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SHOP BY CATEGORY */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-14">
              <div className="h-px w-10 md:w-20 bg-primary/40" />
              <h2 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-primary">Shop by Category</h2>
              <div className="h-px w-10 md:w-20 bg-primary/40" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {CATEGORIES.map((cat, idx) => (
                <motion.div 
                  key={cat.name}
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] bg-[#1A1A1A] border border-primary/20 rounded-2xl p-4 flex flex-col items-center justify-center transition-all group-hover:border-primary group-hover:bg-[#222]">
                    <div className="w-full mb-6 relative">
                      <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all" />
                      <img 
                        src={cat.img} 
                        alt={cat.name} 
                        className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-full border-2 border-primary/20 group-hover:border-primary transition-all mx-auto"
                      />
                    </div>
                    <span className="text-sm font-bold tracking-widest text-center mt-auto">{cat.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BEST SELLERS */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-14">
              <div className="h-px w-10 md:w-20 bg-primary/40" />
              <h2 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-primary">Best Sellers</h2>
              <div className="h-px w-10 md:w-20 bg-primary/40" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BEST_SELLERS.map((product, idx) => (
                <motion.div 
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-[#111] rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all flex flex-col"
                >
                  <div className="h-64 overflow-hidden relative group">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <button className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors">
                      <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
                    </button>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <span className="text-primary font-bold text-xl">{product.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">{product.description}</p>
                    <button className="mt-auto w-full py-4 bg-primary text-black font-black uppercase text-xs tracking-[0.2em] rounded-xl transition-all hover:bg-white active:scale-95">
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1549466604-a21f1da2128c?q=80&w=2000" 
              alt="Bakery background" 
              className="w-full h-full object-cover opacity-20 filter grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-primary text-2xl font-bold tracking-widest mb-6 uppercase italic">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-sans font-black mb-8 leading-tight">
                Crafting moments of sweetness since <span className="text-primary italic">1998</span>
              </h3>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed italic">
                Heaven Bakers brings you the perfect blend of tradition and taste. From our ovens to your heart, we bake happiness in every bite. Our passion for quality ingredients and artisanal techniques ensures every treat is a masterpiece.
              </p>
              <button className="btn-primary group">
                Know More <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>

        {/* FEATURES BAR */}
        <section className="py-12 bg-primary">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center gap-4 group">
              <div className="p-4 bg-black rounded-2xl transform group-hover:rotate-12 transition-transform">
                <Truck className="text-primary" />
              </div>
              <div className="text-black">
                <h4 className="font-black text-sm uppercase">Fast Delivery</h4>
                <p className="text-xs font-semibold opacity-70">On-time delivery at your doorstep</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4 group">
              <div className="p-4 bg-black rounded-2xl transform group-hover:rotate-12 transition-transform">
                <Leaf className="text-primary" />
              </div>
              <div className="text-black">
                <h4 className="font-black text-sm uppercase">Fresh Ingredients</h4>
                <p className="text-xs font-semibold opacity-70">We use 100% fresh & quality ingredients</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4 group">
              <div className="p-4 bg-black rounded-2xl transform group-hover:rotate-12 transition-transform">
                <Star className="text-primary" />
              </div>
              <div className="text-black">
                <h4 className="font-black text-sm uppercase">Best Quality</h4>
                <p className="text-xs font-semibold opacity-70">Hygienic preparation with best quality</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4 group">
              <div className="p-4 bg-black rounded-2xl transform group-hover:rotate-12 transition-transform">
                <Headphones className="text-primary" />
              </div>
              <div className="text-black">
                <h4 className="font-black text-sm uppercase">Customer Support</h4>
                <p className="text-xs font-semibold opacity-70">We are here to help you 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#080808] border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Branding Column */}
            <div className="flex flex-col">
              <div className="flex flex-col items-start leading-tight mb-8">
                <div className="flex items-center gap-1 border-2 border-primary p-1 bg-primary text-black font-extrabold text-2xl">
                  <span>HEAVEN</span>
                </div>
                <span className="text-[12px] font-bold tracking-[0.2em] mt-1">BAKERS</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-all">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-all">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold uppercase tracking-widest text-primary mb-8 text-sm">Quick Links</h4>
              <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cakes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sweets</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Snacks</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-bold uppercase tracking-widest text-primary mb-8 text-sm">Customer Service</h4>
              <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">My Account</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold uppercase tracking-widest text-primary mb-8 text-sm">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-6">Subscribe to get updates on new products and offers.</p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button type="submit" className="w-full py-4 bg-primary text-black font-black uppercase text-xs tracking-widest rounded-xl transition-all hover:bg-white">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-xs font-semibold">
              © 2026 Heaven Bakers. All Rights Reserved.
            </p>
            <div className="flex gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
              <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6" />
              <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-6" />
              <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="Paypal" className="h-6" />
              <div className="h-6 px-1 bg-white rounded flex items-center justify-center font-bold text-[8px] text-blue-900 leading-none">UP!!</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

