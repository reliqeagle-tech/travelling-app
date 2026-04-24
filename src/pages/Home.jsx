// import { useState, useEffect, useRef } from "react";
// import { assets } from "../assets/assets";
// import { FaWhatsapp } from "react-icons/fa";

// // ── Inline global styles ──────────────────────────────────────────────────────
// const GLOBAL_CSS = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

//   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//   html { scroll-behavior: smooth; }
//   body { font-family: 'Outfit', sans-serif; background: #0a1628; color: #f0ede8; overflow-x: hidden; }

//   ::-webkit-scrollbar { width: 5px; }
//   ::-webkit-scrollbar-track { background: #0a1628; }
//   ::-webkit-scrollbar-thumb { background: #C9963A; border-radius: 9px; }

//   .font-display { font-family: 'Cormorant Garamond', serif; }

//   /* Keyframes */
//   @keyframes fadeUp   { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
//   @keyframes fadeIn   { from { opacity:0; } to { opacity:1; } }
//   @keyframes slideRight { from { opacity:0; transform:translateX(-50px); } to { opacity:1; transform:translateX(0); } }
//   @keyframes slideLeft  { from { opacity:0; transform:translateX(50px); }  to { opacity:1; transform:translateX(0); } }
//   @keyframes scaleIn  { from { opacity:0; transform:scale(0.88); } to { opacity:1; transform:scale(1); } }
//   @keyframes floatY   { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-14px); } }
//   @keyframes spinSlow { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
//   @keyframes shimmer  { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
//   @keyframes countUp  { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
//   @keyframes particleDrift { 0% { transform:translateY(100vh) translateX(0px) scale(0); opacity:0; }
//     10% { opacity:1; } 90% { opacity:0.4; } 100% { transform:translateY(-10vh) translateX(60px) scale(1); opacity:0; } }
//   @keyframes heroKen  { 0% { transform:scale(1); } 100% { transform:scale(1.08); } }
//   @keyframes borderFlow { 0%,100% { border-color:#C9963A; } 50% { border-color:#E8B455; } }
//   @keyframes lineGrow  { from { width:0; } to { width:80px; } }
//   @keyframes pulse2   { 0%,100%{transform:scale(1);opacity:.8} 50%{transform:scale(1.05);opacity:1} }
//   @keyframes rotateStar { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

//   @keyframes whatsappPulse {
//     0%   { transform: scale(1);   opacity: 1; }
//     70%  { transform: scale(1.4); opacity: 0; }
//     100% { transform: scale(1.4); opacity: 0; }
// }

//   .animate-fade-up    { animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) both; }
//   .animate-fade-in    { animation: fadeIn 0.9s ease both; }
//   .animate-slide-right{ animation: slideRight 0.8s cubic-bezier(.22,1,.36,1) both; }
//   .animate-slide-left { animation: slideLeft  0.8s cubic-bezier(.22,1,.36,1) both; }
//   .animate-scale-in   { animation: scaleIn 0.7s cubic-bezier(.22,1,.36,1) both; }
//   .animate-float      { animation: floatY 4s ease-in-out infinite; }
//   .animate-spin-slow  { animation: spinSlow 20s linear infinite; }
//   .animate-shimmer    { background: linear-gradient(90deg,transparent 25%,rgba(255,255,255,.12) 50%,transparent 75%); background-size:200% auto; animation: shimmer 2.5s linear infinite; }
//   .animate-pulse2     { animation: pulse2 2.5s ease-in-out infinite; }

//   .delay-100 { animation-delay:.1s; }
//   .delay-200 { animation-delay:.2s; }
//   .delay-300 { animation-delay:.3s; }
//   .delay-400 { animation-delay:.4s; }
//   .delay-500 { animation-delay:.5s; }
//   .delay-600 { animation-delay:.6s; }
//   .delay-700 { animation-delay:.7s; }
//   .delay-800 { animation-delay:.8s; }

//   /* Hover cards */
//   .dest-card { transition: transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s ease; }
//   .dest-card:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 30px 60px rgba(0,0,0,.5); }
//   .dest-card:hover .dest-overlay { opacity:1; }
//   .dest-card:hover .dest-img { transform:scale(1.08); }
//   .dest-overlay { opacity:0; transition: opacity .4s ease; }
//   .dest-img { transition: transform .6s cubic-bezier(.22,1,.36,1); }

//   .pkg-card { transition: transform .35s ease, box-shadow .35s ease; }
//   .pkg-card:hover { transform:translateY(-8px); box-shadow:0 24px 48px rgba(0,0,0,.4); }
//   .pkg-card:hover .pkg-img { transform:scale(1.06); }
//   .pkg-img { transition: transform .5s ease; }

//   /* Tilt on stat cards */
//   .stat-card { transition: transform .3s ease, box-shadow .3s ease; }
//   .stat-card:hover { transform:translateY(-6px) rotate(-1deg); box-shadow:0 16px 40px rgba(201,150,58,.2); }

//   /* Gold shimmer text */
//   .gold-shimmer {
//     background: linear-gradient(90deg, #C9963A, #E8B455, #f5d080, #E8B455, #C9963A);
//     background-size: 200% auto;
//     -webkit-background-clip: text; background-clip: text;
//     -webkit-text-fill-color: transparent;
//     animation: shimmer 3s linear infinite;
//   }

//   /* Particles */
//   .particle { position:absolute; border-radius:50%; pointer-events:none; animation: particleDrift linear infinite; }

//   /* Nav scroll */
//   .nav-scrolled { background: rgba(10,22,40,0.95) !important; backdrop-filter:blur(20px); box-shadow:0 2px 30px rgba(0,0,0,.4); }

//   /* Section reveal */
//   .reveal { opacity:0; transform:translateY(48px); transition:opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1); }
//   .reveal.visible { opacity:1; transform:translateY(0); }
//   .reveal-left { opacity:0; transform:translateX(-48px); transition:opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1); }
//   .reveal-left.visible { opacity:1; transform:translateX(0); }
//   .reveal-right { opacity:0; transform:translateX(48px); transition:opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1); }
//   .reveal-right.visible { opacity:1; transform:translateX(0); }

//   /* Testimonial slider */
//   .testi-track { transition: transform .6s cubic-bezier(.22,1,.36,1); }

//   /* Button glow */
//   .btn-glow { position:relative; overflow:hidden; }
//   .btn-glow::after { content:''; position:absolute; inset:0; background:linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent); transform:translateX(-100%); transition:transform .5s ease; }
//   .btn-glow:hover::after { transform:translateX(100%); }

//   /* Input focus */
//   input:focus, select:focus { outline:none; }

//   /* Decorative line */
//   .gold-line::after { content:''; display:block; width:80px; height:2px; background: linear-gradient(90deg,#C9963A,#E8B455); margin-top:12px; animation: lineGrow .8s ease both; }
// `;

// // ── Data ──────────────────────────────────────────────────────────────────────
// const NAV_ITEMS = [
//     { label: "Home", href: "#home" },
//     { label: "Destinations", href: "#destinations", sub: ["India Tours", "Himalayan Treks", "Pilgrimage Yatras", "Beach Escapes", "International"] },
//     { label: "Packages", href: "#packages", sub: ["Honeymoon", "Family Tours", "Group Travel", "Corporate", "Budget Trips"] },
//     { label: "Experiences", href: "#experiences" },
//     { label: "About", href: "#about" },
//     { label: "Contact", href: "#contact" },
// ];

// const DESTINATIONS = [
//     { name: "Varanasi", country: "Uttar Pradesh", img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80", tag: "Spiritual", nights: "3N/4D" },
//     { name: "Leh Ladakh", country: "Jammu & Kashmir", img: "https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?w=600&q=80", tag: "Adventure", nights: "5N/6D" },
//     { name: "Kerala Backwaters", country: "God's Own Country", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80", tag: "Serene", nights: "4N/5D" },
//     { name: "Rajasthan", country: "Land of Kings", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80", tag: "Heritage", nights: "6N/7D" },
//     { name: "Andaman Islands", country: "Bay of Bengal", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80", tag: "Beach", nights: "4N/5D" },
//     { name: "Rishikesh", country: "Uttarakhand", img: "https://images.unsplash.com/photo-1575649993993-4b62b966f77e?w=600&q=80", tag: "Yoga & Thrill", nights: "2N/3D" },
// ];

// const PACKAGES = [
//     { title: "Golden Triangle", subtitle: "Delhi · Agra · Jaipur", price: "₹18,999", duration: "5 Days", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=700&q=80", badge: "Best Seller", includes: ["5-Star Hotels", "All Meals", "Private Cab", "Guide"] },
//     { title: "Honeymoon Bliss", subtitle: "Maldives · Kerala", price: "₹85,000", duration: "7 Days", img: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=700&q=80", badge: "Romantic", includes: ["Overwater Villa", "Candlelight Dinner", "Couple Spa", "All Inclusive"] },
//     { title: "Himalayan Trek", subtitle: "Manali · Spiti · Kaza", price: "₹32,500", duration: "9 Days", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80", badge: "Adventure", includes: ["Camping", "Trek Guide", "Meals", "Permits"] },
//     { title: "South India Gems", subtitle: "Chennai · Ooty · Munnar", price: "₹24,999", duration: "7 Days", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&q=80", badge: "Popular", includes: ["3-Star Hotels", "Breakfast", "AC Transport", "Sightseeing"] },
// ];

// const STATS = [
//     { value: "15,000+", label: "Happy Travelers" },
//     { value: "200+", label: "Destinations" },
//     { value: "12+", label: "Years Experience" },
//     { value: "98%", label: "Satisfaction Rate" },
// ];

// const TESTIMONIALS = [
//     { name: "Priya Sharma", loc: "Mumbai", text: "Atithi Travel made our Ladakh trip absolutely magical. Every detail was taken care of — the itinerary, hotels, and local experiences exceeded our expectations.", rating: 5, avatar: "PS" },
//     { name: "Rajesh & Meena", loc: "Bangalore", text: "Our honeymoon package to Kerala was beyond perfect. The houseboat experience was unforgettable. We'll be booking with Atithi Travel again for sure!", rating: 5, avatar: "RM" },
//     { name: "Amit Verma", loc: "Delhi", text: "Professional, responsive, and truly passionate about travel. The Golden Triangle tour was flawlessly organized. Highly recommend Atithi Yatra!", rating: 5, avatar: "AV" },
//     { name: "Sunita Patel", loc: "Ahmedabad", text: "Incredible service from start to finish. The Rajasthan heritage tour felt like stepping into history. My family had the time of their lives.", rating: 5, avatar: "SP" },
// ];

// const WHY_US = [
//     { icon: "✦", title: "Personalised Journeys", desc: "Every itinerary crafted around your dreams, pace, and budget — no cookie-cutter tours." },
//     { icon: "◈", title: "Expert Local Guides", desc: "Our guides are passionate storytellers who reveal hidden gems the guidebooks miss." },
//     { icon: "⬡", title: "24/7 Travel Support", desc: "Round-the-clock assistance before, during, and after your journey for peace of mind." },
//     { icon: "◇", title: "Best Price Guarantee", desc: "We match any lower price you find and still deliver premium experiences." },
// ];

// // ── Hooks ────────────────────────────────────────────────────────────────────
// function useIntersection(ref, threshold = 0.15) {
//     const [visible, setVisible] = useState(false);
//     useEffect(() => {
//         const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
//         if (ref.current) obs.observe(ref.current);
//         return () => obs.disconnect();
//     }, []);
//     return visible;
// }

// // ── Sub-components ────────────────────────────────────────────────────────────
// function Particles() {
//     const particles = Array.from({ length: 18 }, (_, i) => ({
//         id: i,
//         size: Math.random() * 3 + 1,
//         left: Math.random() * 100,
//         delay: Math.random() * 12,
//         duration: Math.random() * 10 + 12,
//         opacity: Math.random() * 0.4 + 0.1,
//     }));
//     return (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {particles.map(p => (
//                 <div key={p.id} className="particle" style={{
//                     width: p.size, height: p.size,
//                     left: `${p.left}%`, bottom: "-10px",
//                     background: p.id % 3 === 0 ? "#C9963A" : p.id % 3 === 1 ? "#E8B455" : "rgba(255,255,255,0.6)",
//                     animationDuration: `${p.duration}s`,
//                     animationDelay: `${p.delay}s`,
//                     opacity: p.opacity,
//                 }} />
//             ))}
//         </div>
//     );
// }

// function StarRating({ rating }) {
//     return (
//         <div className="flex gap-0.5">
//             {Array.from({ length: 5 }).map((_, i) => (
//                 <span key={i} style={{ color: i < rating ? "#C9963A" : "rgba(255,255,255,0.2)", fontSize: 14 }}>★</span>
//             ))}
//         </div>
//     );
// }

// function SectionTag({ children }) {
//     return (
//         <div className="flex items-center gap-3 mb-4">
//             <div style={{ width: 32, height: 2, background: "linear-gradient(90deg,#C9963A,#E8B455)" }} />
//             <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9963A" }}>{children}</span>
//             <div style={{ width: 32, height: 2, background: "linear-gradient(90deg,#E8B455,#C9963A)" }} />
//         </div>
//     );
// }

// // ── Main Component ────────────────────────────────────────────────────────────
// const Home = () => {
//     const [navScrolled, setNavScrolled] = useState(false);
//     const [mobileOpen, setMobileOpen] = useState(false);
//     const [activeDropdown, setActiveDropdown] = useState(null);
//     const [testiIndex, setTestiIndex] = useState(0);
//     const [searchForm, setSearchForm] = useState({ dest: "", type: "", people: "2" });
//     const [heroLoaded, setHeroLoaded] = useState(false);

//     // Section refs
//     const statsRef = useRef(null);
//     const destRef = useRef(null);
//     const pkgRef = useRef(null);
//     const whyRef = useRef(null);
//     const testiRef = useRef(null);
//     const ctaRef = useRef(null);
//     const aboutRef = useRef(null);

//     const statsVisible = useIntersection(statsRef);
//     const destVisible = useIntersection(destRef);
//     const pkgVisible = useIntersection(pkgRef);
//     const whyVisible = useIntersection(whyRef);
//     const testiVisible = useIntersection(testiRef);
//     const ctaVisible = useIntersection(ctaRef);
//     const aboutVisible = useIntersection(aboutRef);

//     useEffect(() => {
//         const onScroll = () => setNavScrolled(window.scrollY > 60);
//         window.addEventListener("scroll", onScroll);
//         setTimeout(() => setHeroLoaded(true), 100);
//         return () => window.removeEventListener("scroll", onScroll);
//     }, []);

//     useEffect(() => {
//         const t = setInterval(() => setTestiIndex(i => (i + 1) % TESTIMONIALS.length), 5000);
//         return () => clearInterval(t);
//     }, []);

//     const TEAL = "#0F5E6A";
//     const GOLD = "#C9963A";
//     const GOLD_LIGHT = "#E8B455";
//     const DARK = "#0a1628";
//     const DARK2 = "#0d1e35";

//     return (
//         <>
//             <style>{GLOBAL_CSS}</style>
//             {/* <div className="absolute static bottom-10 right-10 text-3xl bg-white rounded-full p-1 text-green-500 opacity-80 animate-pulse2" style={{ zIndex: 3, color: "#25D366" }}>
//                 <FaWhatsapp />
//             </div> */}
//             {/* ── WHATSAPP FIXED BUTTON ── */}

//             <a href="https://wa.me/919088110999?text=Hello%2C%20I%20want%20to%20enquire%20about%20your%20travel%20packages"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                     position: "fixed",
//                     bottom: 32,
//                     right: 32,
//                     zIndex: 9999,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     width: 60,
//                     height: 60,
//                     borderRadius: "50%",
//                     background: "linear-gradient(135deg, #25D366, #128C7E)",
//                     boxShadow: "0 6px 24px rgba(37,211,102,0.45)",
//                     cursor: "pointer",
//                     textDecoration: "none",
//                     transition: "transform 0.25s ease",
//                 }}
//                 onMouseEnter={e => e.currentTarget.style.transform = "scale(1.12)"}
//                 onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
//             >
//                 <span style={{
//                     position: "absolute", inset: -6, borderRadius: "50%",
//                     border: "2px solid rgba(37,211,102,0.5)",
//                     animation: "whatsappPulse 2s ease-out infinite",
//                 }} />
//                 <span style={{
//                     position: "absolute", inset: -14, borderRadius: "50%",
//                     border: "1.5px solid rgba(37,211,102,0.25)",
//                     animation: "whatsappPulse 2s ease-out 0.5s infinite",
//                 }} />
//                 <FaWhatsapp style={{ fontSize: 30, color: "#fff", position: "relative", zIndex: 1 }} />
//             </a>
//             {/* ── HERO ─────────────────────────────────────────────────── */}
//             <section id="home" style={{ position: "relative", height: "100vh", minHeight: 700, overflow: "hidden", display: "flex", alignItems: "center" }}>
//                 {/* BG */}

//                 <div style={{ position: "absolute", inset: 0 }}>
//                     <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80" alt=""
//                         style={{ width: "100%", height: "100%", objectFit: "cover", animation: "heroKen 18s ease-in-out infinite alternate" }} />
//                     <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.5) 50%, rgba(15,94,106,0.4) 100%)" }} />
//                     {/* Decorative diagonal band */}
//                     <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 200, background: "linear-gradient(to top, #0a1628, transparent)" }} />
//                 </div>

//                 <Particles />

//                 {/* Floating decorative circle */}
//                 <div className="animate-float" style={{ position: "absolute", right: "8%", top: "20%", width: 320, height: 320, borderRadius: "50%", border: `1px solid rgba(201,150,58,0.2)`, pointerEvents: "none" }}>
//                     <div style={{ position: "absolute", inset: 20, borderRadius: "50%", border: `1px dashed rgba(201,150,58,0.15)` }} />
//                     <div style={{ position: "absolute", inset: 60, borderRadius: "50%", border: `0.5px solid rgba(201,150,58,0.1)` }} />
//                 </div>

//                 {/* Content */}
//                 <div style={{ position: "relative", zIndex: 2, maxWidth: 700, marginLeft: "8%", padding: "0 2rem" }}>
//                     <div className={`animate-fade-up ${heroLoaded ? "" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
//                             <div style={{ width: 40, height: 1, background: GOLD }} />
//                             <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: GOLD }}>Discover India & Beyond</span>
//                             <div style={{ width: 40, height: 1, background: GOLD }} />
//                         </div>
//                     </div>

//                     <div className={`animate-fade-up delay-200`} style={{ animationFillMode: "both" }}>
//                         <h1 className="font-display" style={{ fontSize: "clamp(52px,7vw,96px)", lineHeight: 1.0, fontWeight: 300, color: "#fff", marginBottom: 8 }}>
//                             Every Journey
//                         </h1>
//                         <h1 className="font-display" style={{ fontSize: "clamp(52px,7vw,96px)", lineHeight: 1.0, fontWeight: 600, marginBottom: 8 }}>
//                             <span className="gold-shimmer">Tells a Story</span>
//                         </h1>
//                         <h1 className="font-display" style={{ fontSize: "clamp(52px,7vw,96px)", lineHeight: 1.0, fontWeight: 300, color: "rgba(255,255,255,0.7)", marginBottom: 28 }}>
//                             <em>Worth Living</em>
//                         </h1>
//                     </div>

//                     <p className="animate-fade-up delay-400" style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.7)", maxWidth: 500, marginBottom: 40, animationFillMode: "both" }}>
//                         From sacred pilgrimages to Himalayan adventures — Atithi Travel Yatra crafts journeys that awaken the soul and create memories that last a lifetime.
//                     </p>

//                     <div className="animate-fade-up delay-500" style={{ display: "flex", gap: 16, flexWrap: "wrap", animationFillMode: "both" }}>
//                         <button className="btn-glow" style={{ background: `linear-gradient(135deg, ${TEAL} 0%, #1a7a8a 100%)`, border: `1px solid rgba(201,150,58,0.3)`, borderRadius: 4, padding: "14px 36px", fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff", cursor: "pointer", boxShadow: `0 8px 30px rgba(15,94,106,0.5)`, transition: "all 0.25s" }}
//                             onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
//                             onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
//                             Explore Packages ✈
//                         </button>
//                         <button style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 4, padding: "14px 36px", fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", cursor: "pointer", transition: "all 0.25s" }}
//                             onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
//                             onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}>
//                             ▶ Watch Our Story
//                         </button>
//                     </div>
//                 </div>

//                 {/* Scroll indicator */}
//                 <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, animation: "fadeIn 1s 1.5s both" }}>
//                     <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Scroll</span>
//                     <div style={{ width: 1, height: 50, background: "linear-gradient(to bottom, rgba(201,150,58,0.8), transparent)", animation: "pulse2 2s ease-in-out infinite" }} />
//                 </div>
//             </section>

//             {/* ── SEARCH BAR ───────────────────────────────────────────── */}
//             <section style={{ background: DARK, padding: "0 2rem" }}>
//                 <div style={{ maxWidth: 1100, margin: "0 auto", transform: "translateY(-36px)" }}>
//                     <div style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(201,150,58,0.2)`, borderRadius: 12, padding: "28px 36px", backdropFilter: "blur(20px)", boxShadow: "0 20px 60px rgba(0,0,0,0.4)", display: "flex", gap: 16, alignItems: "flex-end", flexWrap: "wrap" }}>
//                         <div style={{ flex: 2, minWidth: 180 }}>
//                             <label style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, display: "block", marginBottom: 8 }}>Destination</label>
//                             <input value={searchForm.dest} onChange={e => setSearchForm(s => ({ ...s, dest: e.target.value }))}
//                                 placeholder="Where do you want to go?" style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "10px 14px", fontFamily: "'Outfit',sans-serif", fontSize: 14, color: "#fff", transition: "border-color 0.2s" }}
//                                 onFocus={e => e.target.style.borderColor = GOLD}
//                                 onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
//                         </div>
//                         <div style={{ flex: 1.5, minWidth: 150 }}>
//                             <label style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, display: "block", marginBottom: 8 }}>Tour Type</label>
//                             <select value={searchForm.type} onChange={e => setSearchForm(s => ({ ...s, type: e.target.value }))}
//                                 style={{ width: "100%", background: "rgba(15,94,106,0.3)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "10px 14px", fontFamily: "'Outfit',sans-serif", fontSize: 14, color: "#fff", cursor: "pointer" }}>
//                                 <option value="">All Types</option>
//                                 <option>Adventure</option><option>Spiritual</option><option>Honeymoon</option>
//                                 <option>Family</option><option>Beach</option><option>Heritage</option>
//                             </select>
//                         </div>
//                         <div style={{ flex: 1, minWidth: 120 }}>
//                             <label style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, display: "block", marginBottom: 8 }}>Travelers</label>
//                             <input type="number" min={1} max={20} value={searchForm.people} onChange={e => setSearchForm(s => ({ ...s, people: e.target.value }))}
//                                 style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "10px 14px", fontFamily: "'Outfit',sans-serif", fontSize: 14, color: "#fff" }}
//                                 onFocus={e => e.target.style.borderColor = GOLD}
//                                 onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
//                         </div>
//                         <button className="btn-glow" style={{ background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_LIGHT} 100%)`, border: "none", borderRadius: 6, padding: "11px 32px", fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a1628", cursor: "pointer", whiteSpace: "nowrap", boxShadow: `0 6px 24px rgba(201,150,58,0.4)`, transition: "all 0.2s", flexShrink: 0 }}
//                             onMouseEnter={e => e.currentTarget.style.transform = "translateY(-1px)"}
//                             onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
//                             Search Tours
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* ── STATS ────────────────────────────────────────────────── */}
//             <section ref={statsRef} style={{ background: DARK, padding: "40px 2rem 80px" }}>
//                 <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
//                     {STATS.map((s, i) => (
//                         <div key={s.label} className={`stat-card reveal ${statsVisible ? "visible" : ""}`}
//                             style={{ background: `linear-gradient(135deg, rgba(15,94,106,0.2), rgba(201,150,58,0.08))`, border: "0.5px solid rgba(201,150,58,0.2)", borderRadius: 12, padding: "28px 24px", textAlign: "center", transitionDelay: `${i * 0.1}s` }}>
//                             <div className="font-display" style={{ fontSize: 42, fontWeight: 600, color: GOLD, letterSpacing: "0.04em", lineHeight: 1 }}>{s.value}</div>
//                             <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: 8 }}>{s.label}</div>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* ── DESTINATIONS ─────────────────────────────────────────── */}
//             <section id="destinations" ref={destRef} style={{ background: DARK2, padding: "80px 2rem" }}>
//                 <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//                     <div className={`reveal ${destVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: 60 }}>
//                         <SectionTag>Featured Destinations</SectionTag>
//                         <h2 className="font-display" style={{ fontSize: "clamp(36px,5vw,60px)", fontWeight: 300, color: "#fff", lineHeight: 1.1 }}>
//                             Incredible <em style={{ color: GOLD }}>India</em> Awaits
//                         </h2>
//                         <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, color: "rgba(255,255,255,0.5)", marginTop: 16, maxWidth: 500, margin: "16px auto 0" }}>
//                             From snow-capped peaks to golden beaches — explore the breathtaking diversity of our destinations.
//                         </p>
//                     </div>

//                     <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
//                         {DESTINATIONS.map((d, i) => (
//                             <div key={d.name} className={`dest-card reveal ${destVisible ? "visible" : ""}`}
//                                 style={{ borderRadius: 16, overflow: "hidden", position: "relative", aspectRatio: "4/5", cursor: "pointer", transitionDelay: `${i * 0.08}s` }}>
//                                 <img src={d.img} alt={d.name} className="dest-img" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
//                                 {/* Always visible overlay gradient */}
//                                 <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.2) 50%, transparent 100%)" }} />
//                                 {/* Tag */}
//                                 <div style={{ position: "absolute", top: 16, left: 16, background: `rgba(201,150,58,0.85)`, backdropFilter: "blur(8px)", borderRadius: 4, padding: "4px 12px", fontFamily: "'Outfit',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0a1628" }}>{d.tag}</div>
//                                 {/* Hover shimmer */}
//                                 <div className="dest-overlay animate-shimmer" style={{ position: "absolute", inset: 0 }} />
//                                 {/* Info */}
//                                 <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 20px" }}>
//                                     <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, marginBottom: 4 }}>{d.country}</div>
//                                     <h3 className="font-display" style={{ fontSize: 28, fontWeight: 600, color: "#fff", lineHeight: 1.1, marginBottom: 8 }}>{d.name}</h3>
//                                     <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//                                         <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>{d.nights}</span>
//                                         <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: GOLD_LIGHT, textTransform: "uppercase" }}>Explore →</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── WHY US ───────────────────────────────────────────────── */}
//             <section id="about" ref={whyRef} style={{ background: DARK, padding: "80px 2rem", position: "relative", overflow: "hidden" }}>
//                 {/* Background decoration */}
//                 <div style={{ position: "absolute", right: -100, top: -100, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(201,150,58,0.06)", pointerEvents: "none" }} />
//                 <div style={{ position: "absolute", right: -50, top: -50, width: 250, height: 250, borderRadius: "50%", border: "1px solid rgba(201,150,58,0.1)", pointerEvents: "none" }} />

//                 <div style={{ maxWidth: 1100, margin: "0 auto" }}>
//                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
//                         {/* Left */}
//                         <div className={`reveal-left ${whyVisible ? "visible" : ""}`}>
//                             <SectionTag>Why Choose Us</SectionTag>
//                             <h2 className="font-display" style={{ fontSize: "clamp(32px,4vw,54px)", fontWeight: 300, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>
//                                 Travel with <br /><em style={{ color: GOLD }}>Confidence</em> &<br /> Heart
//                             </h2>
//                             <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.9, marginBottom: 32 }}>
//                                 With over 12 years of crafting unforgettable journeys across India and beyond, Atithi Travel Yatra is your trusted partner for every adventure.
//                             </p>
//                             <button className="btn-glow" style={{ background: `linear-gradient(135deg,${TEAL},#1a7a8a)`, border: `1px solid rgba(201,150,58,0.3)`, borderRadius: 4, padding: "12px 30px", fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff", cursor: "pointer", boxShadow: `0 6px 24px rgba(15,94,106,0.4)`, transition: "all 0.2s" }}
//                                 onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
//                                 onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
//                                 Learn Our Story
//                             </button>
//                         </div>

//                         {/* Right — feature cards */}
//                         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
//                             {WHY_US.map((w, i) => (
//                                 <div key={w.title} className={`reveal ${whyVisible ? "visible" : ""}`}
//                                     style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(201,150,58,0.15)", borderRadius: 12, padding: "24px 20px", transition: "all 0.3s", cursor: "default", transitionDelay: `${0.1 + i * 0.1}s` }}
//                                     onMouseEnter={e => { e.currentTarget.style.background = "rgba(15,94,106,0.15)"; e.currentTarget.style.borderColor = "rgba(201,150,58,0.4)"; }}
//                                     onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(201,150,58,0.15)"; }}>
//                                     <div style={{ fontSize: 22, color: GOLD, marginBottom: 12 }}>{w.icon}</div>
//                                     <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 8, letterSpacing: "0.02em" }}>{w.title}</h4>
//                                     <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{w.desc}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ── PACKAGES ─────────────────────────────────────────────── */}
//             <section id="packages" ref={pkgRef} style={{ background: DARK2, padding: "80px 2rem" }}>
//                 <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//                     <div className={`reveal ${pkgVisible ? "visible" : ""}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 20 }}>
//                         <div>
//                             <SectionTag>Curated Packages</SectionTag>
//                             <h2 className="font-display" style={{ fontSize: "clamp(36px,5vw,60px)", fontWeight: 300, color: "#fff", lineHeight: 1.1 }}>
//                                 Journeys <em style={{ color: GOLD }}>Crafted</em><br /> For You
//                             </h2>
//                         </div>
//                         <a href="#" style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, textDecoration: "none", borderBottom: `1px solid ${GOLD}`, paddingBottom: 2, transition: "opacity 0.2s" }}>
//                             View All Packages →
//                         </a>
//                     </div>

//                     <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
//                         {PACKAGES.map((p, i) => (
//                             <div key={p.title} className={`pkg-card reveal ${pkgVisible ? "visible" : ""}`}
//                                 style={{ borderRadius: 16, overflow: "hidden", background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.08)", cursor: "pointer", transitionDelay: `${i * 0.1}s` }}>
//                                 {/* Image */}
//                                 <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
//                                     <img src={p.img} alt={p.title} className="pkg-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                                     <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,22,40,0.6), transparent)" }} />
//                                     <div style={{ position: "absolute", top: 16, right: 16, background: `linear-gradient(135deg,${GOLD},${GOLD_LIGHT})`, borderRadius: 4, padding: "4px 12px", fontFamily: "'Outfit',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a1628" }}>{p.badge}</div>
//                                     <div style={{ position: "absolute", bottom: 16, left: 16, fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: 6 }}>
//                                         <span style={{ color: GOLD }}>⏱</span> {p.duration}
//                                     </div>
//                                 </div>
//                                 {/* Body */}
//                                 <div style={{ padding: "20px 24px 24px" }}>
//                                     <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>{p.subtitle}</div>
//                                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
//                                         <h3 className="font-display" style={{ fontSize: 26, fontWeight: 600, color: "#fff" }}>{p.title}</h3>
//                                         <div style={{ textAlign: "right" }}>
//                                             <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>Starting from</div>
//                                             <div className="font-display" style={{ fontSize: 24, fontWeight: 600, color: GOLD }}>{p.price}</div>
//                                             <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)" }}>per person</div>
//                                         </div>
//                                     </div>
//                                     {/* Includes */}
//                                     <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
//                                         {p.includes.map(inc => (
//                                             <span key={inc} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: 4, padding: "4px 10px" }}>✓ {inc}</span>
//                                         ))}
//                                     </div>
//                                     <button className="btn-glow" style={{ width: "100%", background: `linear-gradient(135deg,${TEAL},#1a7a8a)`, border: "none", borderRadius: 6, padding: "11px", fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff", cursor: "pointer", transition: "all 0.2s" }}
//                                         onMouseEnter={e => e.currentTarget.style.background = `linear-gradient(135deg,${GOLD},${GOLD_LIGHT})`}
//                                         onMouseLeave={e => e.currentTarget.style.background = `linear-gradient(135deg,${TEAL},#1a7a8a)`}>
//                                         Book This Package
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── EXPERIENCE STRIP ─────────────────────────────────────── */}
//             <section id="experiences" style={{ padding: "80px 2rem", background: DARK, position: "relative", overflow: "hidden" }}>
//                 <div ref={aboutRef} style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
//                     {/* Image collage */}
//                     <div className={`reveal-left ${aboutVisible ? "visible" : ""}`} style={{ position: "relative", height: 480 }}>
//                         <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80" alt="" style={{ position: "absolute", top: 0, left: 0, width: "68%", height: "70%", objectFit: "cover", borderRadius: 16 }} />
//                         <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=80" alt="" style={{ position: "absolute", bottom: 0, right: 0, width: "55%", height: "55%", objectFit: "cover", borderRadius: 16 }} />
//                         {/* Floating badge */}
//                         <div className="animate-float" style={{ position: "absolute", bottom: 80, left: "-10%", background: `linear-gradient(135deg,${TEAL},#1a7a8a)`, border: `1px solid rgba(201,150,58,0.3)`, borderRadius: 12, padding: "16px 20px", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
//                             <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, marginBottom: 4 }}>This Month</div>
//                             <div className="font-display" style={{ fontSize: 28, fontWeight: 600, color: "#fff" }}>240+</div>
//                             <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.6)" }}>Happy travelers</div>
//                         </div>
//                     </div>

//                     {/* Text */}
//                     <div className={`reveal-right ${aboutVisible ? "visible" : ""}`}>
//                         <SectionTag>Experiences</SectionTag>
//                         <h2 className="font-display" style={{ fontSize: "clamp(32px,4vw,50px)", fontWeight: 300, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
//                             More Than Just<br /><em style={{ color: GOLD }}>Travel</em> — A<br />Transformation
//                         </h2>
//                         <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.9, marginBottom: 28 }}>
//                             We believe travel has the power to transform. Whether you're seeking spiritual awakening in Varanasi, thrills in Leh, or tranquility in Kerala — we connect you with the soul of every destination.
//                         </p>
//                         <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
//                             {["Handpicked boutique stays & heritage hotels", "Immersive local cultural experiences", "Flexible itineraries built around you", "Expert naturalist & heritage guides"].map((item, i) => (
//                                 <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
//                                     <div style={{ width: 24, height: 24, borderRadius: "50%", background: `rgba(201,150,58,0.15)`, border: `1px solid rgba(201,150,58,0.3)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
//                                         <span style={{ color: GOLD, fontSize: 11 }}>✦</span>
//                                     </div>
//                                     <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{item}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
//             <section ref={testiRef} style={{ background: DARK2, padding: "80px 2rem", overflow: "hidden" }}>
//                 <div style={{ maxWidth: 1100, margin: "0 auto" }}>
//                     <div className={`reveal ${testiVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: 60 }}>
//                         <SectionTag>What Travelers Say</SectionTag>
//                         <h2 className="font-display" style={{ fontSize: "clamp(36px,5vw,58px)", fontWeight: 300, color: "#fff" }}>
//                             Stories of <em style={{ color: GOLD }}>Wanderlust</em>
//                         </h2>
//                     </div>

//                     {/* Slider */}
//                     <div style={{ overflow: "hidden" }}>
//                         <div className="testi-track" style={{ display: "flex", transform: `translateX(${-testiIndex * 100}%)` }}>
//                             {TESTIMONIALS.map((t, i) => (
//                                 <div key={i} style={{ minWidth: "100%", padding: "0 2rem" }}>
//                                     <div style={{ maxWidth: 720, margin: "0 auto", background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(201,150,58,0.2)", borderRadius: 20, padding: "48px 56px", position: "relative", textAlign: "center" }}>
//                                         {/* Quote mark */}
//                                         <div className="font-display" style={{ fontSize: 120, lineHeight: 0.5, color: `rgba(201,150,58,0.1)`, position: "absolute", top: 24, left: 36, userSelect: "none" }}>"</div>
//                                         <StarRating rating={t.rating} />
//                                         <p className="font-display" style={{ fontSize: "clamp(18px,2.5vw,26px)", fontWeight: 300, color: "rgba(255,255,255,0.85)", lineHeight: 1.6, margin: "24px 0 32px", fontStyle: "italic" }}>
//                                             "{t.text}"
//                                         </p>
//                                         <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center" }}>
//                                             <div style={{ width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg,${TEAL},${GOLD})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 700, color: "#fff" }}>{t.avatar}</div>
//                                             <div style={{ textAlign: "left" }}>
//                                                 <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, color: "#fff" }}>{t.name}</div>
//                                                 <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: GOLD, letterSpacing: "0.1em" }}>{t.loc}</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Dots */}
//                     <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32 }}>
//                         {TESTIMONIALS.map((_, i) => (
//                             <button key={i} onClick={() => setTestiIndex(i)} style={{ width: i === testiIndex ? 28 : 8, height: 8, borderRadius: 4, background: i === testiIndex ? GOLD : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ── CTA BANNER ───────────────────────────────────────────── */}
//             <section ref={ctaRef} style={{ position: "relative", overflow: "hidden", padding: "100px 2rem" }}>
//                 <div style={{ position: "absolute", inset: 0 }}>
//                     <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                     <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(15,94,106,0.7) 60%, rgba(10,22,40,0.85) 100%)" }} />
//                 </div>
//                 <Particles />
//                 <div className={`reveal ${ctaVisible ? "visible" : ""}`} style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
//                     <SectionTag>Start Your Journey</SectionTag>
//                     <h2 className="font-display" style={{ fontSize: "clamp(40px,6vw,80px)", fontWeight: 300, color: "#fff", lineHeight: 1.05, marginBottom: 12 }}>
//                         Your Dream Trip<br /><em><span className="gold-shimmer">Starts Here</span></em>
//                     </h2>
//                     <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 40, lineHeight: 1.8 }}>
//                         Let our travel experts craft your perfect journey. Get a free personalized itinerary within 24 hours.
//                     </p>
//                     <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
//                         <button className="btn-glow" style={{ background: `linear-gradient(135deg,${GOLD},${GOLD_LIGHT})`, border: "none", borderRadius: 4, padding: "16px 42px", fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#0a1628", cursor: "pointer", boxShadow: `0 8px 32px rgba(201,150,58,0.5)`, transition: "all 0.25s" }}
//                             onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px) scale(1.02)"}
//                             onMouseLeave={e => e.currentTarget.style.transform = "translateY(0) scale(1)"}>
//                             Plan My Trip ✈
//                         </button>
//                         <button style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 4, padding: "16px 42px", fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff", cursor: "pointer", transition: "all 0.25s" }}
//                             onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
//                             onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}>
//                             📞 Talk to Expert
//                         </button>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Home;




import { useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { FaWhatsapp } from "react-icons/fa";

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Outfit', sans-serif; background: #0a1628; color: #f0ede8; overflow-x: hidden; }

  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: #0a1628; }
  ::-webkit-scrollbar-thumb { background: #C9963A; border-radius: 9px; }

  .font-display { font-family: 'Cormorant Garamond', serif; }

  @keyframes fadeUp   { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
  @keyframes fadeIn   { from { opacity:0; } to { opacity:1; } }
  @keyframes slideRight { from { opacity:0; transform:translateX(-50px); } to { opacity:1; transform:translateX(0); } }
  @keyframes slideLeft  { from { opacity:0; transform:translateX(50px); }  to { opacity:1; transform:translateX(0); } }
  @keyframes scaleIn  { from { opacity:0; transform:scale(0.88); } to { opacity:1; transform:scale(1); } }
  @keyframes floatY   { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-14px); } }
  @keyframes spinSlow { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
  @keyframes shimmer  { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
  @keyframes countUp  { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
  @keyframes particleDrift { 0% { transform:translateY(100vh) translateX(0px) scale(0); opacity:0; }
    10% { opacity:1; } 90% { opacity:0.4; } 100% { transform:translateY(-10vh) translateX(60px) scale(1); opacity:0; } }
  @keyframes heroKen  { 0% { transform:scale(1); } 100% { transform:scale(1.08); } }
  @keyframes borderFlow { 0%,100% { border-color:#C9963A; } 50% { border-color:#E8B455; } }
  @keyframes lineGrow  { from { width:0; } to { width:80px; } }
  @keyframes pulse2   { 0%,100%{transform:scale(1);opacity:.8} 50%{transform:scale(1.05);opacity:1} }
  @keyframes rotateStar { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes whatsappPulse {
    0%   { transform: scale(1);   opacity: 1; }
    70%  { transform: scale(1.4); opacity: 0; }
    100% { transform: scale(1.4); opacity: 0; }
  }

  .animate-fade-up    { animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) both; }
  .animate-fade-in    { animation: fadeIn 0.9s ease both; }
  .animate-slide-right{ animation: slideRight 0.8s cubic-bezier(.22,1,.36,1) both; }
  .animate-slide-left { animation: slideLeft  0.8s cubic-bezier(.22,1,.36,1) both; }
  .animate-scale-in   { animation: scaleIn 0.7s cubic-bezier(.22,1,.36,1) both; }
  .animate-float      { animation: floatY 4s ease-in-out infinite; }
  .animate-spin-slow  { animation: spinSlow 20s linear infinite; }
  .animate-shimmer    { background: linear-gradient(90deg,transparent 25%,rgba(255,255,255,.12) 50%,transparent 75%); background-size:200% auto; animation: shimmer 2.5s linear infinite; }
  .animate-pulse2     { animation: pulse2 2.5s ease-in-out infinite; }

  .delay-100 { animation-delay:.1s; }
  .delay-200 { animation-delay:.2s; }
  .delay-300 { animation-delay:.3s; }
  .delay-400 { animation-delay:.4s; }
  .delay-500 { animation-delay:.5s; }
  .delay-600 { animation-delay:.6s; }
  .delay-700 { animation-delay:.7s; }
  .delay-800 { animation-delay:.8s; }

  .dest-card { transition: transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s ease; }
  .dest-card:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 30px 60px rgba(0,0,0,.5); }
  .dest-card:hover .dest-overlay { opacity:1; }
  .dest-card:hover .dest-img { transform:scale(1.08); }
  .dest-overlay { opacity:0; transition: opacity .4s ease; }
  .dest-img { transition: transform .6s cubic-bezier(.22,1,.36,1); }

  .pkg-card { transition: transform .35s ease, box-shadow .35s ease; }
  .pkg-card:hover { transform:translateY(-8px); box-shadow:0 24px 48px rgba(0,0,0,.4); }
  .pkg-card:hover .pkg-img { transform:scale(1.06); }
  .pkg-img { transition: transform .5s ease; }

  .stat-card { transition: transform .3s ease, box-shadow .3s ease; }
  .stat-card:hover { transform:translateY(-6px) rotate(-1deg); box-shadow:0 16px 40px rgba(201,150,58,.2); }

  .gold-shimmer {
    background: linear-gradient(90deg, #C9963A, #E8B455, #f5d080, #E8B455, #C9963A);
    background-size: 200% auto;
    -webkit-background-clip: text; background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3s linear infinite;
  }

  .particle { position:absolute; border-radius:50%; pointer-events:none; animation: particleDrift linear infinite; }
  .nav-scrolled { background: rgba(10,22,40,0.95) !important; backdrop-filter:blur(20px); box-shadow:0 2px 30px rgba(0,0,0,.4); }

  .reveal { opacity:0; transform:translateY(48px); transition:opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1); }
  .reveal.visible { opacity:1; transform:translateY(0); }
  .reveal-left { opacity:0; transform:translateX(-48px); transition:opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1); }
  .reveal-left.visible { opacity:1; transform:translateX(0); }
  .reveal-right { opacity:0; transform:translateX(48px); transition:opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1); }
  .reveal-right.visible { opacity:1; transform:translateX(0); }

  .testi-track { transition: transform .6s cubic-bezier(.22,1,.36,1); }

  .btn-glow { position:relative; overflow:hidden; }
  .btn-glow::after { content:''; position:absolute; inset:0; background:linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent); transform:translateX(-100%); transition:transform .5s ease; }
  .btn-glow:hover::after { transform:translateX(100%); }

  input:focus, select:focus { outline:none; }
  .gold-line::after { content:''; display:block; width:80px; height:2px; background: linear-gradient(90deg,#C9963A,#E8B455); margin-top:12px; animation: lineGrow .8s ease both; }

  /* ── RESPONSIVE ─────────────────────────────────────────────── */

  /* Stats grid */
  .stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }

  /* Destinations grid */
  .dest-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }

  /* Packages grid */
  .pkg-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }

  /* Why Us grid */
  .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }

  /* Why Us feature cards */
  .why-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

  /* Experience grid */
  .exp-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }

  /* Search bar */
  .search-wrap { background: rgba(255,255,255,0.04); border: 1px solid rgba(201,150,58,0.2); border-radius: 12px; padding: 28px 36px; backdrop-filter: blur(20px); box-shadow: 0 20px 60px rgba(0,0,0,0.4); display: flex; gap: 16px; align-items: flex-end; flex-wrap: wrap; }

  @media (max-width: 1024px) {
    .dest-grid { grid-template-columns: repeat(2,1fr) !important; }
    .why-grid { gap: 40px !important; }
  }

  @media (max-width: 768px) {
    /* Search */
    .search-wrap { flex-direction: column !important; padding: 20px 16px !important; }
    .search-wrap > div { width: 100% !important; flex: none !important; }
    .search-wrap button { width: 100% !important; }

    /* Stats — 2 columns */
    .stats-grid { grid-template-columns: repeat(2,1fr) !important; gap: 12px !important; }

    /* Destinations — 1 column */
    .dest-grid { grid-template-columns: 1fr !important; }

    /* Packages — 1 column */
    .pkg-grid { grid-template-columns: 1fr !important; }

    /* Why Us — stack vertically */
    .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; }

    /* Why Us feature cards — 1 column */
    .why-cards { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }

    /* Experience section — stack */
    .exp-grid { grid-template-columns: 1fr !important; gap: 40px !important; }

    /* Experience image height */
    .exp-img-wrap { height: 280px !important; }

    /* Floating badge hide */
    .exp-badge { display: none !important; }

    /* Testimonial padding */
    .testi-inner { padding: 28px 20px !important; }

    /* Section padding reduce */
    .section-pad { padding: 50px 1.2rem !important; }

    /* Hero decorative circle hide */
    .hero-deco { display: none !important; }
  }

  @media (max-width: 480px) {
    .stats-grid { grid-template-columns: repeat(2,1fr) !important; gap: 10px !important; }
    .dest-grid { grid-template-columns: 1fr !important; }
    .pkg-grid { grid-template-columns: 1fr !important; }
    .why-cards { grid-template-columns: 1fr !important; }
    .search-wrap { padding: 16px 12px !important; }
  }
`;

const NAV_ITEMS = [
    { label: "Home", href: "#home" },
    { label: "Destinations", href: "#destinations", sub: ["India Tours", "Himalayan Treks", "Pilgrimage Yatras", "Beach Escapes", "International"] },
    { label: "Packages", href: "#packages", sub: ["Honeymoon", "Family Tours", "Group Travel", "Corporate", "Budget Trips"] },
    { label: "Experiences", href: "#experiences" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const DESTINATIONS = [
    { name: "Varanasi", country: "Uttar Pradesh", img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80", tag: "Spiritual", nights: "3N/4D" },
    { name: "Leh Ladakh", country: "Jammu & Kashmir", img: "https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?w=600&q=80", tag: "Adventure", nights: "5N/6D" },
    { name: "Kerala Backwaters", country: "God's Own Country", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80", tag: "Serene", nights: "4N/5D" },
    { name: "Rajasthan", country: "Land of Kings", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80", tag: "Heritage", nights: "6N/7D" },
    { name: "Andaman Islands", country: "Bay of Bengal", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80", tag: "Beach", nights: "4N/5D" },
    { name: "Rishikesh", country: "Uttarakhand", img: "https://images.unsplash.com/photo-1650341259809-9314b0de9268?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tag: "Yoga & Thrill", nights: "2N/3D" },
];

const PACKAGES = [
    { title: "Golden Triangle", subtitle: "Delhi · Agra · Jaipur", price: "₹18,999", duration: "5 Days", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=700&q=80", badge: "Best Seller", includes: ["5-Star Hotels", "All Meals", "Private Cab", "Guide"] },
    { title: "Honeymoon Bliss", subtitle: "Maldives · Kerala", price: "₹85,000", duration: "7 Days", img: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=700&q=80", badge: "Romantic", includes: ["Overwater Villa", "Candlelight Dinner", "Couple Spa", "All Inclusive"] },
    { title: "Himalayan Trek", subtitle: "Manali · Spiti · Kaza", price: "₹32,500", duration: "9 Days", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80", badge: "Adventure", includes: ["Camping", "Trek Guide", "Meals", "Permits"] },
    { title: "South India Gems", subtitle: "Chennai · Ooty · Munnar", price: "₹24,999", duration: "7 Days", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&q=80", badge: "Popular", includes: ["3-Star Hotels", "Breakfast", "AC Transport", "Sightseeing"] },
];

const STATS = [
    { value: "15,000+", label: "Happy Travelers" },
    { value: "200+", label: "Destinations" },
    { value: "12+", label: "Years Experience" },
    { value: "98%", label: "Satisfaction Rate" },
];

const TESTIMONIALS = [
    { name: "Priya Sharma", loc: "Mumbai", text: "Atithi Travel made our Ladakh trip absolutely magical. Every detail was taken care of — the itinerary, hotels, and local experiences exceeded our expectations.", rating: 5, avatar: "PS" },
    { name: "Rajesh & Meena", loc: "Bangalore", text: "Our honeymoon package to Kerala was beyond perfect. The houseboat experience was unforgettable. We'll be booking with Atithi Travel again for sure!", rating: 5, avatar: "RM" },
    { name: "Amit Verma", loc: "Delhi", text: "Professional, responsive, and truly passionate about travel. The Golden Triangle tour was flawlessly organized. Highly recommend Atithi Yatra!", rating: 5, avatar: "AV" },
    { name: "Sunita Patel", loc: "Ahmedabad", text: "Incredible service from start to finish. The Rajasthan heritage tour felt like stepping into history. My family had the time of their lives.", rating: 5, avatar: "SP" },
];

const WHY_US = [
    { icon: "✦", title: "Personalised Journeys", desc: "Every itinerary crafted around your dreams, pace, and budget — no cookie-cutter tours." },
    { icon: "◈", title: "Expert Local Guides", desc: "Our guides are passionate storytellers who reveal hidden gems the guidebooks miss." },
    { icon: "⬡", title: "24/7 Travel Support", desc: "Round-the-clock assistance before, during, and after your journey for peace of mind." },
    { icon: "◇", title: "Best Price Guarantee", desc: "We match any lower price you find and still deliver premium experiences." },
];

function useIntersection(ref, threshold = 0.15) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return visible;
}

function Particles() {
    const particles = Array.from({ length: 18 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: Math.random() * 10 + 12,
        opacity: Math.random() * 0.4 + 0.1,
    }));
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map(p => (
                <div key={p.id} className="particle" style={{
                    width: p.size, height: p.size,
                    left: `${p.left}%`, bottom: "-10px",
                    background: p.id % 3 === 0 ? "#C9963A" : p.id % 3 === 1 ? "#E8B455" : "rgba(255,255,255,0.6)",
                    animationDuration: `${p.duration}s`,
                    animationDelay: `${p.delay}s`,
                    opacity: p.opacity,
                }} />
            ))}
        </div>
    );
}

function StarRating({ rating }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: i < rating ? "#C9963A" : "rgba(255,255,255,0.2)", fontSize: 14 }}>★</span>
            ))}
        </div>
    );
}

function SectionTag({ children }) {
    return (
        <div className="flex items-center gap-3 mb-4">
            <div style={{ width: 32, height: 2, background: "linear-gradient(90deg,#C9963A,#E8B455)" }} />
            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9963A" }}>{children}</span>
            <div style={{ width: 32, height: 2, background: "linear-gradient(90deg,#E8B455,#C9963A)" }} />
        </div>
    );
}

const Home = () => {
    const [navScrolled, setNavScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [testiIndex, setTestiIndex] = useState(0);
    const [searchForm, setSearchForm] = useState({ dest: "", type: "", people: "2" });
    const [heroLoaded, setHeroLoaded] = useState(false);

    const statsRef = useRef(null);
    const destRef = useRef(null);
    const pkgRef = useRef(null);
    const whyRef = useRef(null);
    const testiRef = useRef(null);
    const ctaRef = useRef(null);
    const aboutRef = useRef(null);

    const statsVisible = useIntersection(statsRef);
    const destVisible = useIntersection(destRef);
    const pkgVisible = useIntersection(pkgRef);
    const whyVisible = useIntersection(whyRef);
    const testiVisible = useIntersection(testiRef);
    const ctaVisible = useIntersection(ctaRef);
    const aboutVisible = useIntersection(aboutRef);

    useEffect(() => {
        const onScroll = () => setNavScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        setTimeout(() => setHeroLoaded(true), 100);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const t = setInterval(() => setTestiIndex(i => (i + 1) % TESTIMONIALS.length), 5000);
        return () => clearInterval(t);
    }, []);

    const TEAL = "#0F5E6A";
    const GOLD = "#C9963A";
    const GOLD_LIGHT = "#E8B455";
    const DARK = "#0a1628";
    const DARK2 = "#0d1e35";

    return (
        <>
            <style>{GLOBAL_CSS}</style>

            {/* ── WHATSAPP FIXED BUTTON ── */}
            <a
                href="https://wa.me/919088110999?text=Hello%2C%20I%20want%20to%20enquire%20about%20your%20travel%20packages"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: "fixed",
                    bottom: 32,
                    right: 32,
                    zIndex: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                    boxShadow: "0 6px 24px rgba(37,211,102,0.45)",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "transform 0.25s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.12)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
                <span style={{ position: "absolute", inset: -6, borderRadius: "50%", border: "2px solid rgba(37,211,102,0.5)", animation: "whatsappPulse 2s ease-out infinite" }} />
                <span style={{ position: "absolute", inset: -14, borderRadius: "50%", border: "1.5px solid rgba(37,211,102,0.25)", animation: "whatsappPulse 2s ease-out 0.5s infinite" }} />
                <FaWhatsapp style={{ fontSize: 30, color: "#fff", position: "relative", zIndex: 1 }} />
            </a>

            {/* ── HERO ── */}
            <section id="home" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden", display: "flex", alignItems: "center" }}>
                <div style={{ position: "absolute", inset: 0 }}>
                    <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80" alt=""
                        style={{ width: "100%", height: "100%", objectFit: "cover", animation: "heroKen 18s ease-in-out infinite alternate" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.5) 50%, rgba(15,94,106,0.4) 100%)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 200, background: "linear-gradient(to top, #0a1628, transparent)" }} />
                </div>

                <Particles />

                {/* Decorative circle — hidden on mobile via CSS */}
                <div className="hero-deco animate-float" style={{ position: "absolute", right: "8%", top: "20%", width: 320, height: 320, borderRadius: "50%", border: `1px solid rgba(201,150,58,0.2)`, pointerEvents: "none" }}>
                    <div style={{ position: "absolute", inset: 20, borderRadius: "50%", border: `1px dashed rgba(201,150,58,0.15)` }} />
                    <div style={{ position: "absolute", inset: 60, borderRadius: "50%", border: `0.5px solid rgba(201,150,58,0.1)` }} />
                </div>

                <div style={{ position: "relative", zIndex: 2, maxWidth: 700, marginLeft: "8%", padding: "0 1.2rem" }}>
                    <div className={`animate-fade-up ${heroLoaded ? "" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                            <div style={{ width: 40, height: 1, background: GOLD }} />
                            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: GOLD }}>Discover India & Beyond</span>
                            <div style={{ width: 40, height: 1, background: GOLD }} />
                        </div>
                    </div>

                    <div className="animate-fade-up delay-200" style={{ animationFillMode: "both" }}>
                        <h1 className="font-display" style={{ fontSize: "clamp(38px,7vw,96px)", lineHeight: 1.0, fontWeight: 300, color: "#fff", marginBottom: 8 }}>Every Journey</h1>
                        <h1 className="font-display" style={{ fontSize: "clamp(38px,7vw,96px)", lineHeight: 1.0, fontWeight: 600, marginBottom: 8 }}>
                            <span className="gold-shimmer">Tells a Story</span>
                        </h1>
                        <h1 className="font-display" style={{ fontSize: "clamp(38px,7vw,96px)", lineHeight: 1.0, fontWeight: 300, color: "rgba(255,255,255,0.7)", marginBottom: 28 }}>
                            <em>Worth Living</em>
                        </h1>
                    </div>

                    <p className="animate-fade-up delay-400" style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.7)", maxWidth: 500, marginBottom: 40, animationFillMode: "both" }}>
                        From sacred pilgrimages to Himalayan adventures — Atithi Travel Yatra crafts journeys that awaken the soul and create memories that last a lifetime.
                    </p>

                    <div className="animate-fade-up delay-500" style={{ display: "flex", gap: 16, flexWrap: "wrap", animationFillMode: "both" }}>
                        <button className="btn-glow" style={{ background: `linear-gradient(135deg, ${TEAL} 0%, #1a7a8a 100%)`, border: `1px solid rgba(201,150,58,0.3)`, borderRadius: 4, padding: "14px 28px", fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff", cursor: "pointer", boxShadow: `0 8px 30px rgba(15,94,106,0.5)`, transition: "all 0.25s" }}
                            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                            Explore Packages ✈
                        </button>
                        <button style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 4, padding: "14px 28px", fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", cursor: "pointer", transition: "all 0.25s" }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}>
                            ▶ Watch Our Story
                        </button>
                    </div>
                </div>

                <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, animation: "fadeIn 1s 1.5s both" }}>
                    <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Scroll</span>
                    <div style={{ width: 1, height: 50, background: "linear-gradient(to bottom, rgba(201,150,58,0.8), transparent)", animation: "pulse2 2s ease-in-out infinite" }} />
                </div>
            </section>

            {/* ── SEARCH BAR ── */}
            <section style={{ background: DARK, padding: "0 1.2rem" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", transform: "translateY(-36px)" }}>
                    <div className="search-wrap">
                        <div style={{ flex: 2, minWidth: 160 }}>
                            <label style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, display: "block", marginBottom: 8 }}>Destination</label>
                            <input value={searchForm.dest} onChange={e => setSearchForm(s => ({ ...s, dest: e.target.value }))}
                                placeholder="Where do you want to go?"
                                style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "10px 14px", fontFamily: "'Outfit',sans-serif", fontSize: 14, color: "#fff", transition: "border-color 0.2s" }}
                                onFocus={e => e.target.style.borderColor = GOLD}
                                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
                        </div>
                        <div style={{ flex: 1.5, minWidth: 140 }}>
                            <label style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, display: "block", marginBottom: 8 }}>Tour Type</label>
                            <select value={searchForm.type} onChange={e => setSearchForm(s => ({ ...s, type: e.target.value }))}
                                style={{ width: "100%", background: "rgba(15,94,106,0.3)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "10px 14px", fontFamily: "'Outfit',sans-serif", fontSize: 14, color: "#fff", cursor: "pointer" }}>
                                <option value="">All Types</option>
                                <option>Adventure</option><option>Spiritual</option><option>Honeymoon</option>
                                <option>Family</option><option>Beach</option><option>Heritage</option>
                            </select>
                        </div>
                        <div style={{ flex: 1, minWidth: 100 }}>
                            <label style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, display: "block", marginBottom: 8 }}>Travelers</label>
                            <input type="number" min={1} max={20} value={searchForm.people} onChange={e => setSearchForm(s => ({ ...s, people: e.target.value }))}
                                style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "10px 14px", fontFamily: "'Outfit',sans-serif", fontSize: 14, color: "#fff" }}
                                onFocus={e => e.target.style.borderColor = GOLD}
                                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
                        </div>
                        <button className="btn-glow" style={{ background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_LIGHT} 100%)`, border: "none", borderRadius: 6, padding: "11px 32px", fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a1628", cursor: "pointer", whiteSpace: "nowrap", boxShadow: `0 6px 24px rgba(201,150,58,0.4)`, transition: "all 0.2s", flexShrink: 0 }}
                            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-1px)"}
                            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                            Search Tours
                        </button>
                    </div>
                </div>
            </section>

            {/* ── STATS ── */}
            <section ref={statsRef} style={{ background: DARK, padding: "40px 1.2rem 80px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div className="stats-grid">
                        {STATS.map((s, i) => (
                            <div key={s.label} className={`stat-card reveal ${statsVisible ? "visible" : ""}`}
                                style={{ background: `linear-gradient(135deg, rgba(15,94,106,0.2), rgba(201,150,58,0.08))`, border: "0.5px solid rgba(201,150,58,0.2)", borderRadius: 12, padding: "28px 16px", textAlign: "center", transitionDelay: `${i * 0.1}s` }}>
                                <div className="font-display" style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 600, color: GOLD, letterSpacing: "0.04em", lineHeight: 1 }}>{s.value}</div>
                                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: 8 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS ── */}
            <section id="destinations" ref={destRef} className="section-pad" style={{ background: DARK2, padding: "80px 1.2rem" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div className={`reveal ${destVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: 60 }}>
                        <SectionTag>Featured Destinations</SectionTag>
                        <h2 className="font-display" style={{ fontSize: "clamp(30px,5vw,60px)", fontWeight: 300, color: "#fff", lineHeight: 1.1 }}>
                            Incredible <em style={{ color: GOLD }}>India</em> Awaits
                        </h2>
                        <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, color: "rgba(255,255,255,0.5)", marginTop: 16, maxWidth: 500, margin: "16px auto 0" }}>
                            From snow-capped peaks to golden beaches — explore the breathtaking diversity of our destinations.
                        </p>
                    </div>

                    <div className="dest-grid">
                        {DESTINATIONS.map((d, i) => (
                            <div key={d.name} className={`dest-card reveal ${destVisible ? "visible" : ""}`}
                                style={{ borderRadius: 16, overflow: "hidden", position: "relative", aspectRatio: "4/5", cursor: "pointer", transitionDelay: `${i * 0.08}s` }}>
                                <img src={d.img} alt={d.name} className="dest-img" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.2) 50%, transparent 100%)" }} />
                                <div style={{ position: "absolute", top: 16, left: 16, background: `rgba(201,150,58,0.85)`, backdropFilter: "blur(8px)", borderRadius: 4, padding: "4px 12px", fontFamily: "'Outfit',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0a1628" }}>{d.tag}</div>
                                <div className="dest-overlay animate-shimmer" style={{ position: "absolute", inset: 0 }} />
                                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 20px" }}>
                                    <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, marginBottom: 4 }}>{d.country}</div>
                                    <h3 className="font-display" style={{ fontSize: "clamp(22px,3vw,28px)", fontWeight: 600, color: "#fff", lineHeight: 1.1, marginBottom: 8 }}>{d.name}</h3>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>{d.nights}</span>
                                        <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: GOLD_LIGHT, textTransform: "uppercase" }}>Explore →</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY US ── */}
            <section id="about" ref={whyRef} className="section-pad" style={{ background: DARK, padding: "80px 1.2rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", right: -100, top: -100, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(201,150,58,0.06)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", right: -50, top: -50, width: 250, height: 250, borderRadius: "50%", border: "1px solid rgba(201,150,58,0.1)", pointerEvents: "none" }} />

                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div className="why-grid">
                        <div className={`reveal-left ${whyVisible ? "visible" : ""}`}>
                            <SectionTag>Why Choose Us</SectionTag>
                            <h2 className="font-display" style={{ fontSize: "clamp(28px,4vw,54px)", fontWeight: 300, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>
                                Travel with <br /><em style={{ color: GOLD }}>Confidence</em> &<br /> Heart
                            </h2>
                            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.9, marginBottom: 32 }}>
                                With over 12 years of crafting unforgettable journeys across India and beyond, Atithi Travel Yatra is your trusted partner for every adventure.
                            </p>
                            <button className="btn-glow" style={{ background: `linear-gradient(135deg,${TEAL},#1a7a8a)`, border: `1px solid rgba(201,150,58,0.3)`, borderRadius: 4, padding: "12px 30px", fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff", cursor: "pointer", boxShadow: `0 6px 24px rgba(15,94,106,0.4)`, transition: "all 0.2s" }}
                                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                                Learn Our Story
                            </button>
                        </div>

                        <div className="why-cards">
                            {WHY_US.map((w, i) => (
                                <div key={w.title} className={`reveal ${whyVisible ? "visible" : ""}`}
                                    style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(201,150,58,0.15)", borderRadius: 12, padding: "24px 20px", transition: "all 0.3s", cursor: "default", transitionDelay: `${0.1 + i * 0.1}s` }}
                                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(15,94,106,0.15)"; e.currentTarget.style.borderColor = "rgba(201,150,58,0.4)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(201,150,58,0.15)"; }}>
                                    <div style={{ fontSize: 22, color: GOLD, marginBottom: 12 }}>{w.icon}</div>
                                    <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 8, letterSpacing: "0.02em" }}>{w.title}</h4>
                                    <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{w.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PACKAGES ── */}
            <section id="packages" ref={pkgRef} className="section-pad" style={{ background: DARK2, padding: "80px 1.2rem" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div className={`reveal ${pkgVisible ? "visible" : ""}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 20 }}>
                        <div>
                            <SectionTag>Curated Packages</SectionTag>
                            <h2 className="font-display" style={{ fontSize: "clamp(30px,5vw,60px)", fontWeight: 300, color: "#fff", lineHeight: 1.1 }}>
                                Journeys <em style={{ color: GOLD }}>Crafted</em><br /> For You
                            </h2>
                        </div>
                        <a href="#" style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, textDecoration: "none", borderBottom: `1px solid ${GOLD}`, paddingBottom: 2, transition: "opacity 0.2s" }}>
                            View All Packages →
                        </a>
                    </div>

                    <div className="pkg-grid">
                        {PACKAGES.map((p, i) => (
                            <div key={p.title} className={`pkg-card reveal ${pkgVisible ? "visible" : ""}`}
                                style={{ borderRadius: 16, overflow: "hidden", background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.08)", cursor: "pointer", transitionDelay: `${i * 0.1}s` }}>
                                <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                                    <img src={p.img} alt={p.title} className="pkg-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,22,40,0.6), transparent)" }} />
                                    <div style={{ position: "absolute", top: 16, right: 16, background: `linear-gradient(135deg,${GOLD},${GOLD_LIGHT})`, borderRadius: 4, padding: "4px 12px", fontFamily: "'Outfit',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a1628" }}>{p.badge}</div>
                                    <div style={{ position: "absolute", bottom: 16, left: 16, fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: 6 }}>
                                        <span style={{ color: GOLD }}>⏱</span> {p.duration}
                                    </div>
                                </div>
                                <div style={{ padding: "20px 20px 24px" }}>
                                    <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>{p.subtitle}</div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, gap: 8 }}>
                                        <h3 className="font-display" style={{ fontSize: "clamp(20px,3vw,26px)", fontWeight: 600, color: "#fff" }}>{p.title}</h3>
                                        <div style={{ textAlign: "right", flexShrink: 0 }}>
                                            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>Starting from</div>
                                            <div className="font-display" style={{ fontSize: "clamp(18px,3vw,24px)", fontWeight: 600, color: GOLD }}>{p.price}</div>
                                            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)" }}>per person</div>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                                        {p.includes.map(inc => (
                                            <span key={inc} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: 4, padding: "4px 10px" }}>✓ {inc}</span>
                                        ))}
                                    </div>
                                    <button className="btn-glow" style={{ width: "100%", background: `linear-gradient(135deg,${TEAL},#1a7a8a)`, border: "none", borderRadius: 6, padding: "11px", fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff", cursor: "pointer", transition: "all 0.2s" }}
                                        onMouseEnter={e => e.currentTarget.style.background = `linear-gradient(135deg,${GOLD},${GOLD_LIGHT})`}
                                        onMouseLeave={e => e.currentTarget.style.background = `linear-gradient(135deg,${TEAL},#1a7a8a)`}>
                                        Book This Package
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EXPERIENCE STRIP ── */}
            <section id="experiences" className="section-pad" style={{ padding: "80px 1.2rem", background: DARK, position: "relative", overflow: "hidden" }}>
                <div ref={aboutRef} className="exp-grid">
                    <div className={`exp-img-wrap reveal-left ${aboutVisible ? "visible" : ""}`} style={{ position: "relative", height: 480 }}>
                        <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80" alt="" style={{ position: "absolute", top: 0, left: 0, width: "68%", height: "70%", objectFit: "cover", borderRadius: 16 }} />
                        <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=80" alt="" style={{ position: "absolute", bottom: 0, right: 0, width: "55%", height: "55%", objectFit: "cover", borderRadius: 16 }} />
                        <div className="exp-badge animate-float" style={{ position: "absolute", bottom: 80, left: "-10%", background: `linear-gradient(135deg,${TEAL},#1a7a8a)`, border: `1px solid rgba(201,150,58,0.3)`, borderRadius: 12, padding: "16px 20px", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
                            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, marginBottom: 4 }}>This Month</div>
                            <div className="font-display" style={{ fontSize: 28, fontWeight: 600, color: "#fff" }}>240+</div>
                            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.6)" }}>Happy travelers</div>
                        </div>
                    </div>

                    <div className={`reveal-right ${aboutVisible ? "visible" : ""}`}>
                        <SectionTag>Experiences</SectionTag>
                        <h2 className="font-display" style={{ fontSize: "clamp(28px,4vw,50px)", fontWeight: 300, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
                            More Than Just<br /><em style={{ color: GOLD }}>Travel</em> — A<br />Transformation
                        </h2>
                        <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.9, marginBottom: 28 }}>
                            We believe travel has the power to transform. Whether you're seeking spiritual awakening in Varanasi, thrills in Leh, or tranquility in Kerala — we connect you with the soul of every destination.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            {["Handpicked boutique stays & heritage hotels", "Immersive local cultural experiences", "Flexible itineraries built around you", "Expert naturalist & heritage guides"].map((item, i) => (
                                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: `rgba(201,150,58,0.15)`, border: `1px solid rgba(201,150,58,0.3)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                                        <span style={{ color: GOLD, fontSize: 11 }}>✦</span>
                                    </div>
                                    <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section ref={testiRef} className="section-pad" style={{ background: DARK2, padding: "80px 1.2rem", overflow: "hidden" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div className={`reveal ${testiVisible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: 60 }}>
                        <SectionTag>What Travelers Say</SectionTag>
                        <h2 className="font-display" style={{ fontSize: "clamp(30px,5vw,58px)", fontWeight: 300, color: "#fff" }}>
                            Stories of <em style={{ color: GOLD }}>Wanderlust</em>
                        </h2>
                    </div>

                    <div style={{ overflow: "hidden" }}>
                        <div className="testi-track" style={{ display: "flex", transform: `translateX(${-testiIndex * 100}%)` }}>
                            {TESTIMONIALS.map((t, i) => (
                                <div key={i} style={{ minWidth: "100%", padding: "0 0.5rem" }}>
                                    <div className="testi-inner" style={{ maxWidth: 720, margin: "0 auto", background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(201,150,58,0.2)", borderRadius: 20, padding: "48px 56px", position: "relative", textAlign: "center" }}>
                                        <div className="font-display" style={{ fontSize: 120, lineHeight: 0.5, color: `rgba(201,150,58,0.1)`, position: "absolute", top: 24, left: 36, userSelect: "none" }}>"</div>
                                        <StarRating rating={t.rating} />
                                        <p className="font-display" style={{ fontSize: "clamp(16px,2.5vw,24px)", fontWeight: 300, color: "rgba(255,255,255,0.85)", lineHeight: 1.6, margin: "24px 0 32px", fontStyle: "italic" }}>
                                            "{t.text}"
                                        </p>
                                        <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center" }}>
                                            <div style={{ width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg,${TEAL},${GOLD})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", flexShrink: 0 }}>{t.avatar}</div>
                                            <div style={{ textAlign: "left" }}>
                                                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, color: "#fff" }}>{t.name}</div>
                                                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: GOLD, letterSpacing: "0.1em" }}>{t.loc}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32 }}>
                        {TESTIMONIALS.map((_, i) => (
                            <button key={i} onClick={() => setTestiIndex(i)} style={{ width: i === testiIndex ? 28 : 8, height: 8, borderRadius: 4, background: i === testiIndex ? GOLD : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section ref={ctaRef} className="section-pad" style={{ position: "relative", overflow: "hidden", padding: "80px 1.2rem" }}>
                <div style={{ position: "absolute", inset: 0 }}>
                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(15,94,106,0.7) 60%, rgba(10,22,40,0.85) 100%)" }} />
                </div>
                <Particles />
                <div className={`reveal ${ctaVisible ? "visible" : ""}`} style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
                    <SectionTag>Start Your Journey</SectionTag>
                    <h2 className="font-display" style={{ fontSize: "clamp(32px,6vw,80px)", fontWeight: 300, color: "#fff", lineHeight: 1.05, marginBottom: 12 }}>
                        Your Dream Trip<br /><em><span className="gold-shimmer">Starts Here</span></em>
                    </h2>
                    <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, color: "rgba(255,255,255,0.6)", marginBottom: 40, lineHeight: 1.8 }}>
                        Let our travel experts craft your perfect journey. Get a free personalized itinerary within 24 hours.
                    </p>
                    <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                        <button className="btn-glow" style={{ background: `linear-gradient(135deg,${GOLD},${GOLD_LIGHT})`, border: "none", borderRadius: 4, padding: "16px 36px", fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#0a1628", cursor: "pointer", boxShadow: `0 8px 32px rgba(201,150,58,0.5)`, transition: "all 0.25s" }}
                            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px) scale(1.02)"}
                            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0) scale(1)"}>
                            Plan My Trip ✈
                        </button>
                        <button style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 4, padding: "16px 36px", fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff", cursor: "pointer", transition: "all 0.25s" }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}>
                            📞 Talk to Expert
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;