// import { useState, useEffect, useRef } from "react";

// /* ─── Global Styles ─────────────────────────────────────────────────────── */
// const GLOBAL_CSS = `
//   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&family=Lato:wght@300;400;700&display=swap');

//   .about-root *, .about-root *::before, .about-root *::after {
//     box-sizing: border-box; margin: 0; padding: 0;
//   }
//   .about-root {
//     font-family: 'Lato', sans-serif;
//     background: #f9f6f1;
//     color: #1c1c1c;
//     overflow-x: hidden;
//   }

//   /* ── Typography ─────────────────────────────────────── */
//   .about-root .disp { font-family: 'Playfair Display', serif; }

//   /* ── Keyframes ──────────────────────────────────────── */
//   @keyframes at-fadeUp   { from{opacity:0;transform:translateY(48px)} to{opacity:1;transform:translateY(0)} }
//   @keyframes at-fadeIn   { from{opacity:0} to{opacity:1} }
//   @keyframes at-slideR   { from{opacity:0;transform:translateX(-56px)} to{opacity:1;transform:translateX(0)} }
//   @keyframes at-slideL   { from{opacity:0;transform:translateX(56px)} to{opacity:1;transform:translateX(0)} }
//   @keyframes at-scaleIn  { from{opacity:0;transform:scale(0.88)} to{opacity:1;transform:scale(1)} }
//   @keyframes at-float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
//   @keyframes at-lineGrow { from{width:0} to{width:100%} }
//   @keyframes at-shimmer  { 0%{background-position:-200% center} 100%{background-position:200% center} }
//   @keyframes at-kenBurns { 0%{transform:scale(1.0) translate(0,0)} 100%{transform:scale(1.08) translate(-1%,0)} }
//   @keyframes at-tickerL  { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
//   @keyframes at-barGrow  { from{width:0} to{width:var(--bar-w)} }
//   @keyframes at-numCount { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
//   @keyframes at-borderAnim { 0%,100%{border-color:rgba(193,142,50,0.4)} 50%{border-color:rgba(193,142,50,1)} }
//   @keyframes at-glowPulse { 0%,100%{box-shadow:0 0 0 0 rgba(15,94,106,0)} 50%{box-shadow:0 0 0 10px rgba(15,94,106,0.08)} }
//   @keyframes at-spotReveal { from{clip-path:inset(0 100% 0 0)} to{clip-path:inset(0 0% 0 0)} }
//   @keyframes at-cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }

//   /* ── Scroll Reveal ─────────────────────────────────── */
//   .at-reveal      { opacity:0; transform:translateY(48px); transition:opacity .9s cubic-bezier(.22,1,.36,1),transform .9s cubic-bezier(.22,1,.36,1); }
//   .at-reveal.vis  { opacity:1; transform:translateY(0); }
//   .at-revL        { opacity:0; transform:translateX(-56px); transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1); }
//   .at-revL.vis    { opacity:1; transform:translateX(0); }
//   .at-revR        { opacity:0; transform:translateX(56px); transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1); }
//   .at-revR.vis    { opacity:1; transform:translateX(0); }
//   .at-revScale    { opacity:0; transform:scale(0.9); transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1); }
//   .at-revScale.vis{ opacity:1; transform:scale(1); }

//   /* ── Gold shimmer text ──────────────────────────────── */
//   .gold-shimmer-text {
//     background: linear-gradient(90deg,#8B6914,#C18E32,#E8B455,#f5d080,#E8B455,#C18E32,#8B6914);
//     background-size: 300% auto;
//     -webkit-background-clip: text; background-clip: text;
//     -webkit-text-fill-color: transparent;
//     animation: at-shimmer 4s linear infinite;
//   }

//   /* ── Typewriter cursor ──────────────────────────────── */
//   .cursor-blink { animation: at-cursorBlink 1.1s step-end infinite; }

//   /* ── Film strip effect ──────────────────────────────── */
//   .film-strip {
//     background-image:
//       repeating-linear-gradient(
//         90deg,
//         transparent 0px, transparent 18px,
//         rgba(0,0,0,0.08) 18px, rgba(0,0,0,0.08) 22px
//       );
//   }

//   /* ── Timeline vertical line ─────────────────────────── */
//   .at-timeline-line {
//     position: absolute; left: 50%; top: 0; bottom: 0;
//     width: 1px;
//     background: linear-gradient(to bottom, transparent 0%, rgba(193,142,50,0.4) 10%, rgba(193,142,50,0.4) 90%, transparent 100%);
//     transform: translateX(-50%);
//   }

//   /* ── Team card ──────────────────────────────────────── */
//   .at-team-card { transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease; }
//   .at-team-card:hover { transform: translateY(-10px); box-shadow: 0 28px 56px rgba(0,0,0,0.12); }
//   .at-team-card:hover .at-team-img { transform: scale(1.06); }
//   .at-team-img { transition: transform .5s cubic-bezier(.22,1,.36,1); }

//   /* ── Value card hover ───────────────────────────────── */
//   .at-val-card { transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease; }
//   .at-val-card:hover { transform: translateY(-6px); box-shadow: 0 18px 42px rgba(15,94,106,0.10); border-color: rgba(193,142,50,0.5) !important; }

//   /* ── Dot decorative pattern ─────────────────────────── */
//   .dot-pattern {
//     background-image: radial-gradient(circle, rgba(15,94,106,0.07) 1px, transparent 1px);
//     background-size: 24px 24px;
//   }

//   /* ── Ticker ──────────────────────────────────────────── */
//   .at-ticker { animation: at-tickerL 28s linear infinite; }

//   /* ── Stat bar ─────────────────────────────────────────── */
//   .at-stat-bar { animation: at-barGrow 1.4s cubic-bezier(.22,1,.36,1) both; }

//   /* ── Section divider wave ─────────────────────────────── */
//   .wave-divider { display:block; width:100%; overflow:hidden; line-height:0; }
// `;

// /* ─── Constants ──────────────────────────────────────────────────────────── */
// const TEAL = "#0F5E6A";
// const GOLD = "#C18E32";
// const GOLD_L = "#E8B455";
// const CREAM = "#f9f6f1";
// const DARK = "#0e1a22";
// const INK = "#1c1c1c";

// /* ─── Hook: Scroll Reveal ────────────────────────────────────────────────── */
// function useReveal(threshold = 0.13) {
//     const ref = useRef(null);
//     const [vis, setVis] = useState(false);
//     useEffect(() => {
//         const obs = new IntersectionObserver(
//             ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
//             { threshold }
//         );
//         if (ref.current) obs.observe(ref.current);
//         return () => obs.disconnect();
//     }, []);
//     return [ref, vis];
// }

// /* ─── Hook: Counter ──────────────────────────────────────────────────────── */
// function useCounter(target, duration = 1800, start = false) {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         if (!start) return;
//         let startTime = null;
//         const num = parseInt(target.replace(/\D/g, ""));
//         const step = (ts) => {
//             if (!startTime) startTime = ts;
//             const progress = Math.min((ts - startTime) / duration, 1);
//             setCount(Math.floor(progress * num));
//             if (progress < 1) requestAnimationFrame(step);
//         };
//         requestAnimationFrame(step);
//     }, [start]);
//     return count;
// }

// /* ─── Section Tag ────────────────────────────────────────────────────────── */
// function SectionTag({ children, light = false }) {
//     return (
//         <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
//             <div style={{ width: 32, height: 1.5, background: `linear-gradient(90deg,${GOLD},${GOLD_L})` }} />
//             <span style={{ fontFamily: "'Lato',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: light ? GOLD_L : GOLD }}>{children}</span>
//             <div style={{ width: 32, height: 1.5, background: `linear-gradient(90deg,${GOLD_L},${GOLD})` }} />
//         </div>
//     );
// }

// /* ─── 1. CINEMATIC HERO ──────────────────────────────────────────────────── */
// // function CinematicHero() {
// //     const [loaded, setLoaded] = useState(false);
// //     const [typed, setTyped] = useState("");
// //     const phrase = "Discover. Explore. Journey.";

// //     useEffect(() => {
// //         setTimeout(() => setLoaded(true), 200);
// //         let i = 0;
// //         const t = setInterval(() => {
// //             setTyped(phrase.slice(0, i + 1));
// //             i++;
// //             if (i >= phrase.length) clearInterval(t);
// //         }, 60);
// //         return () => clearInterval(t);
// //     }, []);

// //     return (
// //         <section style={{ position: "relative", height: "100vh", minHeight: 680, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
// //             {/* BG image — Ken Burns */}
// //             <div style={{ position: "absolute", inset: 0 }}>
// //                 <img
// //                     src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1800&q=85"
// //                     alt=""
// //                     style={{ width: "100%", height: "100%", objectFit: "cover", animation: "at-kenBurns 20s ease-in-out infinite alternate" }}
// //                 />
// //                 {/* Multi-layer overlay for cinematic feel */}
// //                 <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(14,26,34,0.75) 0%, rgba(14,26,34,0.55) 50%, rgba(14,26,34,0.88) 100%)" }} />
// //                 {/* Vignette */}
// //                 <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)" }} />
// //             </div>

// //             {/* Film grain overlay */}
// //             <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')", backgroundSize: "200px 200px", pointerEvents: "none" }} />

// //             {/* Film strip top/bottom bars */}
// //             <div className="film-strip" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 22, background: "rgba(0,0,0,0.7)" }} />
// //             <div className="film-strip" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 22, background: "rgba(0,0,0,0.7)" }} />

// //             {/* Year stamp */}
// //             <div style={{ position: "absolute", top: 36, right: 48, fontFamily: "'Lato',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.35em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>Est. 2013</div>

// //             {/* Main content */}
// //             <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 2rem", maxWidth: 900 }}>
// //                 <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "all 1s ease 0.3s", marginBottom: 22 }}>
// //                     <SectionTag light>Our Story</SectionTag>
// //                 </div>

// //                 <h1
// //                     className="disp"
// //                     style={{
// //                         fontSize: "clamp(52px,8vw,110px)", fontWeight: 900, lineHeight: 0.95,
// //                         color: "#fff", letterSpacing: "-0.02em",
// //                         opacity: loaded ? 1 : 0,
// //                         transform: loaded ? "translateY(0)" : "translateY(40px)",
// //                         transition: "all 1s cubic-bezier(.22,1,.36,1) 0.5s",
// //                         marginBottom: 12,
// //                     }}
// //                 >
// //                     ATITHI
// //                 </h1>
// //                 <h2
// //                     className="disp"
// //                     style={{
// //                         fontSize: "clamp(28px,4.5vw,58px)", fontWeight: 400, fontStyle: "italic",
// //                         color: GOLD_L, letterSpacing: "0.04em",
// //                         opacity: loaded ? 1 : 0,
// //                         transform: loaded ? "translateY(0)" : "translateY(30px)",
// //                         transition: "all 1s cubic-bezier(.22,1,.36,1) 0.7s",
// //                         marginBottom: 36,
// //                     }}
// //                 >
// //                     Travel Yatra
// //                 </h2>

// //                 {/* Typewriter tagline */}
// //                 <div style={{ fontFamily: "'Lato',sans-serif", fontSize: "clamp(14px,2vw,20px)", fontWeight: 300, letterSpacing: "0.25em", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", height: 32, display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
// //                     <span>{typed}</span>
// //                     <span className="cursor-blink" style={{ display: "inline-block", width: 2, height: 20, background: GOLD_L, marginLeft: 3 }} />
// //                 </div>

// //                 {/* Scroll cue */}
// //                 <div style={{ position: "absolute", bottom: -80, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: loaded ? 1 : 0, transition: "opacity 1s 2s" }}>
// //                     <span style={{ fontFamily: "'Lato',sans-serif", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Scroll to explore</span>
// //                     <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(193,142,50,0.8), transparent)", animation: "at-float 2s ease-in-out infinite" }} />
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // }

// /* ─── 2. OPENING STATEMENT ───────────────────────────────────────────────── */
// function OpeningStatement() {
//     const [ref, vis] = useReveal(0.2);
//     return (
//         <section ref={ref} style={{ background: "#fff", padding: "50px 8% 80px", position: "relative", overflow: "hidden" }}>
//             {/* Decorative large letter */}
//             <div className="disp" style={{ position: "absolute", right: "-2%", top: "-10%", fontSize: 320, fontWeight: 900, color: "rgba(15,94,106,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>A</div>

//             <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
//                 <div className={`at-reveal ${vis ? "vis" : ""}`}>
//                     <SectionTag>Who We Are</SectionTag>
//                 </div>

//                 {/* Drop-cap opening paragraph */}
//                 <div className={`at-revL ${vis ? "vis" : ""}`} style={{ transitionDelay: "0.1s" }}>
//                     <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(20px,3.2vw,35px)", fontWeight: 400, lineHeight: 1.5, color: INK, marginBottom: 32 }}>
//                         <span style={{ float: "left", fontFamily: "'Playfair Display',serif", fontSize: "clamp(72px,10vw,120px)", fontWeight: 700, lineHeight: 0.75, paddingRight: 16, paddingTop: 8, color: TEAL }}>B</span>
//                         orn in the shadow of the Mahabodhi Temple — one of humanity's holiest sites — Atithi Travel Yatra has spent over a decade turning the ancient Indian philosophy of{" "}
//                         <em style={{ color: GOLD, fontStyle: "italic" }}>Atithi Devo Bhava</em> — "The Guest is God" — into every journey we craft.
//                     </p>
//                 </div>

//                 <div className={`at-reveal ${vis ? "vis" : ""}`} style={{ transitionDelay: "0.25s" }}>
//                     <p style={{ fontFamily: "'Lato',sans-serif", fontSize: "clamp(15px,1.6vw,18px)", fontWeight: 500, lineHeight: 1.9, color: "rgba(28,28,28,0.65)", maxWidth: 720, borderLeft: `3px solid ${GOLD}`, paddingLeft: 28 }}>
//                         We are not a travel agency. We are storytellers, cultural bridges, and memory architects. Every itinerary we design is an original screenplay — written specifically for the traveler standing before us, set against the magnificent canvas of India and beyond.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// }

// /* ─── 3. SCROLLING TICKER ────────────────────────────────────────────────── */
// function Ticker() {
//     const items = ["Bodh Gaya", "Varanasi", "Leh Ladakh", "Kerala Backwaters", "Rajasthan", "Andaman Islands", "Rishikesh", "Char Dham", "Spiti Valley", "Mysore", "Coorg", "Munnar", "Rann of Kutch", "Kaziranga", "Hampi"];
//     const doubled = [...items, ...items];
//     return (
//         <div style={{ background: DARK, padding: "14px 0", overflow: "hidden", borderTop: `1px solid rgba(193,142,50,0.15)`, borderBottom: `1px solid rgba(193,142,50,0.15)` }}>
//             <div className="at-ticker" style={{ display: "flex", gap: 0, whiteSpace: "nowrap" }}>
//                 {doubled.map((item, i) => (
//                     <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 24, padding: "0 24px" }}>
//                         <span style={{ fontFamily: "'Lato',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>{item}</span>
//                         <span style={{ color: GOLD, fontSize: 10 }}>✦</span>
//                     </span>
//                 ))}
//             </div>
//         </div>
//     );
// }

// /* ─── 4. FOUNDING STORY ──────────────────────────────────────────────────── */
// function FoundingStory() {
//     const [ref, vis] = useReveal();
//     return (
//         <section ref={ref} style={{ background: CREAM, padding: "96px 8%", position: "relative" }} className="dot-pattern">
//             <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
//                     {/* Left — image stack */}
//                     <div className={`at-revL ${vis ? "vis" : ""}`} style={{ position: "relative", height: 560 }}>
//                         {/* Main image */}
//                         <div style={{ position: "absolute", top: 0, left: 0, width: "80%", height: "72%", borderRadius: 4, overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.18)" }}>
//                             <img src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=700&q=80" alt="Bodh Gaya" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                             {/* Film grade overlay */}
//                             <div style={{ position: "absolute", inset: 0, background: "rgba(193,142,50,0.08)", mixBlendMode: "multiply" }} />
//                         </div>
//                         {/* Secondary image */}
//                         <div style={{ position: "absolute", bottom: 0, right: 0, width: "58%", height: "50%", borderRadius: 4, overflow: "hidden", boxShadow: "0 20px 48px rgba(0,0,0,0.15)", border: `3px solid #fff` }}>
//                             <img src="https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?w=500&q=80" alt="Adventure" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                         </div>
//                         {/* Year badge */}
//                         <div className="disp" style={{ position: "absolute", bottom: 80, left: -20, background: "#fff", border: `1px solid rgba(193,142,50,0.3)`, borderRadius: 4, padding: "18px 22px", boxShadow: "0 12px 36px rgba(0,0,0,0.1)", animation: "at-float 4.5s ease-in-out infinite" }}>
//                             <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase", marginBottom: 4 }}>Founded</div>
//                             <div className="disp" style={{ fontSize: 42, fontWeight: 700, color: TEAL, lineHeight: 1 }}>2013</div>
//                             <div style={{ fontSize: 11, color: "rgba(28,28,28,0.5)", fontFamily: "'Lato',sans-serif" }}>Bodh Gaya, Bihar</div>
//                         </div>
//                     </div>

//                     {/* Right — story text */}
//                     <div className={`at-revR ${vis ? "vis" : ""}`}>
//                         <SectionTag>The Beginning</SectionTag>
//                         <h2 className="disp" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: INK, lineHeight: 1.1, marginBottom: 24 }}>
//                             A Story That Began<br />
//                             <em style={{ color: TEAL, fontWeight: 400 }}>At The World's Most<br />Sacred Crossroads</em>
//                         </h2>

//                         {[
//                             { year: "2013", text: "Founded in Bodh Gaya by a team of passionate local guides with a single vehicle and an unshakeable belief — that travel, done right, changes lives." },
//                             { year: "2016", text: "Expanded to cover all of Bihar and Jharkhand pilgrimage circuits. Over 500 groups hosted. Reputation built entirely on word of mouth and repeat travelers." },
//                             { year: "2019", text: "Launched pan-India adventure and heritage packages. A dedicated team of 30+ travel experts, local specialists, and cultural interpreters joined the family." },
//                             { year: "2024", text: "15,000+ happy travelers. 200+ destinations. Recognised as one of Bihar's most trusted travel brands — still guided by the same founding spirit." },
//                         ].map((item, i) => (
//                             <div key={i} style={{ display: "flex", gap: 20, marginBottom: i < 3 ? 24 : 0, paddingBottom: i < 3 ? 24 : 0, borderBottom: i < 3 ? "1px solid rgba(15,94,106,0.08)" : "none" }}>
//                                 <div className="disp" style={{ fontSize: 14, fontWeight: 700, color: GOLD, minWidth: 36, paddingTop: 2, letterSpacing: "0.04em" }}>{item.year}</div>
//                                 <p style={{ fontFamily: "'Lato',sans-serif", fontSize: 14, fontWeight: 400, color: "rgba(28,28,28,0.62)", lineHeight: 1.75 }}>{item.text}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// /* ─── 5. NUMBERS / STATS ─────────────────────────────────────────────────── */
// function StatsSection() {
//     const [ref, vis] = useReveal(0.25);

//     const stats = [
//         { label: "Happy Travelers", raw: "15000", suffix: "+" },
//         { label: "Destinations", raw: "200", suffix: "+" },
//         { label: "Tour Packages", raw: "50", suffix: "+" },
//         { label: "Team Members", raw: "30", suffix: "+" },
//         { label: "Years of Trust", raw: "12", suffix: "+" },
//         { label: "Satisfaction Rate", raw: "98", suffix: "%" },
//     ];

//     function StatNum({ raw, suffix, start }) {
//         const count = useCounter(raw, 1800, start);
//         return (
//             <span className="disp" style={{ fontSize: "clamp(42px,5vw,68px)", fontWeight: 900, color: "#fff", lineHeight: 1, display: "block" }}>
//                 {count.toLocaleString()}{suffix}
//             </span>
//         );
//     }

//     return (
//         <section ref={ref} style={{ background: DARK, padding: "90px 8%", position: "relative", overflow: "hidden" }}>
//             {/* Large decorative text bg */}
//             <div className="disp" style={{ position: "absolute", left: "-2%", top: "50%", transform: "translateY(-50%)", fontSize: 280, fontWeight: 900, color: "rgba(255,255,255,0.02)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>12+</div>

//             <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
//                 <div className={`at-reveal ${vis ? "vis" : ""}`} style={{ textAlign: "center", marginBottom: 64 }}>
//                     <SectionTag light>By The Numbers</SectionTag>
//                     <h2 className="disp" style={{ fontSize: "clamp(34px,5vw,62px)", fontWeight: 700, color: "#fff", lineHeight: 1.05 }}>
//                         A Decade of <em style={{ color: GOLD_L }}>Extraordinary</em> Journeys
//                     </h2>
//                 </div>

//                 <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
//                     {stats.map((s, i) => (
//                         <div key={s.label}
//                             className={`at-reveal ${vis ? "vis" : ""}`}
//                             style={{
//                                 padding: "44px 36px",
//                                 borderRight: i % 3 < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
//                                 borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
//                                 transitionDelay: `${i * 0.08}s`,
//                             }}>
//                             <StatNum raw={s.raw} suffix={s.suffix} start={vis} />
//                             <div style={{ fontFamily: "'Lato',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)", marginTop: 10 }}>{s.label}</div>
//                             <div style={{ width: 36, height: 2, background: `linear-gradient(90deg,${GOLD},${GOLD_L})`, marginTop: 14 }} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// /* ─── 6. MISSION & VISION ────────────────────────────────────────────────── */
// function MissionVision() {
//     const [ref, vis] = useReveal();
//     return (
//         <section ref={ref} style={{ background: "#fff", padding: "96px 8%", position: "relative", overflow: "hidden" }}>
//             <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//                 <div className={`at-reveal ${vis ? "vis" : ""}`} style={{ textAlign: "center", marginBottom: 72 }}>
//                     <SectionTag>Purpose & Direction</SectionTag>
//                     <h2 className="disp" style={{ fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 700, color: INK, lineHeight: 1.1 }}>
//                         What Drives <em style={{ color: TEAL }}>Everything</em> We Do
//                     </h2>
//                 </div>

//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
//                     {/* Mission */}
//                     <div className={`at-revL ${vis ? "vis" : ""}`} style={{ background: CREAM, borderRadius: 4, padding: "52px 48px", position: "relative", overflow: "hidden", border: `1px solid rgba(15,94,106,0.08)`, transitionDelay: "0.1s" }}>
//                         <div className="disp" style={{ position: "absolute", right: -10, bottom: -20, fontSize: 140, fontWeight: 900, color: "rgba(15,94,106,0.05)", lineHeight: 1, userSelect: "none" }}>M</div>
//                         <div style={{ width: 52, height: 52, borderRadius: "50%", background: `linear-gradient(135deg,${TEAL},#1a8a9a)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28, boxShadow: `0 8px 24px rgba(15,94,106,0.3)` }}>
//                             <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
//                                 <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
//                             </svg>
//                         </div>
//                         <div style={{ fontFamily: "'Lato',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: GOLD, marginBottom: 12 }}>Our Mission</div>
//                         <h3 className="disp" style={{ fontSize: 30, fontWeight: 700, color: INK, marginBottom: 18, lineHeight: 1.2 }}>To Make Every Journey Transformative</h3>
//                         <p style={{ fontFamily: "'Lato',sans-serif", fontSize: 15, color: "rgba(28,28,28,0.6)", lineHeight: 1.85 }}>
//                             We exist to connect people with the soul of the places they visit — not just their surfaces. Every trip we design is an opportunity for genuine discovery: of cultures, of landscapes, of the self.
//                         </p>
//                     </div>

//                     {/* Vision */}
//                     <div className={`at-revR ${vis ? "vis" : ""}`} style={{ background: DARK, borderRadius: 4, padding: "52px 48px", position: "relative", overflow: "hidden", transitionDelay: "0.2s" }}>
//                         <div className="disp" style={{ position: "absolute", right: -10, bottom: -20, fontSize: 140, fontWeight: 900, color: "rgba(255,255,255,0.04)", lineHeight: 1, userSelect: "none" }}>V</div>
//                         <div style={{ width: 52, height: 52, borderRadius: "50%", background: `linear-gradient(135deg,${GOLD},${GOLD_L})`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28, boxShadow: `0 8px 24px rgba(193,142,50,0.4)` }}>
//                             <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
//                                 <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
//                             </svg>
//                         </div>
//                         <div style={{ fontFamily: "'Lato',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: GOLD_L, marginBottom: 12 }}>Our Vision</div>
//                         <h3 className="disp" style={{ fontSize: 30, fontWeight: 700, color: "#fff", marginBottom: 18, lineHeight: 1.2 }}>India's Most Trusted<br />Human-Centred Travel Brand</h3>
//                         <p style={{ fontFamily: "'Lato',sans-serif", fontSize: 15, color: "rgba(255,255,255,0.52)", lineHeight: 1.85 }}>
//                             To become the first name every traveler thinks of when they dream of India — known not for scale, but for the extraordinary depth of care, knowledge, and humanity we bring to every journey.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Philosophy quote */}
//                 <div className={`at-reveal ${vis ? "vis" : ""}`} style={{ marginTop: 56, textAlign: "center", transitionDelay: "0.35s" }}>
//                     <blockquote className="disp" style={{ fontSize: "clamp(22px,3vw,38px)", fontWeight: 400, fontStyle: "italic", color: TEAL, lineHeight: 1.5, maxWidth: 720, margin: "0 auto", position: "relative", padding: "0 48px" }}>
//                         <span style={{ position: "absolute", left: 0, top: -8, fontSize: 80, lineHeight: 0.8, color: `rgba(193,142,50,0.25)`, fontFamily: "serif" }}>"</span>
//                         Atithi Devo Bhava — The Guest is God
//                         <span style={{ position: "absolute", right: 0, bottom: -16, fontSize: 80, lineHeight: 0.8, color: `rgba(193,142,50,0.25)`, fontFamily: "serif" }}>"</span>
//                     </blockquote>
//                     <div style={{ fontFamily: "'Lato',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(28,28,28,0.35)", marginTop: 20 }}>— The Philosophy That Guides Us</div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// /* ─── 7. CORE VALUES ─────────────────────────────────────────────────────── */
// function CoreValues() {
//     const [ref, vis] = useReveal();
//     const values = [
//         { num: "01", icon: "✦", title: "Authenticity", desc: "We celebrate real India — not a curated postcard version. Every experience is genuine, unscripted, and rooted in the living culture of its place.", color: TEAL },
//         { num: "02", icon: "◈", title: "Mastery", desc: "12 years of honing our craft means we know the hidden temple at dawn that no guidebook mentions, the local dhabha that feeds the best meal of your trip.", color: "#8B4513" },
//         { num: "03", icon: "❖", title: "Stewardship", desc: "We travel with conscience. Responsible tourism practices, support for local communities, and treading lightly on the environments we visit.", color: "#2d7a3a" },
//         { num: "04", icon: "◇", title: "Warmth", desc: "Our relationships don't end when the trip does. Thousands of past travelers return — not just for the destinations, but for the family they found here.", color: "#9b2335" },
//         { num: "05", icon: "⬡", title: "Precision", desc: "Every departure time, every room allocation, every permit — obsessively organised. Because when you're on the road, the details are everything.", color: "#5c3d8f" },
//         { num: "06", icon: "✿", title: "Wonder", desc: "We never stop being amazed by India's infinite depth. That genuine sense of awe is contagious — and it's what we pass on to every traveler we guide.", color: GOLD },
//     ];

//     return (
//         <section ref={ref} style={{ background: CREAM, padding: "96px 8%" }} className="dot-pattern">
//             <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//                 <div className={`at-reveal ${vis ? "vis" : ""}`} style={{ textAlign: "center", marginBottom: 68 }}>
//                     <SectionTag>What We Stand For</SectionTag>
//                     <h2 className="disp" style={{ fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 700, color: INK, lineHeight: 1.1 }}>
//                         Six Values. <em style={{ color: TEAL }}>One Soul.</em>
//                     </h2>
//                 </div>

//                 <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
//                     {values.map((v, i) => (
//                         <div key={v.title}
//                             className={`at-val-card at-reveal ${vis ? "vis" : ""}`}
//                             style={{ background: "#fff", borderRadius: 4, padding: "36px 32px", border: `1px solid rgba(15,94,106,0.09)`, position: "relative", overflow: "hidden", transitionDelay: `${i * 0.07}s`, cursor: "default" }}>
//                             {/* Large num watermark */}
//                             <div className="disp" style={{ position: "absolute", right: 12, top: 8, fontSize: 72, fontWeight: 900, color: "rgba(15,94,106,0.05)", lineHeight: 1, userSelect: "none" }}>{v.num}</div>
//                             {/* Color bar top */}
//                             <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${v.color},${v.color}88)` }} />

//                             <div style={{ fontSize: 22, color: v.color, marginBottom: 18, display: "block" }}>{v.icon}</div>
//                             <h4 className="disp" style={{ fontSize: 22, fontWeight: 700, color: INK, marginBottom: 12, lineHeight: 1.2 }}>{v.title}</h4>
//                             <p style={{ fontFamily: "'Lato',sans-serif", fontSize: 13.5, color: "rgba(28,28,28,0.58)", lineHeight: 1.8 }}>{v.desc}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// /* ─── 8. TIMELINE ────────────────────────────────────────────────────────── */
// function Timeline() {
//     const [ref, vis] = useReveal();
//     const milestones = [
//         { year: "2013", title: "The First Step", body: "Founded in Bodh Gaya by three local guides with a single vehicle, an unshakeable passion, and a philosophy: the guest is god.", side: "left" },
//         { year: "2015", title: "Pilgrimage Circuit Mastered", body: "Became the go-to operator for Buddhist pilgrimage circuits, partnering with international dharma centres and spiritual organisations.", side: "right" },
//         { year: "2017", title: "Bihar & Beyond", body: "Expanded to cover Rajgir, Nalanda, Pawapuri, and Vaishali — making us the most comprehensive Bihar heritage travel brand.", side: "left" },
//         { year: "2019", title: "Adventure Division Launched", body: "Launched Himalayan and adventure packages. First winter Spiti expedition completed. 30-member team in place.", side: "right" },
//         { year: "2021", title: "Digital Transformation", body: "New website, WhatsApp booking, 24/7 support line. Survived COVID-19 with zero layoffs by pivoting to domestic travel.", side: "left" },
//         { year: "2024", title: "15,000 Stories Written", body: "15,000 travelers. 200+ destinations. A reputation built entirely on trust, care, and the extraordinary journeys we share.", side: "right" },
//     ];

//     return (
//         <section ref={ref} style={{ background: "#fff", padding: "96px 8%", position: "relative" }}>
//             <div style={{ maxWidth: 900, margin: "0 auto" }}>
//                 <div className={`at-reveal ${vis ? "vis" : ""}`} style={{ textAlign: "center", marginBottom: 80 }}>
//                     <SectionTag>Our Journey</SectionTag>
//                     <h2 className="disp" style={{ fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 700, color: INK, lineHeight: 1.1 }}>
//                         A Decade Written<br /><em style={{ color: GOLD }}>In Footsteps</em>
//                     </h2>
//                 </div>

//                 <div style={{ position: "relative" }}>
//                     <div className="at-timeline-line" />

//                     {milestones.map((m, i) => (
//                         <div key={m.year}
//                             className={`at-reveal ${vis ? "vis" : ""}`}
//                             style={{
//                                 display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0,
//                                 marginBottom: 56, transitionDelay: `${i * 0.1}s`,
//                             }}>
//                             {m.side === "left" ? (
//                                 <>
//                                     {/* Left content */}
//                                     <div style={{ paddingRight: 52, textAlign: "right" }}>
//                                         <div className="disp" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase", marginBottom: 8 }}>{m.year}</div>
//                                         <h4 className="disp" style={{ fontSize: 22, fontWeight: 700, color: INK, marginBottom: 10, lineHeight: 1.25 }}>{m.title}</h4>
//                                         <p style={{ fontFamily: "'Lato',sans-serif", fontSize: 14, color: "rgba(28,28,28,0.58)", lineHeight: 1.8 }}>{m.body}</p>
//                                     </div>
//                                     {/* Right — dot */}
//                                     <div style={{ display: "flex", alignItems: "flex-start", paddingLeft: 0, paddingTop: 28 }}>
//                                         <div style={{ width: 16, height: 16, borderRadius: "50%", background: TEAL, border: `3px solid #fff`, boxShadow: `0 0 0 3px ${TEAL}`, transform: "translateX(-8px)", flexShrink: 0 }} />
//                                     </div>
//                                 </>
//                             ) : (
//                                 <>
//                                     {/* Left — dot */}
//                                     <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-end", paddingRight: 0, paddingTop: 28 }}>
//                                         <div style={{ width: 16, height: 16, borderRadius: "50%", background: GOLD, border: `3px solid #fff`, boxShadow: `0 0 0 3px ${GOLD}`, transform: "translateX(8px)", flexShrink: 0 }} />
//                                     </div>
//                                     {/* Right content */}
//                                     <div style={{ paddingLeft: 52 }}>
//                                         <div className="disp" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase", marginBottom: 8 }}>{m.year}</div>
//                                         <h4 className="disp" style={{ fontSize: 22, fontWeight: 700, color: INK, marginBottom: 10, lineHeight: 1.25 }}>{m.title}</h4>
//                                         <p style={{ fontFamily: "'Lato',sans-serif", fontSize: 14, color: "rgba(28,28,28,0.58)", lineHeight: 1.8 }}>{m.body}</p>
//                                     </div>
//                                 </>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// /* ─── 9. TEAM ─────────────────────────────────────────────────────────────── */
// function TeamSection() {
//     const [ref, vis] = useReveal();
//     const team = [
//         { name: "Rahul Kumar Singh", role: "Founder & CEO", spec: "Pilgrimage & Cultural Expert", img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&q=80", exp: "15 yrs" },
//         { name: "Priya Verma", role: "Head of Operations", spec: "Himalayan Adventure Specialist", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", exp: "10 yrs" },
//         { name: "Arjun Mishra", role: "Lead Travel Designer", spec: "Heritage & Art Curator", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80", exp: "9 yrs" },
//         { name: "Meera Devi", role: "Guest Relations Head", spec: "Luxury & Wellness Travel", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80", exp: "8 yrs" },
//     ];

//     return (
//         <section ref={ref} style={{ background: CREAM, padding: "96px 8%" }}>
//             <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//                 <div className={`at-reveal ${vis ? "vis" : ""}`} style={{ textAlign: "center", marginBottom: 68 }}>
//                     <SectionTag>The People Behind</SectionTag>
//                     <h2 className="disp" style={{ fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 700, color: INK, lineHeight: 1.1 }}>
//                         Faces of <em style={{ color: TEAL }}>Atithi</em>
//                     </h2>
//                     <p style={{ fontFamily: "'Lato',sans-serif", fontSize: 16, color: "rgba(28,28,28,0.5)", marginTop: 14, maxWidth: 540, margin: "14px auto 0" }}>
//                         A team of obsessive travel lovers, cultural custodians, and logistics wizards — united by a deep love for India.
//                     </p>
//                 </div>

//                 <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22 }}>
//                     {team.map((m, i) => (
//                         <div key={m.name}
//                             className={`at-team-card at-reveal ${vis ? "vis" : ""}`}
//                             style={{ background: "#fff", borderRadius: 4, overflow: "hidden", border: `1px solid rgba(15,94,106,0.09)`, transitionDelay: `${i * 0.08}s` }}>
//                             <div style={{ height: 260, overflow: "hidden", position: "relative" }}>
//                                 <img src={m.img} alt={m.name} className="at-team-img" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
//                                 {/* Exp badge */}
//                                 <div style={{ position: "absolute", top: 14, right: 14, background: "rgba(14,26,34,0.85)", backdropFilter: "blur(8px)", borderRadius: 3, padding: "4px 10px", fontFamily: "'Lato',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", color: GOLD_L, textTransform: "uppercase" }}>{m.exp}</div>
//                                 {/* Overlay gradient */}
//                                 <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,26,34,0.55) 0%, transparent 50%)" }} />
//                             </div>
//                             <div style={{ padding: "22px 20px 24px" }}>
//                                 <div style={{ fontFamily: "'Lato',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, marginBottom: 6 }}>{m.role}</div>
//                                 <h4 className="disp" style={{ fontSize: 19, fontWeight: 700, color: INK, lineHeight: 1.2, marginBottom: 6 }}>{m.name}</h4>
//                                 <p style={{ fontFamily: "'Lato',sans-serif", fontSize: 12, color: "rgba(28,28,28,0.48)" }}>{m.spec}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// /* ─── 10. CINEMATIC MIDDLE BREAK ─────────────────────────────────────────── */
// function CinematicBreak() {
//     const [ref, vis] = useReveal(0.3);
//     return (
//         <section ref={ref} style={{ position: "relative", height: 420, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <div style={{ position: "absolute", inset: 0 }}>
//                 <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1600&q=85" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                 <div style={{ position: "absolute", inset: 0, background: "rgba(14,26,34,0.78)" }} />
//                 <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)" }} />
//             </div>
//             <div className={`at-reveal ${vis ? "vis" : ""}`} style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 2rem" }}>
//                 <p className="disp" style={{ fontSize: "clamp(26px,4vw,56px)", fontWeight: 400, fontStyle: "italic", color: "#fff", lineHeight: 1.4, maxWidth: 800, margin: "0 auto" }}>
//                     "We don't sell holidays.<br />
//                     <span style={{ color: GOLD_L }}>We write the chapters of lives."</span>
//                 </p>
//                 <div style={{ fontFamily: "'Lato',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginTop: 20 }}>— Rahul Kumar Singh, Founder</div>
//             </div>
//         </section>
//     );
// }

// /* ─── 11. WHY CHOOSE US ──────────────────────────────────────────────────── */
// function WhyUs() {
//     const [ref, vis] = useReveal();
//     const reasons = [
//         { title: "Born Local, Thinking Global", body: "We are from Bodh Gaya. That local DNA — the relationships, the road knowledge, the cultural fluency — runs through everything we do, for trips across all of India.", icon: "📍" },
//         { title: "Personalisation Is Our Default", body: "We don't have a brochure of set packages. We have a team of travel designers who build your trip from scratch, every single time.", icon: "✏️" },
//         { title: "24/7 On-Ground Support", body: "When you're travelling with us, you're never alone. A real human — not a chatbot — is available around the clock for anything you need.", icon: "📞" },
//         { title: "Honest, Transparent Pricing", body: "No hidden costs. No surprise charges. The price we quote is the price you pay. We'd rather earn your trust than your money.", icon: "💎" },
//     ];

//     return (
//         <section ref={ref} style={{ background: "#fff", padding: "96px 8%" }}>
//             <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
//                     <div className={`at-revL ${vis ? "vis" : ""}`}>
//                         <SectionTag>Why Atithi</SectionTag>
//                         <h2 className="disp" style={{ fontSize: "clamp(32px,4vw,54px)", fontWeight: 700, color: INK, lineHeight: 1.1, marginBottom: 20 }}>
//                             The Difference You<br /><em style={{ color: TEAL }}>Feel On Day One</em>
//                         </h2>
//                         <p style={{ fontFamily: "'Lato',sans-serif", fontSize: 15, color: "rgba(28,28,28,0.58)", lineHeight: 1.85, marginBottom: 36 }}>
//                             There are thousands of travel agencies in India. What makes Atithi Travel Yatra worth choosing isn't a list of features — it's a feeling. A feeling you get from the first phone call and that stays with you long after you return home.
//                         </p>
//                         <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
//                             <button style={{ background: `linear-gradient(135deg,${TEAL},#1a8a9a)`, border: "none", borderRadius: 3, padding: "13px 30px", fontFamily: "'Lato',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", cursor: "pointer", boxShadow: `0 6px 22px rgba(15,94,106,0.3)`, transition: "transform .2s" }}
//                                 onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
//                                 onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
//                                 Plan My Trip ✈
//                             </button>
//                             <a href="https://wa.me/919800000000" target="_blank" rel="noreferrer"
//                                 style={{ display: "inline-block", background: "#25D366", borderRadius: 3, padding: "13px 30px", fontFamily: "'Lato',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", textDecoration: "none", boxShadow: "0 6px 22px rgba(37,211,102,0.3)", transition: "transform .2s" }}
//                                 onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
//                                 onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
//                                 WhatsApp Us
//                             </a>
//                         </div>
//                     </div>

//                     <div className={`at-revR ${vis ? "vis" : ""}`} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
//                         {reasons.map((r, i) => (
//                             <div key={r.title} style={{ display: "flex", gap: 18, padding: "22px 24px", background: CREAM, borderRadius: 4, border: `1px solid rgba(15,94,106,0.08)`, transition: "all .3s ease" }}
//                                 onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = `rgba(193,142,50,0.4)`; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.07)"; }}
//                                 onMouseLeave={e => { e.currentTarget.style.background = CREAM; e.currentTarget.style.borderColor = "rgba(15,94,106,0.08)"; e.currentTarget.style.boxShadow = "none"; }}>
//                                 <div style={{ fontSize: 26, flexShrink: 0, lineHeight: 1, paddingTop: 2 }}>{r.icon}</div>
//                                 <div>
//                                     <h5 className="disp" style={{ fontSize: 18, fontWeight: 700, color: INK, marginBottom: 6, lineHeight: 1.2 }}>{r.title}</h5>
//                                     <p style={{ fontFamily: "'Lato',sans-serif", fontSize: 13, color: "rgba(28,28,28,0.56)", lineHeight: 1.75 }}>{r.body}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// /* ─── 12. CLOSING CTA ────────────────────────────────────────────────────── */
// function ClosingCTA() {
//     const [ref, vis] = useReveal(0.3);
//     return (
//         <section ref={ref} style={{ background: DARK, padding: "100px 8%", position: "relative", overflow: "hidden" }}>
//             {/* Bg decoration rings */}
//             <div style={{ position: "absolute", right: "-5%", top: "50%", transform: "translateY(-50%)", width: 480, height: 480, borderRadius: "50%", border: `1px solid rgba(193,142,50,0.07)`, pointerEvents: "none" }} />
//             <div style={{ position: "absolute", right: "0%", top: "50%", transform: "translateY(-50%)", width: 300, height: 300, borderRadius: "50%", border: `1px solid rgba(193,142,50,0.12)`, pointerEvents: "none" }} />
//             <div style={{ position: "absolute", left: "-4%", bottom: "-30%", width: 380, height: 380, borderRadius: "50%", border: `0.5px solid rgba(15,94,106,0.1)`, pointerEvents: "none" }} />

//             <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
//                 <div className={`at-reveal ${vis ? "vis" : ""}`}>
//                     <SectionTag light>Begin Your Story</SectionTag>
//                 </div>
//                 <h2 className={`disp at-reveal ${vis ? "vis" : ""}`} style={{ fontSize: "clamp(40px,6vw,82px)", fontWeight: 900, lineHeight: 0.95, color: "#fff", marginBottom: 10, transitionDelay: "0.1s" }}>
//                     Your Next Chapter
//                 </h2>
//                 <h2 className={`disp at-reveal ${vis ? "vis" : ""}`} style={{ fontSize: "clamp(40px,6vw,82px)", fontWeight: 400, fontStyle: "italic", lineHeight: 0.95, marginBottom: 30, transitionDelay: "0.2s" }}>
//                     <span className="gold-shimmer-text">Starts Here</span>
//                 </h2>
//                 <p className={`at-reveal ${vis ? "vis" : ""}`} style={{ fontFamily: "'Lato',sans-serif", fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.85, maxWidth: 580, margin: "0 auto 44px", transitionDelay: "0.3s" }}>
//                     Whether it's a sacred pilgrimage, a mountain adventure, a family holiday, or a romantic escape — we're ready to write it with you. Every journey at Atithi is one of a kind, because you are.
//                 </p>
//                 <div className={`at-reveal ${vis ? "vis" : ""}`} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", transitionDelay: "0.4s" }}>
//                     <button style={{ background: `linear-gradient(135deg,${GOLD},${GOLD_L})`, border: "none", borderRadius: 3, padding: "16px 42px", fontFamily: "'Lato',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#0e1a22", cursor: "pointer", boxShadow: `0 8px 32px rgba(193,142,50,0.45)`, transition: "all .25s" }}
//                         onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px) scale(1.02)"}
//                         onMouseLeave={e => e.currentTarget.style.transform = "translateY(0) scale(1)"}>
//                         Plan My Journey ✈
//                     </button>
//                     <button style={{ background: "transparent", border: `1.5px solid rgba(255,255,255,0.2)`, borderRadius: 3, padding: "16px 42px", fontFamily: "'Lato',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", cursor: "pointer", transition: "all .25s" }}
//                         onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD_L; e.currentTarget.style.color = GOLD_L; }}
//                         onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}>
//                         Explore Services
//                     </button>
//                 </div>

//                 {/* Bottom credentials */}
//                 <div className={`at-reveal ${vis ? "vis" : ""}`} style={{ display: "flex", gap: 40, justifyContent: "center", marginTop: 60, paddingTop: 48, borderTop: "1px solid rgba(255,255,255,0.07)", flexWrap: "wrap", transitionDelay: "0.5s" }}>
//                     {["15,000+ Happy Travelers", "12+ Years Experience", "98% Satisfaction Rate", "24/7 Support"].map((c, i) => (
//                         <div key={i} style={{ textAlign: "center" }}>
//                             <div style={{ fontFamily: "'Lato',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>{c}</div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// /* ─── ROOT EXPORT ─────────────────────────────────────────────────────────── */
// export default function About() {
//     return (
//         <>
//             <style>{GLOBAL_CSS}</style>
//             <div className="about-root">
//                 {/* <CinematicHero /> */}
//                 <OpeningStatement />
//                 <Ticker />
//                 <FoundingStory />
//                 <StatsSection />
//                 <MissionVision />
//                 <CoreValues />
//                 <Timeline />
//                 <TeamSection />
//                 <CinematicBreak />
//                 <WhyUs />
//                 <ClosingCTA />
//             </div>
//         </>
//     );
// }





import { useState, useEffect, useRef } from "react";

/* ─── Constants ── */
const TEAL = "#0F5E6A";
const GOLD = "#C18E32";
const GOLD_L = "#E8B455";
const CREAM = "#f9f6f1";
const DARK = "#0e1a22";
const INK = "#1c1c1c";

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&family=Lato:wght@300;400;700&display=swap');

  .about-root { font-family: 'Lato', sans-serif; background: #f9f6f1; color: #1c1c1c; overflow-x: hidden; }
  .about-root .disp { font-family: 'Playfair Display', serif; }

  @keyframes at-fadeUp   { from{opacity:0;transform:translateY(48px)} to{opacity:1;transform:translateY(0)} }
  @keyframes at-shimmer  { 0%{background-position:-200% center} 100%{background-position:200% center} }
  @keyframes at-float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes at-tickerL  { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  @keyframes at-kenBurns { 0%{transform:scale(1.0) translate(0,0)} 100%{transform:scale(1.08) translate(-1%,0)} }

  .at-reveal      { opacity:0; transform:translateY(48px); transition:opacity .9s cubic-bezier(.22,1,.36,1),transform .9s cubic-bezier(.22,1,.36,1); }
  .at-reveal.vis  { opacity:1; transform:translateY(0); }
  .at-revL        { opacity:0; transform:translateX(-56px); transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1); }
  .at-revL.vis    { opacity:1; transform:translateX(0); }
  .at-revR        { opacity:0; transform:translateX(56px); transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1); }
  .at-revR.vis    { opacity:1; transform:translateX(0); }

  .gold-shimmer-text {
    background: linear-gradient(90deg,#8B6914,#C18E32,#E8B455,#f5d080,#E8B455,#C18E32,#8B6914);
    background-size: 300% auto;
    -webkit-background-clip: text; background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: at-shimmer 4s linear infinite;
  }

  .at-timeline-line {
    position: absolute; left: 50%; top: 0; bottom: 0; width: 1px;
    background: linear-gradient(to bottom, transparent 0%, rgba(193,142,50,0.4) 10%, rgba(193,142,50,0.4) 90%, transparent 100%);
    transform: translateX(-50%);
  }

  .at-team-card { transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease; }
  .at-team-card:hover { transform: translateY(-10px); box-shadow: 0 28px 56px rgba(0,0,0,0.12); }
  .at-team-card:hover .at-team-img { transform: scale(1.06); }
  .at-team-img { transition: transform .5s cubic-bezier(.22,1,.36,1); }

  .at-val-card { transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease; }
  .at-val-card:hover { transform: translateY(-6px); box-shadow: 0 18px 42px rgba(15,94,106,0.10); border-color: rgba(193,142,50,0.5) !important; }

  .dot-pattern { background-image: radial-gradient(circle, rgba(15,94,106,0.07) 1px, transparent 1px); background-size: 24px 24px; }
  .at-ticker { animation: at-tickerL 28s linear infinite; }

  .at-timeline-mobile { display: none; }
  @media (max-width: 768px) {
    .at-timeline-line { display: none; }
    .at-timeline-mobile { display: block; }
    .at-timeline-desktop { display: none; }
  }
`;

/* ─── Hooks ── */
function useReveal(threshold = 0.13) {
    const ref = useRef(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, vis];
}

function useCounter(target, duration = 1800, start = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime = null;
        const num = parseInt(target.replace(/\D/g, ""));
        const step = (ts) => {
            if (!startTime) startTime = ts;
            const progress = Math.min((ts - startTime) / duration, 1);
            setCount(Math.floor(progress * num));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [start]);
    return count;
}

/* ─── Section Tag ── */
function SectionTag({ children, light = false }) {
    return (
        <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5" style={{ background: `linear-gradient(90deg,${GOLD},${GOLD_L})` }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: light ? GOLD_L : GOLD }}>{children}</span>
            <div className="w-8 h-0.5" style={{ background: `linear-gradient(90deg,${GOLD_L},${GOLD})` }} />
        </div>
    );
}

/* ─── 1. Opening Statement ── */
function OpeningStatement() {
    const [ref, vis] = useReveal(0.2);
    return (
        <section ref={ref} style={{ background: "#fff", padding: "50px 8% 80px", position: "relative", overflow: "hidden" }}>
            {/* Decorative large letter */}
            <div className="disp" style={{ position: "absolute", right: "-2%", top: "-10%", fontSize: 320, fontWeight: 900, color: "rgba(15,94,106,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>A</div>

            <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
                <div className={`at-reveal ${vis ? "vis" : ""}`}>
                    <SectionTag>Who We Are</SectionTag>
                </div>

                {/* Drop-cap opening paragraph */}
                <div className={`at-revL ${vis ? "vis" : ""}`} style={{ transitionDelay: "0.1s" }}>
                    <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(20px,3.2vw,35px)", fontWeight: 400, lineHeight: 1.5, color: INK, marginBottom: 32 }}>
                        <span style={{ float: "left", fontFamily: "'Playfair Display',serif", fontSize: "clamp(72px,10vw,120px)", fontWeight: 700, lineHeight: 0.75, paddingRight: 16, paddingTop: 8, color: TEAL }}>B</span>
                        orn in the shadow of the Mahabodhi Temple — one of humanity's holiest sites — Atithi Travel Yatra has spent over a decade turning the ancient Indian philosophy of{" "}
                        <em style={{ color: GOLD, fontStyle: "italic" }}>Atithi Devo Bhava</em> — "The Guest is God" — into every journey we craft.
                    </p>
                </div>

                <div className={`at-reveal ${vis ? "vis" : ""}`} style={{ transitionDelay: "0.25s" }}>
                    <p style={{ fontFamily: "'Lato',sans-serif", fontSize: "clamp(15px,1.6vw,18px)", fontWeight: 500, lineHeight: 1.9, color: "rgba(28,28,28,0.65)", maxWidth: 720, borderLeft: `3px solid ${GOLD}`, paddingLeft: 28 }}>
                        We are not a travel agency. We are storytellers, cultural bridges, and memory architects. Every itinerary we design is an original screenplay — written specifically for the traveler standing before us, set against the magnificent canvas of India and beyond.
                    </p>
                </div>
            </div>
        </section>
    );
}

/* ─── 2. Ticker ── */
function Ticker() {
    const items = ["Bodh Gaya", "Varanasi", "Leh Ladakh", "Kerala Backwaters", "Rajasthan", "Andaman Islands", "Rishikesh", "Char Dham", "Spiti Valley", "Mysore", "Coorg", "Munnar", "Rann of Kutch", "Kaziranga", "Hampi"];
    const doubled = [...items, ...items];
    return (
        <div className="overflow-hidden py-3.5" style={{ background: DARK, borderTop: `1px solid rgba(193,142,50,0.15)`, borderBottom: `1px solid rgba(193,142,50,0.15)` }}>
            <div className="at-ticker flex gap-0 whitespace-nowrap">
                {doubled.map((item, i) => (
                    <span key={i} className="inline-flex items-center gap-6 px-6">
                        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.55)" }}>{item}</span>
                        <span className="text-xs" style={{ color: GOLD }}>✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

/* ─── 3. Founding Story ── */
function FoundingStory() {
    const [ref, vis] = useReveal();
    return (
        <section ref={ref} className="py-16 md:py-24 px-5 md:px-16 lg:px-24 relative dot-pattern" style={{ background: CREAM }}>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image collage */}
                    <div className={`at-revL ${vis ? "vis" : ""} relative h-72 sm:h-96 lg:h-[520px]`}>
                        <div className="absolute top-0 left-0 w-4/5 h-2/3 rounded overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=700&q=80" alt="Bodh Gaya" className="w-full h-full object-cover" />
                            <div className="absolute inset-0" style={{ background: "rgba(193,142,50,0.08)", mixBlendMode: "multiply" }} />
                        </div>
                        <div className="absolute bottom-0 right-0 w-3/5 h-1/2 rounded overflow-hidden shadow-xl border-2 border-white">
                            <img src="https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?w=500&q=80" alt="Adventure" className="w-full h-full object-cover" />
                        </div>
                        {/* Year badge */}
                        <div className="absolute bottom-16 -left-3 md:-left-5 bg-white rounded p-4 shadow-xl border border-amber-200" style={{ animation: "at-float 4.5s ease-in-out infinite" }}>
                            <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: GOLD }}>Founded</div>
                            <div className="disp text-4xl font-bold leading-none" style={{ color: TEAL }}>2013</div>
                            <div className="text-xs text-slate-400 mt-1">Bodh Gaya, Bihar</div>
                        </div>
                    </div>

                    {/* Story text */}
                    <div className={`at-revR ${vis ? "vis" : ""}`}>
                        <SectionTag>The Beginning</SectionTag>
                        <h2 className="disp text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8" style={{ color: INK }}>
                            A Story That Began<br />
                            <em className="font-normal" style={{ color: TEAL }}>At The World's Most Sacred Crossroads</em>
                        </h2>
                        {[
                            { year: "2013", text: "Founded in Bodh Gaya by a team of passionate local guides with a single vehicle and an unshakeable belief — that travel, done right, changes lives." },
                            { year: "2016", text: "Expanded to cover all of Bihar and Jharkhand pilgrimage circuits. Over 500 groups hosted. Reputation built entirely on word of mouth." },
                            { year: "2019", text: "Launched pan-India adventure and heritage packages. A dedicated team of 30+ travel experts joined the family." },
                            { year: "2024", text: "15,000+ happy travelers. 200+ destinations. Recognised as one of Bihar's most trusted travel brands." },
                        ].map((item, i) => (
                            <div key={i} className={`flex gap-5 ${i < 3 ? "mb-6 pb-6 border-b border-teal-50" : ""}`}>
                                <div className="disp text-sm font-bold min-w-[40px] pt-0.5" style={{ color: GOLD }}>{item.year}</div>
                                <p className="text-sm leading-relaxed" style={{ color: "rgba(28,28,28,0.62)" }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── 4. Stats ── */
function StatsSection() {
    const [ref, vis] = useReveal(0.25);
    const stats = [
        { label: "Happy Travelers", raw: "15000", suffix: "+" },
        { label: "Destinations", raw: "200", suffix: "+" },
        { label: "Tour Packages", raw: "50", suffix: "+" },
        { label: "Team Members", raw: "30", suffix: "+" },
        { label: "Years of Trust", raw: "12", suffix: "+" },
        { label: "Satisfaction Rate", raw: "98", suffix: "%" },
    ];

    function StatNum({ raw, suffix, start }) {
        const count = useCounter(raw, 1800, start);
        return (
            <span className="disp font-black text-white leading-none block" style={{ fontSize: "clamp(36px,5vw,42px)" }}>
                {count.toLocaleString()}{suffix}
            </span>
        );
    }

    return (
        <section ref={ref} className="py-16 md:py-24 px-5 md:px-16 lg:px-24 relative overflow-hidden" style={{ background: DARK }}>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className={`at-reveal ${vis ? "vis" : ""} text-center mb-14`}>
                    <SectionTag light>By The Numbers</SectionTag>
                    <h2 className="disp font-bold text-white" style={{ fontSize: "clamp(30px,5vw,48px)", lineHeight: 1.05 }}>
                        A Decade of <em style={{ color: GOLD_L }}>Extraordinary</em> Journeys
                    </h2>
                </div>
                {/* 2 cols mobile, 3 cols desktop */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-white/5 rounded overflow-hidden">
                    {stats.map((s, i) => (
                        <div key={s.label}
                            className={`at-reveal ${vis ? "vis" : ""} p-8 md:p-10 bg-transparent`}
                            style={{ transitionDelay: `${i * 0.08}s` }}>
                            <StatNum raw={s.raw} suffix={s.suffix} start={vis} />
                            <div className="text-xs font-bold tracking-widest uppercase mt-3 mb-3" style={{ color: "rgba(255,255,255,0.38)" }}>{s.label}</div>
                            <div className="w-9 h-0.5" style={{ background: `linear-gradient(90deg,${GOLD},${GOLD_L})` }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── 5. Mission & Vision ── */
function MissionVision() {
    const [ref, vis] = useReveal();
    return (
        <section ref={ref} className="bg-white py-16 md:py-24 px-5 md:px-16 lg:px-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className={`at-reveal ${vis ? "vis" : ""} text-center mb-16`}>
                    <SectionTag>Purpose & Direction</SectionTag>
                    <h2 className="disp font-bold" style={{ fontSize: "clamp(30px,4.5vw,58px)", color: INK, lineHeight: 1.1 }}>
                        What Drives <em style={{ color: TEAL }}>Everything</em> We Do
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Mission */}
                    <div className={`at-revL ${vis ? "vis" : ""} rounded p-8 md:p-12 relative overflow-hidden border border-teal-50`} style={{ background: CREAM, transitionDelay: "0.1s" }}>
                        <div className="disp absolute right-2 bottom-2 text-8xl font-black select-none" style={{ color: "rgba(15,94,106,0.05)" }}>M</div>
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-lg" style={{ background: `linear-gradient(135deg,${TEAL},#1a8a9a)` }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                            </svg>
                        </div>
                        <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GOLD }}>Our Mission</div>
                        <h3 className="disp text-2xl md:text-3xl font-bold mb-4 leading-snug" style={{ color: INK }}>To Make Every Journey Transformative</h3>
                        <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(28,28,28,0.6)" }}>
                            We exist to connect people with the soul of the places they visit — not just their surfaces. Every trip we design is an opportunity for genuine discovery: of cultures, of landscapes, of the self.
                        </p>
                    </div>
                    {/* Vision */}
                    <div className={`at-revR ${vis ? "vis" : ""} rounded p-8 md:p-12 relative overflow-hidden`} style={{ background: DARK, transitionDelay: "0.2s" }}>
                        <div className="disp absolute right-2 bottom-2 text-8xl font-black select-none" style={{ color: "rgba(255,255,255,0.04)" }}>V</div>
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-lg" style={{ background: `linear-gradient(135deg,${GOLD},${GOLD_L})` }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                            </svg>
                        </div>
                        <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GOLD_L }}>Our Vision</div>
                        <h3 className="disp text-2xl md:text-3xl font-bold mb-4 leading-snug text-white">India's Most Trusted Human-Centred Travel Brand</h3>
                        <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
                            To become the first name every traveler thinks of when they dream of India — known not for scale, but for the extraordinary depth of care, knowledge, and humanity we bring to every journey.
                        </p>
                    </div>
                </div>
                {/* Quote */}
                <div className={`at-reveal ${vis ? "vis" : ""} text-center mt-14`} style={{ transitionDelay: "0.35s" }}>
                    <blockquote className="disp italic max-w-2xl mx-auto relative px-10" style={{ fontSize: "clamp(20px,3vw,36px)", color: TEAL, lineHeight: 1.5 }}>
                        <span className="absolute left-0 -top-2 text-7xl leading-none" style={{ color: `rgba(193,142,50,0.25)`, fontFamily: "serif" }}>"</span>
                        Atithi Devo Bhava — The Guest is God
                        <span className="absolute right-0 -bottom-4 text-7xl leading-none" style={{ color: `rgba(193,142,50,0.25)`, fontFamily: "serif" }}>"</span>
                    </blockquote>
                    <div className="text-xs font-bold tracking-widest uppercase mt-6" style={{ color: "rgba(28,28,28,0.35)" }}>— The Philosophy That Guides Us</div>
                </div>
            </div>
        </section>
    );
}

/* ─── 6. Core Values ── */
function CoreValues() {
    const [ref, vis] = useReveal();
    const values = [
        { num: "01", icon: "✦", title: "Authenticity", desc: "We celebrate real India — not a curated postcard version. Every experience is genuine, unscripted, and rooted in the living culture of its place.", color: TEAL },
        { num: "02", icon: "◈", title: "Mastery", desc: "12 years of honing our craft means we know the hidden temple at dawn that no guidebook mentions, the local dhabha that feeds the best meal of your trip.", color: "#8B4513" },
        { num: "03", icon: "❖", title: "Stewardship", desc: "We travel with conscience. Responsible tourism practices, support for local communities, and treading lightly on the environments we visit.", color: "#2d7a3a" },
        { num: "04", icon: "◇", title: "Warmth", desc: "Our relationships don't end when the trip does. Thousands of past travelers return — not just for the destinations, but for the family they found here.", color: "#9b2335" },
        { num: "05", icon: "⬡", title: "Precision", desc: "Every departure time, every room allocation, every permit — obsessively organised. Because when you're on the road, the details are everything.", color: "#5c3d8f" },
        { num: "06", icon: "✿", title: "Wonder", desc: "We never stop being amazed by India's infinite depth. That genuine sense of awe is contagious — and it's what we pass on to every traveler we guide.", color: GOLD },
    ];

    return (
        <section ref={ref} className="py-16 md:py-24 px-5 md:px-16 lg:px-24 dot-pattern" style={{ background: CREAM }}>
            <div className="max-w-6xl mx-auto">
                <div className={`at-reveal ${vis ? "vis" : ""} text-center mb-14`}>
                    <SectionTag>What We Stand For</SectionTag>
                    <h2 className="disp font-bold" style={{ fontSize: "clamp(30px,4.5vw,58px)", color: INK, lineHeight: 1.1 }}>
                        Six Values. <em style={{ color: TEAL }}>One Soul.</em>
                    </h2>
                </div>
                {/* 1 col mobile, 2 col tablet, 3 col desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {values.map((v, i) => (
                        <div key={v.title}
                            className={`at-val-card at-reveal ${vis ? "vis" : ""} bg-white rounded p-7 border relative overflow-hidden cursor-default`}
                            style={{ borderColor: "rgba(15,94,106,0.09)", transitionDelay: `${i * 0.07}s` }}>
                            {/* Top color bar */}
                            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg,${v.color},${v.color}88)` }} />
                            {/* Watermark number */}
                            <div className="disp absolute right-3 top-2 text-7xl font-black select-none leading-none" style={{ color: "rgba(15,94,106,0.05)" }}>{v.num}</div>
                            <div className="text-2xl mb-4" style={{ color: v.color }}>{v.icon}</div>
                            <h4 className="disp text-xl font-bold mb-3 leading-snug" style={{ color: INK }}>{v.title}</h4>
                            <p className="text-sm leading-relaxed" style={{ color: "rgba(28,28,28,0.58)" }}>{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── 7. Timeline ── */
function Timeline() {
    const [ref, vis] = useReveal();
    const milestones = [
        { year: "2013", title: "The First Step", body: "Founded in Bodh Gaya by three local guides with a single vehicle, an unshakeable passion, and a philosophy: the guest is god.", side: "left" },
        { year: "2015", title: "Pilgrimage Circuit Mastered", body: "Became the go-to operator for Buddhist pilgrimage circuits, partnering with international dharma centres and spiritual organisations.", side: "right" },
        { year: "2017", title: "Bihar & Beyond", body: "Expanded to cover Rajgir, Nalanda, Pawapuri, and Vaishali — making us the most comprehensive Bihar heritage travel brand.", side: "left" },
        { year: "2019", title: "Adventure Division Launched", body: "Launched Himalayan and adventure packages. First winter Spiti expedition completed. 30-member team in place.", side: "right" },
        { year: "2021", title: "Digital Transformation", body: "New website, WhatsApp booking, 24/7 support line. Survived COVID-19 with zero layoffs by pivoting to domestic travel.", side: "left" },
        { year: "2024", title: "15,000 Stories Written", body: "15,000 travelers. 200+ destinations. A reputation built entirely on trust, care, and the extraordinary journeys we share.", side: "right" },
    ];

    return (
        <section ref={ref} className="bg-white py-16 md:py-24 px-5 md:px-16 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <div className={`at-reveal ${vis ? "vis" : ""} text-center mb-16`}>
                    <SectionTag>Our Journey</SectionTag>
                    <h2 className="disp font-bold" style={{ fontSize: "clamp(30px,4.5vw,58px)", color: INK, lineHeight: 1.1 }}>
                        A Decade Written<br /><em style={{ color: GOLD }}>In Footsteps</em>
                    </h2>
                </div>

                {/* Desktop Timeline */}
                <div className="at-timeline-desktop relative">
                    <div className="at-timeline-line" />
                    {milestones.map((m, i) => (
                        <div key={m.year} className={`at-reveal ${vis ? "vis" : ""} grid grid-cols-2 gap-0 mb-14`} style={{ transitionDelay: `${i * 0.1}s` }}>
                            {m.side === "left" ? (
                                <>
                                    <div className="pr-12 text-right">
                                        <div className="disp text-xs font-bold tracking-widest uppercase mb-2" style={{ color: GOLD }}>{m.year}</div>
                                        <h4 className="disp text-xl font-bold mb-2 leading-snug" style={{ color: INK }}>{m.title}</h4>
                                        <p className="text-sm leading-relaxed" style={{ color: "rgba(28,28,28,0.58)" }}>{m.body}</p>
                                    </div>
                                    <div className="flex items-start pt-7">
                                        <div className="w-4 h-4 rounded-full border-4 border-white flex-shrink-0 -translate-x-2" style={{ background: TEAL, boxShadow: `0 0 0 3px ${TEAL}` }} />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex items-start justify-end pt-7">
                                        <div className="w-4 h-4 rounded-full border-4 border-white flex-shrink-0 translate-x-2" style={{ background: GOLD, boxShadow: `0 0 0 3px ${GOLD}` }} />
                                    </div>
                                    <div className="pl-12">
                                        <div className="disp text-xs font-bold tracking-widest uppercase mb-2" style={{ color: GOLD }}>{m.year}</div>
                                        <h4 className="disp text-xl font-bold mb-2 leading-snug" style={{ color: INK }}>{m.title}</h4>
                                        <p className="text-sm leading-relaxed" style={{ color: "rgba(28,28,28,0.58)" }}>{m.body}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Timeline — single column */}
                <div className="at-timeline-mobile flex flex-col gap-8 relative pl-8 border-l-2" style={{ borderColor: `rgba(193,142,50,0.3)` }}>
                    {milestones.map((m, i) => (
                        <div key={m.year} className={`at-reveal ${vis ? "vis" : ""} relative`} style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="absolute -left-10 top-1 w-4 h-4 rounded-full border-4 border-white" style={{ background: i % 2 === 0 ? TEAL : GOLD, boxShadow: `0 0 0 2px ${i % 2 === 0 ? TEAL : GOLD}` }} />
                            <div className="disp text-xs font-bold tracking-widest uppercase mb-1" style={{ color: GOLD }}>{m.year}</div>
                            <h4 className="disp text-lg font-bold mb-1 leading-snug" style={{ color: INK }}>{m.title}</h4>
                            <p className="text-sm leading-relaxed" style={{ color: "rgba(28,28,28,0.58)" }}>{m.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── 8. Team ── */
function TeamSection() {
    const [ref, vis] = useReveal();
    const team = [
        { name: "Rahul Kumar Singh", role: "Founder & CEO", spec: "Pilgrimage & Cultural Expert", img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&q=80", exp: "15 yrs" },
        { name: "Priya Verma", role: "Head of Operations", spec: "Himalayan Adventure Specialist", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", exp: "10 yrs" },
        { name: "Arjun Mishra", role: "Lead Travel Designer", spec: "Heritage & Art Curator", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80", exp: "9 yrs" },
        { name: "Meera Devi", role: "Guest Relations Head", spec: "Luxury & Wellness Travel", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80", exp: "8 yrs" },
    ];

    return (
        <section ref={ref} className="py-16 md:py-24 px-5 md:px-16 lg:px-24" style={{ background: CREAM }}>
            <div className="max-w-6xl mx-auto">
                <div className={`at-reveal ${vis ? "vis" : ""} text-center mb-14`}>
                    <SectionTag>The People Behind</SectionTag>
                    <h2 className="disp font-bold" style={{ fontSize: "clamp(30px,4.5vw,58px)", color: INK, lineHeight: 1.1 }}>
                        Faces of <em style={{ color: TEAL }}>Atithi</em>
                    </h2>
                    <p className="text-sm md:text-base max-w-lg mx-auto mt-4" style={{ color: "rgba(28,28,28,0.5)" }}>
                        A team of obsessive travel lovers, cultural custodians, and logistics wizards — united by a deep love for India.
                    </p>
                </div>
                {/* 1 col mobile, 2 col sm, 4 col lg */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {team.map((m, i) => (
                        <div key={m.name}
                            className={`at-team-card at-reveal ${vis ? "vis" : ""} bg-white rounded overflow-hidden border border-teal-50`}
                            style={{ transitionDelay: `${i * 0.08}s` }}>
                            <div className="h-56 sm:h-64 overflow-hidden relative">
                                <img src={m.img} alt={m.name} className="at-team-img w-full h-full object-cover object-top" />
                                <div className="absolute top-3 right-3 text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded" style={{ background: "rgba(14,26,34,0.85)", color: GOLD_L }}>{m.exp}</div>
                                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,26,34,0.55) 0%, transparent 50%)" }} />
                            </div>
                            <div className="p-5">
                                <div className="text-xs font-bold tracking-widest uppercase mb-1.5" style={{ color: GOLD }}>{m.role}</div>
                                <h4 className="disp text-lg font-bold leading-snug mb-1" style={{ color: INK }}>{m.name}</h4>
                                <p className="text-xs" style={{ color: "rgba(28,28,28,0.48)" }}>{m.spec}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── 9. Cinematic Break ── */
function CinematicBreak() {
    const [ref, vis] = useReveal(0.3);
    return (
        <section ref={ref} className="relative h-64 md:h-96 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1600&q=85" alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "rgba(14,26,34,0.78)" }} />
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)" }} />
            </div>
            <div className={`at-reveal ${vis ? "vis" : ""} relative z-10 text-center px-5 max-w-3xl`}>
                <p className="disp italic text-white leading-relaxed" style={{ fontSize: "clamp(20px,4vw,52px)" }}>
                    "We don't sell holidays.<br />
                    <span style={{ color: GOLD_L }}>We write the chapters of lives."</span>
                </p>
                <div className="text-xs font-bold tracking-widest uppercase mt-5" style={{ color: "rgba(255,255,255,0.4)" }}>— Rahul Kumar Singh, Founder</div>
            </div>
        </section>
    );
}

/* ─── 10. Why Us ── */
function WhyUs() {
    const [ref, vis] = useReveal();
    const reasons = [
        { title: "Born Local, Thinking Global", body: "We are from Bodh Gaya. That local DNA — the relationships, the road knowledge, the cultural fluency — runs through everything we do.", icon: "📍" },
        { title: "Personalisation Is Our Default", body: "We don't have a brochure of set packages. We have a team of travel designers who build your trip from scratch, every single time.", icon: "✏️" },
        { title: "24/7 On-Ground Support", body: "When you're travelling with us, you're never alone. A real human — not a chatbot — is available around the clock for anything you need.", icon: "📞" },
        { title: "Honest, Transparent Pricing", body: "No hidden costs. No surprise charges. The price we quote is the price you pay. We'd rather earn your trust than your money.", icon: "💎" },
    ];

    return (
        <section ref={ref} className="bg-white py-16 md:py-24 px-5 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className={`at-revL ${vis ? "vis" : ""}`}>
                        <SectionTag>Why Atithi</SectionTag>
                        <h2 className="disp font-bold mb-5 leading-tight" style={{ fontSize: "clamp(28px,4vw,54px)", color: INK }}>
                            The Difference You<br /><em style={{ color: TEAL }}>Feel On Day One</em>
                        </h2>
                        <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: "rgba(28,28,28,0.58)" }}>
                            There are thousands of travel agencies in India. What makes Atithi Travel Yatra worth choosing isn't a list of features — it's a feeling that stays with you long after you return home.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <button className="text-xs font-bold tracking-widest uppercase text-white px-6 py-3 rounded transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
                                style={{ background: `linear-gradient(135deg,${TEAL},#1a8a9a)`, boxShadow: `0 6px 22px rgba(15,94,106,0.3)` }}>
                                Plan My Trip ✈
                            </button>
                            <a href="https://wa.me/919088110999" target="_blank" rel="noreferrer"
                                className="text-xs font-bold tracking-widest uppercase text-white px-6 py-3 rounded transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
                                style={{ background: "#25D366", boxShadow: "0 6px 22px rgba(37,211,102,0.3)" }}>
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                    <div className={`at-revR ${vis ? "vis" : ""} flex flex-col gap-4`}>
                        {reasons.map((r) => (
                            <div key={r.title}
                                className="flex gap-4 p-5 rounded border transition-all duration-300 hover:shadow-lg hover:border-amber-300 hover:bg-white cursor-default"
                                style={{ background: CREAM, borderColor: "rgba(15,94,106,0.08)" }}>
                                <div className="text-2xl flex-shrink-0 pt-0.5 leading-none">{r.icon}</div>
                                <div>
                                    <h5 className="disp text-lg font-bold mb-1.5 leading-snug" style={{ color: INK }}>{r.title}</h5>
                                    <p className="text-sm leading-relaxed" style={{ color: "rgba(28,28,28,0.56)" }}>{r.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── 11. Closing CTA ── */
function ClosingCTA() {
    const [ref, vis] = useReveal(0.3);
    return (
        <section ref={ref} className="py-20 md:py-28 px-5 md:px-16 relative overflow-hidden" style={{ background: DARK }}>
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border pointer-events-none" style={{ borderColor: "rgba(193,142,50,0.07)" }} />
            <div className="absolute -left-10 bottom-0 w-64 h-64 rounded-full border pointer-events-none" style={{ borderColor: "rgba(15,94,106,0.1)" }} />

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <div className={`at-reveal ${vis ? "vis" : ""}`}><SectionTag light>Begin Your Story</SectionTag></div>
                <h2 className={`disp font-black text-white at-reveal ${vis ? "vis" : ""}`} style={{ fontSize: "clamp(36px,6vw,82px)", lineHeight: 0.95, marginBottom: 8, transitionDelay: "0.1s" }}>
                    Your Next Chapter
                </h2>
                <h2 className={`disp font-normal italic at-reveal ${vis ? "vis" : ""}`} style={{ fontSize: "clamp(36px,6vw,82px)", lineHeight: 0.95, marginBottom: 24, transitionDelay: "0.2s" }}>
                    <span className="gold-shimmer-text">Starts Here</span>
                </h2>
                <p className={`text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10 at-reveal ${vis ? "vis" : ""}`} style={{ color: "rgba(255,255,255,0.55)", transitionDelay: "0.3s" }}>
                    Whether it's a sacred pilgrimage, a mountain adventure, a family holiday, or a romantic escape — we're ready to write it with you.
                </p>
                <div className={`flex flex-wrap gap-4 justify-center at-reveal ${vis ? "vis" : ""}`} style={{ transitionDelay: "0.4s" }}>
                    <button className="text-xs font-bold tracking-widest uppercase px-8 py-4 rounded transition-all duration-200 hover:-translate-y-1 hover:scale-105"
                        style={{ background: `linear-gradient(135deg,${GOLD},${GOLD_L})`, color: "#0e1a22", boxShadow: `0 8px 32px rgba(193,142,50,0.45)` }}>
                        Plan My Journey ✈
                    </button>
                    <button className="text-xs font-bold tracking-widest uppercase px-8 py-4 rounded border transition-all duration-200 hover:border-amber-400 hover:text-amber-400"
                        style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.75)", background: "transparent" }}>
                        Explore Services
                    </button>
                </div>

                {/* Bottom credentials */}
                <div className={`flex flex-wrap gap-6 md:gap-10 justify-center mt-14 pt-10 border-t at-reveal ${vis ? "vis" : ""}`} style={{ borderColor: "rgba(255,255,255,0.07)", transitionDelay: "0.5s" }}>
                    {["15,000+ Happy Travelers", "12+ Years Experience", "98% Satisfaction Rate", "24/7 Support"].map((c) => (
                        <div key={c} className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>{c}</div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Root Export ── */
export default function About() {
    return (
        <>
            <style>{GLOBAL_CSS}</style>
            <div className="about-root">
                <OpeningStatement />
                <Ticker />
                <FoundingStory />
                <StatsSection />
                <MissionVision />
                <CoreValues />
                <Timeline />
                <TeamSection />
                <CinematicBreak />
                <WhyUs />
                <ClosingCTA />
            </div>
        </>
    );
}