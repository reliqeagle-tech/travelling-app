// import React from 'react'
// import { useState, useEffect, useRef } from "react";


// const Services = () => {
//     /* ─── Global Styles ──────────────────────────────────────────────────────── */
//     const GLOBAL_CSS = `
//             @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');

//             *, *::before, *::after {box - sizing: border-box; margin: 0; padding: 0; }
//             html {scroll - behavior: smooth; }
//             body {font - family: 'DM Sans', sans-serif; background: #faf8f4; color: #1a1a2e; overflow-x: hidden; }

//             ::-webkit-scrollbar {width: 5px; }
//             ::-webkit-scrollbar-track {background: #f0ede6; }
//             ::-webkit-scrollbar-thumb {background: #C9963A; border-radius: 9px; }

//             .font-display {font - family: 'Cormorant Garamond', serif; }

//             @keyframes fadeUp    {from {opacity:0; transform:translateY(36px); } to {opacity:1; transform:translateY(0); } }
//             @keyframes fadeIn    {from {opacity:0; } to {opacity:1; } }
//             @keyframes slideR    {from {opacity:0; transform:translateX(-40px); } to {opacity:1; transform:translateX(0); } }
//             @keyframes slideL    {from {opacity:0; transform:translateX(40px); }  to {opacity:1; transform:translateX(0); } }
//             @keyframes floatY    {0 %, 100 % { transform: translateY(0) } 50%{transform:translateY(-12px)} }
//             @keyframes spinSlow  {from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
//             @keyframes shimmer   {0 % { background- position:-200% center} 100%{background - position:200% center} }
//             @keyframes lineGrow  {from{width:0} to{width:60px} }
//             @keyframes scaleIn   {from{opacity:0;transform:scale(0.9)} to{opacity:1;transform:scale(1)} }
//             @keyframes borderPulse {0 %, 100 % { border- color:rgba(201,150,58,0.3)} 50%{border - color:rgba(201,150,58,0.8)} }
//             @keyframes countUp   {from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
//             @keyframes bgShift   {0 %, 100 % { background- position:0% 50%} 50%{background - position:100% 50%} }
//             @keyframes carDrive  {0 % { transform: translateX(-60px) scaleX(1);opacity: 0 } 20%{opacity:1} 80%{opacity:1} 100%{transform:translateX(60px) scaleX(1);opacity:0} }
//             @keyframes heroImgKen{0 % { transform: scale(1) translateX(0) } 100%{transform:scale(1.06) translateX(-10px)} }

//             .anim-fade-up  {animation: fadeUp  0.75s cubic-bezier(.22,1,.36,1) both; }
//             .anim-fade-in  {animation: fadeIn  0.8s ease both; }
//             .anim-slide-r  {animation: slideR  0.75s cubic-bezier(.22,1,.36,1) both; }
//             .anim-slide-l  {animation: slideL  0.75s cubic-bezier(.22,1,.36,1) both; }
//             .anim-float    {animation: floatY  4s ease-in-out infinite; }
//             .anim-spin     {animation: spinSlow 22s linear infinite; }
//             .anim-scale-in {animation: scaleIn 0.65s cubic-bezier(.22,1,.36,1) both; }

//             .d1{animation - delay:.05s} .d2{animation - delay:.12s} .d3{animation - delay:.2s}
//             .d4{animation - delay:.28s} .d5{animation - delay:.36s} .d6{animation - delay:.44s}
//             .d7{animation - delay:.52s} .d8{animation - delay:.6s}

//             /* Scroll reveal */
//             .reveal      {opacity:0; transform:translateY(40px); transition:opacity .75s cubic-bezier(.22,1,.36,1),transform .75s cubic-bezier(.22,1,.36,1); }
//             .reveal.vis  {opacity:1; transform:translateY(0); }
//             .rev-l       {opacity:0; transform:translateX(-40px); transition:opacity .75s cubic-bezier(.22,1,.36,1),transform .75s cubic-bezier(.22,1,.36,1); }
//             .rev-l.vis   {opacity:1; transform:translateX(0); }
//             .rev-r       {opacity:0; transform:translateX(40px); transition:opacity .75s cubic-bezier(.22,1,.36,1),transform .75s cubic-bezier(.22,1,.36,1); }
//             .rev-r.vis   {opacity:1; transform:translateX(0); }

//             /* Cards */
//             .svc-card {transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease, border-color .3s ease; }
//             .svc-card:hover {transform:translateY(-10px); box-shadow:0 24px 56px rgba(15,94,106,0.13); border-color:rgba(201,150,58,0.5) !important; }
//             .svc-card:hover .svc-icon-wrap {background: linear-gradient(135deg,#0F5E6A,#1a8a9a) !important; }
//             .svc-card:hover .svc-icon-wrap svg {color:#fff !important; }
//             .svc-card:hover .svc-arrow {transform:translateX(4px); color:#C9963A !important; }
//             .svc-arrow {transition:transform .3s ease, color .3s ease; }

//             .process-card {transition: transform .3s ease, box-shadow .3s ease; }
//             .process-card:hover {transform:translateY(-6px); box-shadow:0 16px 40px rgba(15,94,106,0.1); }

//             /* Gold shimmer text */
//             .gold-text {
//                 background: linear-gradient(90deg,#A07020,#C9963A,#E8B455,#C9963A,#A07020);
//             background-size:200% auto;
//             -webkit-background-clip:text; background-clip:text;
//             -webkit-text-fill-color:transparent;
//             animation: shimmer 3.5s linear infinite;
//   }

//             /* Decorative pattern bg */
//             .pattern-bg {
//                 background - image:
//             radial-gradient(circle at 1px 1px, rgba(15,94,106,0.06) 1px, transparent 0);
//             background-size: 28px 28px;
//   }

//             /* Tab active */
//             .tab-btn {transition: all .25s ease; }
//             .tab-btn.active {background: linear-gradient(135deg,#0F5E6A,#1a8a9a); color:#fff; box-shadow:0 6px 20px rgba(15,94,106,0.3); }
//             .tab-btn:not(.active):hover {background:#f0f9fa; color:#0F5E6A; }

//             /* Stat card */
//             .stat-tile {transition: transform .3s ease, box-shadow .3s ease; }
//             .stat-tile:hover {transform:scale(1.04); box-shadow:0 12px 32px rgba(201,150,58,0.18); }

//             /* Input */
//             input:focus, select:focus, textarea:focus {outline:none; border-color:#C9963A !important; }

//             /* btn glow sweep */
//             .btn-sweep {position:relative; overflow:hidden; }
//             .btn-sweep::after {content:''; position:absolute; inset:0; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent); transform:translateX(-100%); transition:transform .5s ease; }
//             .btn-sweep:hover::after {transform:translateX(100%); }

//             /* Diagonal section divider */
//             .diagonal-top {clip - path: polygon(0 5%, 100% 0, 100% 100%, 0% 100%); }
//             .diagonal-bot  {clip - path: polygon(0 0, 100% 0, 100% 95%, 0 100%); }
//             `;

//     const SERVICES = [
//         {
//             id: "pilgrimage",
//             icon: (
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
//                     <circle cx="12" cy="8" r="4" /><path d="M12 12v10M8 22h8M6 16c-2 0-3-1-3-2s1-2 3-2h12c2 0 3 1 3 2s-1 2-3 2" />
//                 </svg>
//             ),
//             label: "Pilgrimage Yatras",
//             tagline: "Sacred Journeys",
//             desc: "Experience the divine with our meticulously planned pilgrimage tours to Bodh Gaya, Varanasi, Rishikesh, Tirupati, and all major Char Dham routes.",
//             highlights: ["Bodh Gaya Buddhist Circuit", "Char Dham Yatra", "Varanasi Spiritual Tour", "Jyotirlinga Darshan", "Shirdi & Ajmer"],
//             img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=700&q=80",
//             color: "#0F5E6A",
//             bgAccent: "#e8f5f7",
//         },
//         {
//             id: "adventure",
//             icon: (
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
//                     <path d="M3 17l4-8 4 4 3-6 4 10" /><path d="M2 20h20" />
//                 </svg>
//             ),
//             label: "Adventure Tours",
//             tagline: "Thrill Awaits",
//             desc: "Push your limits with our curated adventure packages — trekking through the Himalayas, white-water rafting in Rishikesh, and camping under a blanket of stars.",
//             highlights: ["Leh Ladakh Expedition", "Spiti Valley Trek", "Kedarkantha Summit", "River Rafting Rishikesh", "Chopta Chandrashila"],
//             img: "https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?w=700&q=80",
//             color: "#2d7a3a",
//             bgAccent: "#eaf5ec",
//         },
//         {
//             id: "heritage",
//             icon: (
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
//                     <path d="M3 21h18M5 21V7l7-4 7 4v14" /><path d="M9 21v-6h6v6" />
//                 </svg>
//             ),
//             label: "Heritage & Culture",
//             tagline: "Living History",
//             desc: "Walk through centuries of living history across Rajasthan's royal palaces, Mughal monuments, and the timeless cultural heartbeat of incredible India.",
//             highlights: ["Golden Triangle Tour", "Rajasthan Royal Circuit", "Hampi & Mysore Heritage", "Khajuraho & Orchha", "Old Delhi Walk"],
//             img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=700&q=80",
//             color: "#8B4513",
//             bgAccent: "#faf0e6",
//         },
//         {
//             id: "honeymoon",
//             icon: (
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
//                     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//                 </svg>
//             ),
//             label: "Honeymoon Packages",
//             tagline: "Romance Redefined",
//             desc: "Begin your forever with us — from floating cottages on Kerala's backwaters to overwater villas in the Maldives, every detail is crafted for romance.",
//             highlights: ["Kerala Houseboat Special", "Maldives Overwater Villa", "Andaman Couple Retreat", "Manali Snow Honeymoon", "Coorg Plantation Stay"],
//             img: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=700&q=80",
//             color: "#9b2335",
//             bgAccent: "#fdf0f2",
//         },
//         {
//             id: "family",
//             icon: (
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
//                     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
//                     <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
//                 </svg>
//             ),
//             label: "Family Holidays",
//             tagline: "Memories Together",
//             desc: "Create lifelong family memories with our kid-friendly, comfort-focused itineraries designed to delight every generation from grandparents to toddlers.",
//             highlights: ["South India Family Circuit", "Jim Corbett Wildlife", "Goa Beach Family Fun", "Shimla Manali Snowplay", "Sikkim Family Escape"],
//             img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&q=80",
//             color: "#C9963A",
//             bgAccent: "#fef9f0",
//         },
//         {
//             id: "corporate",
//             icon: (
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
//                     <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
//                     <line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
//                 </svg>
//             ),
//             label: "Corporate Travel",
//             tagline: "Business + Leisure",
//             desc: "Seamless corporate travel management — MICE events, team offsites, incentive trips, and executive travel, all handled with precision and discretion.",
//             highlights: ["MICE Event Planning", "Team Offsite Packages", "Incentive Tours", "Airport Transfers", "Conference Travel"],
//             img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
//             color: "#2c3e6b",
//             bgAccent: "#f0f2f9",
//         },
//     ];

//     const PROCESS = [
//         { step: "01", title: "Share Your Vision", desc: "Tell us where you want to go, your dates, budget, and travel style. We listen — every detail matters." },
//         { step: "02", title: "Custom Itinerary", desc: "Our experts craft a bespoke itinerary within 24 hours, tailored to your exact preferences and requirements." },
//         { step: "03", title: "Confirm & Relax", desc: "Review, tweak, and confirm your plan. We handle all bookings, permits, and logistics from start to finish." },
//         { step: "04", title: "Journey Begins", desc: "Travel with confidence knowing our 24/7 support team is always just a call away throughout your trip." },
//     ];

//     const STATS = [
//         { value: "15,000+", label: "Happy Travelers" },
//         { value: "200+", label: "Destinations" },
//         { value: "50+", label: "Tour Packages" },
//         { value: "12+", label: "Years Experience" },
//     ];

//     const NAV_ITEMS = [
//         { label: "Home", href: "#" },
//         { label: "Destinations", href: "#" },
//         { label: "Services", href: "#services" },
//         { label: "Pricing", href: "#" },
//         { label: "About", href: "#" },
//         { label: "Contact", href: "#contact" },
//     ];
//     function useReveal(threshold = 0.12) {
//         const ref = useRef(null);
//         const [vis, setVis] = useState(false);
//         useEffect(() => {
//             const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold });
//             if (ref.current) obs.observe(ref.current);
//             return () => obs.disconnect();
//         }, []);
//         return [ref, vis];
//     }
//     const [ref, vis] = useReveal();
//     function Tag({ children }) {
//         return (
//             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
//                 <div style={{ width: 28, height: 2, background: "linear-gradient(90deg,#C9963A,#E8B455)" }} />
//                 <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "#C9963A" }}>{children}</span>
//                 <div style={{ width: 28, height: 2, background: "linear-gradient(90deg,#E8B455,#C9963A)" }} />
//             </div>
//         );
//     }
//     const testimonials = [
//         { name: "Amit & Priya Sharma", loc: "Mumbai", text: "Atithi Travel made our Char Dham Yatra completely stress-free. Their local knowledge and care was exceptional.", stars: 5 },
//         { name: "Rajesh Gupta", loc: "Delhi", text: "The Ladakh adventure package was beyond our expectations. Perfectly organised, superb guides, lifetime memories.", stars: 5 },
//         { name: "Sunita & Family", loc: "Ahmedabad", text: "Our South India family trip was flawlessly executed. The kids loved it and we didn't worry about a single thing!", stars: 5 },
//     ];
//     const [active, setActive] = useState(null);

//     return (
//         <div>

//             <section id="services" ref={ref} style={{ background: "#faf8f4", padding: "90px 8%" }} className="pattern-bg">
//                 <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//                     {/* Header */}
//                     <div className={`reveal ${vis ? "vis" : ""}`} style={{ textAlign: "center", marginBottom: 64 }}>
//                         <Tag>What We Offer</Tag>
//                         <h2 className="font-display" style={{ fontSize: "clamp(36px,5vw,58px)", fontWeight: 300, color: "#0a1628", lineHeight: 1.1 }}>
//                             Every Kind of <em style={{ color: "#0F5E6A" }}>Journey</em>
//                         </h2>
//                         <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: "rgba(26,26,46,0.55)", marginTop: 14, maxWidth: 500, margin: "14px auto 0" }}>
//                             Six distinct travel experiences, each crafted with the same passion, expertise, and care.
//                         </p>
//                     </div>

//                     {/* Cards */}
//                     <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
//                         {SERVICES.map((svc, i) => (
//                             <div key={svc.id}
//                                 className={`svc-card reveal ${vis ? "vis" : ""}`}
//                                 style={{
//                                     background: "#fff", borderRadius: 20,
//                                     border: `1px solid rgba(15,94,106,0.1)`,
//                                     overflow: "hidden", cursor: "pointer",
//                                     transitionDelay: `${i * 0.07}s`,
//                                 }}
//                                 onClick={() => setActive(active === svc.id ? null : svc.id)}>
//                                 {/* Image */}
//                                 <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
//                                     <img src={svc.img} alt={svc.label} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s ease", transform: active === svc.id ? "scale(1.06)" : "scale(1)" }} />
//                                     <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, rgba(10,22,40,0.55) 0%, transparent 60%)` }} />
//                                     {/* Tag */}
//                                     <div style={{ position: "absolute", top: 14, left: 14, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", borderRadius: 20, padding: "4px 12px", fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: svc.color }}>{svc.tagline}</div>
//                                 </div>

//                                 {/* Body */}
//                                 <div style={{ padding: "24px 24px 20px" }}>
//                                     <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
//                                         {/* Icon */}
//                                         <div className="svc-icon-wrap" style={{ width: 52, height: 52, borderRadius: 14, background: svc.bgAccent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background .3s ease" }}>
//                                             <span style={{ color: svc.color }}>{svc.icon}</span>
//                                         </div>
//                                         <div>
//                                             <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, fontWeight: 700, color: "#0a1628", marginBottom: 4, lineHeight: 1.2 }}>{svc.label}</h3>
//                                             <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "rgba(26,26,46,0.55)", lineHeight: 1.65 }}>{svc.desc}</p>
//                                         </div>
//                                     </div>

//                                     {/* Expanded highlights */}
//                                     {active === svc.id && (
//                                         <div className="anim-fade-up" style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid rgba(15,94,106,0.08)` }}>
//                                             <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9963A", marginBottom: 10 }}>Popular Trips</div>
//                                             <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
//                                                 {svc.highlights.map(h => (
//                                                     <div key={h} style={{ display: "flex", alignItems: "center", gap: 10 }}>
//                                                         <div style={{ width: 6, height: 6, borderRadius: "50%", background: svc.color, flexShrink: 0 }} />
//                                                         <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "rgba(26,26,46,0.7)" }}>{h}</span>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     )}

//                                     {/* Footer row */}
//                                     <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 18, paddingTop: 16, borderTop: `1px solid rgba(15,94,106,0.07)` }}>
//                                         <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 600, color: svc.color, letterSpacing: "0.04em" }}>
//                                             {active === svc.id ? "Less Info" : "View Packages"}
//                                         </span>
//                                         <span className="svc-arrow" style={{ fontSize: 18, color: "rgba(26,26,46,0.3)", fontWeight: 300 }}>→</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//             <section ref={ref} style={{ background: "#fff", borderTop: "1px solid rgba(15,94,106,0.08)", borderBottom: "1px solid rgba(15,94,106,0.08)", padding: "32px 8%" }}>
//                 <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
//                     {STATS.map((s, i) => (
//                         <div key={s.label} className={`stat-tile reveal ${vis ? "vis" : ""}`}
//                             style={{ textAlign: "center", padding: "16px 24px", borderRight: i < 3 ? "1px solid rgba(15,94,106,0.08)" : "none", transitionDelay: `${i * 0.08}s` }}>
//                             <div className="font-display" style={{ fontSize: 42, fontWeight: 600, color: "#0F5E6A", lineHeight: 1 }}>{s.value}</div>
//                             <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(26,26,46,0.45)", marginTop: 6 }}>{s.label}</div>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//             <section ref={ref} style={{ background: "#fff", padding: "90px 8%" }}>
//                 <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
//                         {/* Left text */}
//                         <div className={`rev-l ${vis ? "vis" : ""}`}>
//                             <Tag>Most Popular</Tag>
//                             <h2 className="font-display" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 300, color: "#0a1628", lineHeight: 1.1, marginBottom: 18 }}>
//                                 Pilgrimage Tours<br /><em style={{ color: "#0F5E6A" }}>Across Sacred India</em>
//                             </h2>
//                             <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: "rgba(26,26,46,0.58)", lineHeight: 1.85, marginBottom: 28 }}>
//                                 Bodh Gaya — our home — is one of the most sacred Buddhist sites on Earth. As local experts, we offer unmatched pilgrimage experiences from here to every major holy site across India, with deep cultural knowledge and compassionate guidance.
//                             </p>
//                             {/* Feature list */}
//                             {["Expert religious guides with deep scriptural knowledge", "Private AC vehicles & premium accommodation", "24/7 support & emergency assistance", "All permits, puja arrangements handled", "Customisable departures for groups & families"].map((f, i) => (
//                                 <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
//                                     <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(15,94,106,0.1)", border: "1px solid rgba(15,94,106,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
//                                         <span style={{ color: "#0F5E6A", fontSize: 11, fontWeight: 700 }}>✓</span>
//                                     </div>
//                                     <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "rgba(26,26,46,0.65)", lineHeight: 1.6 }}>{f}</span>
//                                 </div>
//                             ))}
//                             <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
//                                 <button className="btn-sweep" style={{ background: "linear-gradient(135deg,#0F5E6A,#1a8a9a)", border: "none", borderRadius: 6, padding: "12px 28px", fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", cursor: "pointer", boxShadow: "0 6px 20px rgba(15,94,106,0.25)", transition: "transform .2s" }}
//                                     onMouseEnter={e => e.currentTarget.style.transform = "translateY(-1px)"}
//                                     onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
//                                     View Pilgrimage Packages
//                                 </button>
//                                 <button style={{ background: "transparent", border: "1px solid rgba(201,150,58,0.4)", borderRadius: 6, padding: "12px 28px", fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C9963A", cursor: "pointer", transition: "all .2s" }}
//                                     onMouseEnter={e => { e.currentTarget.style.background = "#C9963A"; e.currentTarget.style.color = "#fff"; }}
//                                     onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9963A"; }}>
//                                     📞 Call Now
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Right — image collage */}
//                         <div className={`rev-r ${vis ? "vis" : ""}`} style={{ position: "relative", height: 500 }}>
//                             <img src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=700&q=80" alt=""
//                                 style={{ position: "absolute", top: 0, right: 0, width: "72%", height: "68%", objectFit: "cover", borderRadius: 20, boxShadow: "0 20px 50px rgba(0,0,0,0.12)" }} />
//                             <img src="https://images.unsplash.com/photo-1575649993993-4b62b966f77e?w=500&q=80" alt=""
//                                 style={{ position: "absolute", bottom: 0, left: 0, width: "58%", height: "56%", objectFit: "cover", borderRadius: 20, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }} />
//                             {/* Floating badge */}
//                             <div className="anim-float" style={{ position: "absolute", bottom: 100, right: "-8%", background: "linear-gradient(135deg,#0F5E6A,#1a8a9a)", borderRadius: 16, padding: "16px 20px", boxShadow: "0 16px 40px rgba(15,94,106,0.3)" }}>
//                                 <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>Annual Travelers</div>
//                                 <div className="font-display" style={{ fontSize: 30, fontWeight: 600, color: "#fff", lineHeight: 1 }}>5,000+</div>
//                                 <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "#E8B455" }}>on pilgrimage tours</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section ref={ref} style={{ background: "linear-gradient(135deg,#f0f9fa 0%,#faf8f4 60%,#fef9f0 100%)", padding: "90px 8%" }}>
//                 <div style={{ maxWidth: 1100, margin: "0 auto" }}>
//                     <div className={`reveal ${vis ? "vis" : ""}`} style={{ textAlign: "center", marginBottom: 60 }}>
//                         <Tag>Simple Process</Tag>
//                         <h2 className="font-display" style={{ fontSize: "clamp(34px,4.5vw,56px)", fontWeight: 300, color: "#0a1628", lineHeight: 1.1 }}>
//                             How It <em style={{ color: "#C9963A" }}>Works</em>
//                         </h2>
//                         <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: "rgba(26,26,46,0.5)", marginTop: 12 }}>
//                             From first conversation to final destination — we keep it simple.
//                         </p>
//                     </div>

//                     <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, position: "relative" }}>
//                         {/* Connector line */}
//                         <div style={{ position: "absolute", top: 40, left: "12%", right: "12%", height: 1, background: "linear-gradient(90deg,#C9963A,#0F5E6A,#C9963A)", opacity: 0.2, zIndex: 0 }} />

//                         {PROCESS.map((p, i) => (
//                             <div key={p.step} className={`process-card reveal ${vis ? "vis" : ""}`}
//                                 style={{ background: "#fff", borderRadius: 18, padding: "32px 22px", border: "1px solid rgba(15,94,106,0.08)", textAlign: "center", position: "relative", zIndex: 1, transitionDelay: `${i * 0.1}s` }}>
//                                 {/* Step circle */}
//                                 <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,#0F5E6A,#1a8a9a)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", boxShadow: "0 8px 24px rgba(15,94,106,0.25)" }}>
//                                     <span className="font-display" style={{ fontSize: 20, fontWeight: 600, color: "#fff" }}>{p.step}</span>
//                                 </div>
//                                 <h4 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, fontWeight: 700, color: "#0a1628", marginBottom: 10, lineHeight: 1.3 }}>{p.title}</h4>
//                                 <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "rgba(26,26,46,0.55)", lineHeight: 1.7 }}>{p.desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//             <section ref={ref} style={{ background: "#0a1628", padding: "80px 8%", position: "relative", overflow: "hidden" }}>
//                 {/* BG decoration */}
//                 <div style={{ position: "absolute", right: -80, top: -80, width: 320, height: 320, borderRadius: "50%", border: "1px solid rgba(201,150,58,0.08)", pointerEvents: "none" }} />
//                 <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//                     <div className={`reveal ${vis ? "vis" : ""}`} style={{ textAlign: "center", marginBottom: 52 }}>
//                         <Tag>Testimonials</Tag>
//                         <h2 className="font-display" style={{ fontSize: "clamp(32px,4.5vw,52px)", fontWeight: 300, color: "#fff" }}>
//                             Voices of <em style={{ color: "#C9963A" }}>Happy Travelers</em>
//                         </h2>
//                     </div>
//                     <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
//                         {testimonials.map((t, i) => (
//                             <div key={t.name} className={`reveal ${vis ? "vis" : ""}`}
//                                 style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(201,150,58,0.15)", borderRadius: 18, padding: "30px 26px", transitionDelay: `${i * 0.1}s`, position: "relative" }}>
//                                 <div className="font-display" style={{ fontSize: 72, lineHeight: 0.6, color: "rgba(201,150,58,0.12)", position: "absolute", top: 20, left: 22, userSelect: "none" }}>"</div>
//                                 <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
//                                     {Array(t.stars).fill(0).map((_, j) => <span key={j} style={{ color: "#C9963A", fontSize: 14 }}>★</span>)}
//                                 </div>
//                                 <p className="font-display" style={{ fontSize: 17, fontWeight: 300, color: "rgba(255,255,255,0.82)", lineHeight: 1.65, fontStyle: "italic", marginBottom: 22 }}>"{t.text}"</p>
//                                 <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                                     <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#0F5E6A,#C9963A)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 700, color: "#fff" }}>
//                                         {t.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
//                                     </div>
//                                     <div>
//                                         <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 600, color: "#fff" }}>{t.name}</div>
//                                         <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#C9963A" }}>{t.loc}</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* export default function ServicesPage() {
//   return (
//             <>
//                 <style>{GLOBAL_CSS}</style>
//                 <Navbar />
//                 <main style={{ paddingTop: 68 }}>
//                     <HeroBanner />
//                     <StatsStrip />
//                     <ServicesGrid />
//                     <FeaturedService />
//                     <HowItWorks />
//                     <TestimonialStrip />
//                     <ContactCTA />
//                 </main>
//                 <Footer />
//             </>
//             );
// }
//         </div>
//     )
// } */}


//         </div>
//     )
// }

// export default Services



import React, { useState, useEffect, useRef } from 'react';

const SERVICES = [
    {
        id: "pilgrimage",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <circle cx="12" cy="8" r="4" /><path d="M12 12v10M8 22h8M6 16c-2 0-3-1-3-2s1-2 3-2h12c2 0 3 1 3 2s-1 2-3 2" />
            </svg>
        ),
        label: "Pilgrimage Yatras",
        tagline: "Sacred Journeys",
        desc: "Experience the divine with our meticulously planned pilgrimage tours to Bodh Gaya, Varanasi, Rishikesh, Tirupati, and all major Char Dham routes.",
        highlights: ["Bodh Gaya Buddhist Circuit", "Char Dham Yatra", "Varanasi Spiritual Tour", "Jyotirlinga Darshan", "Shirdi & Ajmer"],
        img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=700&q=80",
        color: "#0F5E6A",
        bgAccent: "#e8f5f7",
        textColor: "text-teal-700",
        bgColor: "bg-teal-50",
    },
    {
        id: "adventure",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M3 17l4-8 4 4 3-6 4 10" /><path d="M2 20h20" />
            </svg>
        ),
        label: "Adventure Tours",
        tagline: "Thrill Awaits",
        desc: "Push your limits with our curated adventure packages — trekking through the Himalayas, white-water rafting in Rishikesh, and camping under stars.",
        highlights: ["Leh Ladakh Expedition", "Spiti Valley Trek", "Kedarkantha Summit", "River Rafting Rishikesh", "Chopta Chandrashila"],
        img: "https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?w=700&q=80",
        color: "#2d7a3a",
        bgAccent: "#eaf5ec",
        textColor: "text-green-700",
        bgColor: "bg-green-50",
    },
    {
        id: "heritage",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M3 21h18M5 21V7l7-4 7 4v14" /><path d="M9 21v-6h6v6" />
            </svg>
        ),
        label: "Heritage & Culture",
        tagline: "Living History",
        desc: "Walk through centuries of living history across Rajasthan's royal palaces, Mughal monuments, and the timeless cultural heartbeat of incredible India.",
        highlights: ["Golden Triangle Tour", "Rajasthan Royal Circuit", "Hampi & Mysore Heritage", "Khajuraho & Orchha", "Old Delhi Walk"],
        img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=700&q=80",
        color: "#8B4513",
        bgAccent: "#faf0e6",
        textColor: "text-amber-800",
        bgColor: "bg-amber-50",
    },
    {
        id: "honeymoon",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
        label: "Honeymoon Packages",
        tagline: "Romance Redefined",
        desc: "Begin your forever with us — from floating cottages on Kerala's backwaters to overwater villas in the Maldives, every detail is crafted for romance.",
        highlights: ["Kerala Houseboat Special", "Maldives Overwater Villa", "Andaman Couple Retreat", "Manali Snow Honeymoon", "Coorg Plantation Stay"],
        img: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=700&q=80",
        color: "#9b2335",
        bgAccent: "#fdf0f2",
        textColor: "text-rose-700",
        bgColor: "bg-rose-50",
    },
    {
        id: "family",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        label: "Family Holidays",
        tagline: "Memories Together",
        desc: "Create lifelong family memories with our kid-friendly, comfort-focused itineraries designed to delight every generation from grandparents to toddlers.",
        highlights: ["South India Family Circuit", "Jim Corbett Wildlife", "Goa Beach Family Fun", "Shimla Manali Snowplay", "Sikkim Family Escape"],
        img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&q=80",
        color: "#C9963A",
        bgAccent: "#fef9f0",
        textColor: "text-amber-600",
        bgColor: "bg-amber-50",
    },
    {
        id: "corporate",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
            </svg>
        ),
        label: "Corporate Travel",
        tagline: "Business + Leisure",
        desc: "Seamless corporate travel management — MICE events, team offsites, incentive trips, and executive travel, all handled with precision and discretion.",
        highlights: ["MICE Event Planning", "Team Offsite Packages", "Incentive Tours", "Airport Transfers", "Conference Travel"],
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
        color: "#2c3e6b",
        bgAccent: "#f0f2f9",
        textColor: "text-blue-800",
        bgColor: "bg-blue-50",
    },
];

const PROCESS = [
    { step: "01", title: "Share Your Vision", desc: "Tell us where you want to go, your dates, budget, and travel style. We listen — every detail matters." },
    { step: "02", title: "Custom Itinerary", desc: "Our experts craft a bespoke itinerary within 24 hours, tailored to your exact preferences and requirements." },
    { step: "03", title: "Confirm & Relax", desc: "Review, tweak, and confirm your plan. We handle all bookings, permits, and logistics from start to finish." },
    { step: "04", title: "Journey Begins", desc: "Travel with confidence knowing our 24/7 support team is always just a call away throughout your trip." },
];

const STATS = [
    { value: "15,000+", label: "Happy Travelers" },
    { value: "200+", label: "Destinations" },
    { value: "50+", label: "Tour Packages" },
    { value: "12+", label: "Years Experience" },
];

const TESTIMONIALS = [
    { name: "Amit & Priya Sharma", loc: "Mumbai", text: "Atithi Travel made our Char Dham Yatra completely stress-free. Their local knowledge and care was exceptional.", stars: 5 },
    { name: "Rajesh Gupta", loc: "Delhi", text: "The Ladakh adventure package was beyond our expectations. Perfectly organised, superb guides, lifetime memories.", stars: 5 },
    { name: "Sunita & Family", loc: "Ahmedabad", text: "Our South India family trip was flawlessly executed. The kids loved it and we didn't worry about a single thing!", stars: 5 },
];

function useReveal(threshold = 0.12) {
    const ref = useRef(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setVis(true); obs.disconnect(); }
        }, { threshold });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, vis];
}

function Tag({ children }) {
    return (
        <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-0.5" style={{ background: "linear-gradient(90deg,#C9963A,#E8B455)" }} />
            <span className="text-xs font-bold tracking-widest uppercase text-amber-600">{children}</span>
            <div className="w-7 h-0.5" style={{ background: "linear-gradient(90deg,#E8B455,#C9963A)" }} />
        </div>
    );
}

const Services = () => {
    const [active, setActive] = useState(null);
    const [svcRef, svcVis] = useReveal();
    const [statsRef, statsVis] = useReveal();
    const [featRef, featVis] = useReveal();
    const [howRef, howVis] = useReveal();
    const [testiRef, testiVis] = useReveal();

    return (
        <div className="font-sans overflow-x-hidden">

            {/* ── SERVICES GRID ── */}
            <section id="services" ref={svcRef} className="bg-stone-50 py-12 px-4 md:px-12 lg:px-20"
                style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(15,94,106,0.06) 1px, transparent 0)", backgroundSize: "28px 28px" }}>
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className={`text-center mb-12 transition-all duration-700 ${svcVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <div className="w-7 h-0.5 bg-amber-500" />
                            <span className="text-xs font-bold tracking-widest uppercase text-amber-600">What We Offer</span>
                            <div className="w-7 h-0.5 bg-amber-500" />
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-tight">
                            Every Kind of <em className="text-teal-700">Journey</em>
                        </h2>
                        <p className="text-slate-500 text-sm md:text-base mt-4 max-w-md mx-auto leading-relaxed">
                            Six distinct travel experiences, each crafted with the same passion, expertise, and care.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {SERVICES.map((svc, i) => (
                            <div
                                key={svc.id}
                                onClick={() => setActive(active === svc.id ? null : svc.id)}
                                className={`bg-white rounded-2xl border border-teal-100 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-amber-400 ${svcVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                                style={{ transitionDelay: `${i * 70}ms` }}
                            >
                                {/* Image */}
                                <div className="relative h-44 overflow-hidden">
                                    <img
                                        src={svc.img}
                                        alt={svc.label}
                                        className="w-full h-full object-cover transition-transform duration-500"
                                        style={{ transform: active === svc.id ? "scale(1.06)" : "scale(1)" }}
                                        onError={e => { e.target.src = `https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700&q=80`; }}
                                    />
                                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,22,40,0.55), transparent 60%)" }} />
                                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase" style={{ color: svc.color }}>
                                        {svc.tagline}
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-5">
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300" style={{ background: svc.bgAccent, color: svc.color }}>
                                            {svc.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-base leading-tight mb-1">{svc.label}</h3>
                                            <p className="text-slate-500 text-xs leading-relaxed">{svc.desc}</p>
                                        </div>
                                    </div>

                                    {/* Expanded highlights */}
                                    {active === svc.id && (
                                        <div className="mt-4 pt-4 border-t border-teal-50 animate-pulse-once">
                                            <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-2">Popular Trips</p>
                                            <div className="flex flex-col gap-2">
                                                {svc.highlights.map(h => (
                                                    <div key={h} className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: svc.color }} />
                                                        <span className="text-slate-600 text-xs">{h}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Footer */}
                                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-50">
                                        <span className="text-xs font-semibold" style={{ color: svc.color }}>
                                            {active === svc.id ? "Less Info" : "View Packages"}
                                        </span>
                                        <span className="text-slate-300 text-lg transition-transform duration-300" style={{ transform: active === svc.id ? "translateX(4px)" : "" }}>→</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── STATS STRIP ── */}
            <section ref={statsRef} className="bg-white border-y border-teal-50 py-8 px-4 md:px-12">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0">
                    {STATS.map((s, i) => (
                        <div
                            key={s.label}
                            className={`text-center py-4 px-4 transition-all duration-500 hover:scale-105 ${statsVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${i < 3 ? "border-r border-teal-50" : ""}`}
                            style={{ transitionDelay: `${i * 80}ms` }}
                        >
                            <div className="font-serif text-3xl md:text-4xl font-semibold text-teal-700 leading-none">{s.value}</div>
                            <div className="text-xs font-semibold tracking-widest uppercase text-slate-400 mt-2">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── FEATURED — PILGRIMAGE ── */}
            <section ref={featRef} className="bg-white py-16 md:py-24 px-4 md:px-12 lg:px-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left text */}
                        <div className={`transition-all duration-700 ${featVis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                            <Tag>Most Popular</Tag>
                            <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-5">
                                Pilgrimage Tours<br /><em className="text-teal-700">Across Sacred India</em>
                            </h2>
                            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-7">
                                Bodh Gaya — our home — is one of the most sacred Buddhist sites on Earth. As local experts, we offer unmatched pilgrimage experiences from here to every major holy site across India, with deep cultural knowledge and compassionate guidance.
                            </p>

                            {["Expert religious guides with deep scriptural knowledge", "Private AC vehicles & premium accommodation", "24/7 support & emergency assistance", "All permits, puja arrangements handled", "Customisable departures for groups & families"].map((f, i) => (
                                <div key={i} className="flex gap-3 items-start mb-3">
                                    <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-teal-700 text-xs font-bold">✓</span>
                                    </div>
                                    <span className="text-slate-600 text-sm leading-relaxed">{f}</span>
                                </div>
                            ))}

                            <div className="flex flex-wrap gap-3 mt-8">
                                <button className="bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-lg shadow-lg shadow-teal-200 transition-all duration-200 hover:-translate-y-0.5">
                                    View Pilgrimage Packages
                                </button>
                                <button className="border border-amber-400 text-amber-600 hover:bg-amber-500 hover:text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-lg transition-all duration-200">
                                    📞 Call Now
                                </button>
                            </div>
                        </div>

                        {/* Right image collage */}
                        <div className={`relative h-80 md:h-[460px] transition-all duration-700 ${featVis ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                            <img
                                src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=700&q=80"
                                alt="Varanasi"
                                className="absolute top-0 right-0 w-3/4 h-2/3 object-cover rounded-2xl shadow-xl"
                                onError={e => { e.target.src = "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700&q=80"; }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1575649993993-4b62b966f77e?w=500&q=80"
                                alt="Rishikesh"
                                className="absolute bottom-0 left-0 w-3/5 h-1/2 object-cover rounded-2xl shadow-xl"
                                onError={e => { e.target.src = "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700&q=80"; }}
                            />
                            {/* Floating badge */}
                            <div className="absolute bottom-16 -right-2 md:right-[-8%] bg-teal-700 rounded-2xl p-4 shadow-2xl shadow-teal-200 animate-bounce-slow">
                                <div className="text-white/60 text-xs font-bold tracking-widest uppercase mb-1">Annual Travelers</div>
                                <div className="font-serif text-3xl font-semibold text-white leading-none">5,000+</div>
                                <div className="text-amber-400 text-xs mt-1">on pilgrimage tours</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOW IT WORKS ── */}
            <section ref={howRef} className="py-16 md:py-24 px-4 md:px-12 lg:px-20" style={{ background: "linear-gradient(135deg,#f0f9fa 0%,#faf8f4 60%,#fef9f0 100%)" }}>
                <div className="max-w-5xl mx-auto">
                    <div className={`text-center mb-14 transition-all duration-700 ${howVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <Tag>Simple Process</Tag>
                        <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900 leading-tight">
                            How It <em className="text-amber-600">Works</em>
                        </h2>
                        <p className="text-slate-400 text-sm mt-3">From first conversation to final destination — we keep it simple.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
                        {/* Connector line — desktop only */}
                        <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px opacity-20 z-0" style={{ background: "linear-gradient(90deg,#C9963A,#0F5E6A,#C9963A)" }} />

                        {PROCESS.map((p, i) => (
                            <div
                                key={p.step}
                                className={`bg-white rounded-2xl p-6 border border-teal-50 text-center relative z-10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${howVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-teal-200">
                                    <span className="font-serif text-xl font-semibold text-white">{p.step}</span>
                                </div>
                                <h4 className="font-bold text-slate-900 text-sm mb-2 leading-snug">{p.title}</h4>
                                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section ref={testiRef} className="py-16 md:py-24 px-4 md:px-12 lg:px-20 relative overflow-hidden" style={{ background: "#0a1628" }}>
                <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-amber-800/10 pointer-events-none" />

                <div className="max-w-6xl mx-auto">
                    <div className={`text-center mb-12 transition-all duration-700 ${testiVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <div className="w-7 h-0.5 bg-amber-500" />
                            <span className="text-xs font-bold tracking-widest uppercase text-amber-500">Testimonials</span>
                            <div className="w-7 h-0.5 bg-amber-500" />
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
                            Voices of <em className="text-amber-500">Happy Travelers</em>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {TESTIMONIALS.map((t, i) => (
                            <div
                                key={t.name}
                                className={`relative rounded-2xl p-6 transition-all duration-500 ${testiVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(201,150,58,0.15)", transitionDelay: `${i * 100}ms` }}
                            >
                                <div className="font-serif text-7xl leading-none text-amber-800/20 absolute top-4 left-5 select-none">"</div>
                                <div className="flex gap-0.5 mb-3">
                                    {Array(t.stars).fill(0).map((_, j) => <span key={j} className="text-amber-500 text-sm">★</span>)}
                                </div>
                                <p className="font-serif text-base font-light text-white/80 leading-relaxed italic mb-5">"{t.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ background: "linear-gradient(135deg,#0F5E6A,#C9963A)" }}>
                                        {t.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-sm">{t.name}</div>
                                        <div className="text-amber-500 text-xs">{t.loc}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Services;