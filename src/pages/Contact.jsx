// // import React, { useState } from 'react'
// import { useState, useEffect, useRef } from "react";

// const Contact = () => {
//     const [ref, vis] = useReveal();
//     const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
//     const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

//     const inputStyle = {
//         width: "100%", background: "#f8f5f0", border: "1px solid rgba(15,94,106,0.15)",
//         borderRadius: 8, padding: "11px 14px", fontFamily: "'DM Sans',sans-serif",
//         fontSize: 14, color: "#0a1628", transition: "border-color .2s",
//     };
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
//     function Tag({ children }) {
//         return (
//             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
//                 <div style={{ width: 28, height: 2, background: "linear-gradient(90deg,#C9963A,#E8B455)" }} />
//                 <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "#C9963A" }}>{children}</span>
//                 <div style={{ width: 28, height: 2, background: "linear-gradient(90deg,#E8B455,#C9963A)" }} />
//             </div>
//         );
//     }

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

//     return (
//         <div>

//             <section id="contact" ref={ref} style={{ background: "#faf8f4", padding: "90px 8%" }} className="pattern-bg">
//                 <div style={{ maxWidth: 1100, margin: "0 auto" }}>
//                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 70, alignItems: "center" }}>
//                         {/* Left */}
//                         <div className={`rev-l ${vis ? "vis" : ""}`}>
//                             <Tag>Get In Touch</Tag>
//                             <h2 className="font-display" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 300, color: "#0a1628", lineHeight: 1.1, marginBottom: 18 }}>
//                                 Plan Your<br /><em style={{ color: "#0F5E6A" }}>Perfect Journey</em>
//                             </h2>
//                             <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: "rgba(26,26,46,0.55)", lineHeight: 1.85, marginBottom: 36 }}>
//                                 Tell us your dream and we'll craft the perfect itinerary. Free consultation, no obligations. Our expert travel advisors respond within 2 hours.
//                             </p>
//                             {/* Contact info */}
//                             {/* {[
//                                 { icon: "📍", label: "Office", val: "Reliq Eagle, 511, Maranpur, Opposite Shiv Mandir, Gaya Bypass, Road, opposite Shiv Mandir, OTA, Gaya, Bihar 823001, India" },
//                                 { icon: "📞", label: "Call Us", val: "+91 9088110999" },
//                                 { icon: <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>, label: "WhatsApp", val: "+91 9088110999" },
//                                 { icon: "✉️", label: "Email", val: "info@atithitravelyatra.com" },
//                             ].map(c => (
//                                 <div key={c.label} style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 18 }}>
//                                     <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(15,94,106,0.08)", border: "1px solid rgba(15,94,106,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{c.icon}</div>
//                                     <div>
//                                         <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9963A" }}>{c.label}</div>
//                                         <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 500, color: "#0a1628" }}>{c.val}</div>
//                                     </div>
//                                 </div>
//                             ))} */}

//                             {[
//                                 {
//                                     icon: (
//                                         <svg viewBox="0 0 24 24" fill="none" stroke="#0F5E6A" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
//                                             <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
//                                             <circle cx="12" cy="9" r="2.5" />
//                                         </svg>
//                                     ),
//                                     label: "Office",
//                                     val: "Reliq Eagle, 511, Maranpur, Opposite Shiv Mandir, Gaya Bypass, Road, OTA, Gaya, Bihar 823001, India"
//                                 },
//                                 {
//                                     icon: (
//                                         <svg viewBox="0 0 24 24" fill="none" stroke="#0F5E6A" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
//                                             <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.05 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
//                                         </svg>
//                                     ),
//                                     label: "Call Us",
//                                     val: "+91 9088110999"
//                                 },
//                                 {
//                                     icon: (
//                                         <svg viewBox="0 0 24 24" fill="#25D366" style={{ width: 20, height: 20 }}>
//                                             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//                                         </svg>
//                                     ),
//                                     label: "WhatsApp",
//                                     val: "+91 9088110999"
//                                 },
//                                 {
//                                     icon: (
//                                         <svg viewBox="0 0 24 24" fill="none" stroke="#0F5E6A" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
//                                             <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//                                             <polyline points="22,6 12,13 2,6" />
//                                         </svg>
//                                     ),
//                                     label: "Email",
//                                     val: "info@atithitravelyatra.com"
//                                 },
//                             ].map(c => (
//                                 <div key={c.label} style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 18 }}>
//                                     <div style={{
//                                         width: 42, height: 42, borderRadius: 12,
//                                         background: "rgba(15,94,106,0.08)",
//                                         border: "1px solid rgba(15,94,106,0.12)",
//                                         display: "flex", alignItems: "center", justifyContent: "center",
//                                         flexShrink: 0
//                                     }}>
//                                         {c.icon}
//                                     </div>
//                                     <div>
//                                         <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9963A" }}>{c.label}</div>
//                                         <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 500, color: "#0a1628" }}>{c.val}</div>
//                                     </div>
//                                 </div>
//                             ))}

//                             {/* WhatsApp button */}
//                             <a href="https://wa.me/919088110999?text=Hi! I want to book a tour with Atithi Travel Yatra."
//                                 target="_blank" rel="noreferrer"
//                                 style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#25D366", borderRadius: 8, padding: "12px 24px", fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", color: "#fff", textDecoration: "none", boxShadow: "0 6px 20px rgba(37,211,102,0.3)", marginTop: 8, transition: "transform .2s" }}
//                                 onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
//                                 onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
//                                 <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
//                                 Chat on WhatsApp
//                             </a>
//                         </div>

//                         {/* Right — form */}
//                         <div className={`rev-r ${vis ? "vis" : ""}`}>
//                             <div style={{ background: "#fff", borderRadius: 24, padding: "40px 36px", boxShadow: "0 16px 50px rgba(0,0,0,0.07)", border: "1px solid rgba(15,94,106,0.08)" }}>
//                                 <h3 className="font-display" style={{ fontSize: 28, fontWeight: 600, color: "#0a1628", marginBottom: 6 }}>Free Consultation</h3>
//                                 <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "rgba(26,26,46,0.5)", marginBottom: 28 }}>We'll get back to you within 2 hours.</p>

//                                 <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
//                                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//                                         <div>
//                                             <label style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0F5E6A", display: "block", marginBottom: 6 }}>Full Name</label>
//                                             <input value={form.name} onChange={e => update("name", e.target.value)} placeholder="Your name" style={inputStyle}
//                                                 onFocus={e => e.target.style.borderColor = "#0F5E6A"}
//                                                 onBlur={e => e.target.style.borderColor = "rgba(15,94,106,0.15)"} />
//                                         </div>
//                                         <div>
//                                             <label style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0F5E6A", display: "block", marginBottom: 6 }}>Phone</label>
//                                             <input value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="+91 XXXXX XXXXX" style={inputStyle}
//                                                 onFocus={e => e.target.style.borderColor = "#0F5E6A"}
//                                                 onBlur={e => e.target.style.borderColor = "rgba(15,94,106,0.15)"} />
//                                         </div>
//                                     </div>

//                                     <div>
//                                         <label style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0F5E6A", display: "block", marginBottom: 6 }}>Service Interested In</label>
//                                         <select value={form.service} onChange={e => update("service", e.target.value)} style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
//                                             onFocus={e => e.target.style.borderColor = "#0F5E6A"}
//                                             onBlur={e => e.target.style.borderColor = "rgba(15,94,106,0.15)"}>
//                                             <option value="">Select a service...</option>
//                                             {SERVICES.map(s => <option key={s.id}>{s.label}</option>)}
//                                         </select>
//                                     </div>

//                                     <div>
//                                         <label style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0F5E6A", display: "block", marginBottom: 6 }}>Your Message</label>
//                                         <textarea value={form.message} onChange={e => update("message", e.target.value)} placeholder="Tell us about your dream journey..." rows={4}
//                                             style={{ ...inputStyle, resize: "vertical" }}
//                                             onFocus={e => e.target.style.borderColor = "#0F5E6A"}
//                                             onBlur={e => e.target.style.borderColor = "rgba(15,94,106,0.15)"} />
//                                     </div>

//                                     <button className="btn-sweep" style={{ background: "linear-gradient(135deg,#0F5E6A,#1a8a9a)", border: "none", borderRadius: 8, padding: "14px", fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", cursor: "pointer", boxShadow: "0 8px 28px rgba(15,94,106,0.3)", transition: "transform .2s" }}
//                                         onMouseEnter={e => e.currentTarget.style.transform = "translateY(-1px)"}
//                                         onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
//                                         Send Message & Plan My Trip →
//                                     </button>

//                                     <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(26,26,46,0.4)", textAlign: "center" }}>
//                                         🔒 Your details are safe with us. No spam, ever.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Contact



import { useState, useEffect, useRef } from "react";

const SERVICES = [
    { id: "pilgrimage", label: "Pilgrimage Yatras" },
    { id: "adventure", label: "Adventure Tours" },
    { id: "heritage", label: "Heritage & Culture" },
    { id: "honeymoon", label: "Honeymoon Packages" },
    { id: "family", label: "Family Holidays" },
    { id: "corporate", label: "Corporate Travel" },
];

const CONTACT_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');

  .contact-root { font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
  .contact-root .font-display { font-family: 'Cormorant Garamond', serif; }

  .rev-l { opacity:0; transform:translateX(-40px); transition:opacity .75s cubic-bezier(.22,1,.36,1),transform .75s cubic-bezier(.22,1,.36,1); }
  .rev-l.vis { opacity:1; transform:translateX(0); }
  .rev-r { opacity:0; transform:translateX(40px); transition:opacity .75s cubic-bezier(.22,1,.36,1),transform .75s cubic-bezier(.22,1,.36,1); }
  .rev-r.vis { opacity:1; transform:translateX(0); }

  .pattern-bg {
    background-image: radial-gradient(circle at 1px 1px, rgba(15,94,106,0.06) 1px, transparent 0);
    background-size: 28px 28px;
  }

  .btn-sweep { position:relative; overflow:hidden; }
  .btn-sweep::after { content:''; position:absolute; inset:0; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent); transform:translateX(-100%); transition:transform .5s ease; }
  .btn-sweep:hover::after { transform:translateX(100%); }

  .contact-input:focus { outline: none; border-color: #0F5E6A !important; }
`;

function useReveal(threshold = 0.12) {
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

function Tag({ children }) {
    return (
        <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-0.5" style={{ background: "linear-gradient(90deg,#C9963A,#E8B455)" }} />
            <span className="text-xs font-bold tracking-widest uppercase text-amber-600">{children}</span>
            <div className="w-7 h-0.5" style={{ background: "linear-gradient(90deg,#E8B455,#C9963A)" }} />
        </div>
    );
}

const CONTACT_ITEMS = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#0F5E6A" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
            </svg>
        ),
        label: "Office",
        val: "Reliq Eagle, 511, Maranpur, Opposite Shiv Mandir, Gaya Bypass Road, OTA, Gaya, Bihar 823001, India",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#0F5E6A" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.05 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
        ),
        label: "Call Us",
        val: "+91 9088110999",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
        label: "WhatsApp",
        val: "+91 9088110999",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#0F5E6A" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        label: "Email",
        val: "info@atithitravelyatra.com",
    },
];

const Contact = () => {
    const [ref, vis] = useReveal();
    const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
    const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

    const inputClass = "contact-input w-full bg-stone-50 border border-teal-100 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 transition-all duration-200 focus:outline-none";

    return (
        <div className="contact-root">
            <style>{CONTACT_CSS}</style>

            <section
                id="contact"
                ref={ref}
                className="pattern-bg py-6  px-5 md:px-12 lg:px-20"
                style={{ background: "#faf8f4" }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                        {/* ── LEFT ── */}
                        <div className={`rev-l ${vis ? "vis" : ""}`}>
                            <Tag>Get In Touch</Tag>
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-5" style={{ color: "#0a1628" }}>
                                Plan Your<br />
                                <em style={{ color: "#0F5E6A" }}>Perfect Journey</em>
                            </h2>
                            <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: "rgba(26,26,46,0.55)" }}>
                                Tell us your dream and we'll craft the perfect itinerary. Free consultation, no obligations. Our expert travel advisors respond within 2 hours.
                            </p>

                            {/* Contact Info */}
                            <div className="flex flex-col gap-4 mb-8">
                                {CONTACT_ITEMS.map(c => (
                                    <div key={c.label} className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{ background: "rgba(15,94,106,0.08)", border: "1px solid rgba(15,94,106,0.12)" }}>
                                            {c.icon}
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-0.5">{c.label}</div>
                                            <div className="text-sm font-medium text-slate-800 leading-snug">{c.val}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/919088110999?text=Hi! I want to book a tour with Atithi Travel Yatra."
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2.5 text-white text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 no-underline"
                                style={{ background: "#25D366", boxShadow: "0 6px 20px rgba(37,211,102,0.3)" }}
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Chat on WhatsApp
                            </a>
                        </div>

                        {/* ── RIGHT — Form ── */}
                        <div className={`rev-r ${vis ? "vis" : ""}`}>
                            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-teal-50">
                                <h3 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-1">Free Consultation</h3>
                                <p className="text-xs text-slate-400 mb-7">We'll get back to you within 2 hours.</p>

                                <div className="flex flex-col gap-4">
                                    {/* Name + Phone — stack on mobile, side by side on sm+ */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold tracking-widest uppercase text-teal-700 mb-1.5">Full Name</label>
                                            <input
                                                className={inputClass}
                                                value={form.name}
                                                onChange={e => update("name", e.target.value)}
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold tracking-widest uppercase text-teal-700 mb-1.5">Phone</label>
                                            <input
                                                className={inputClass}
                                                value={form.phone}
                                                onChange={e => update("phone", e.target.value)}
                                                placeholder="+91 XXXXX XXXXX"
                                            />
                                        </div>
                                    </div>

                                    {/* Service */}
                                    <div>
                                        <label className="block text-xs font-bold tracking-widest uppercase text-teal-700 mb-1.5">Service Interested In</label>
                                        <select
                                            className={inputClass}
                                            value={form.service}
                                            onChange={e => update("service", e.target.value)}
                                            style={{ appearance: "none", cursor: "pointer" }}
                                        >
                                            <option value="">Select a service...</option>
                                            {SERVICES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-xs font-bold tracking-widest uppercase text-teal-700 mb-1.5">Your Message</label>
                                        <textarea
                                            className={inputClass}
                                            value={form.message}
                                            onChange={e => update("message", e.target.value)}
                                            placeholder="Tell us about your dream journey..."
                                            rows={4}
                                            style={{ resize: "vertical" }}
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        className="btn-sweep w-full text-white text-xs font-bold tracking-widest uppercase py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer border-0"
                                        style={{ background: "linear-gradient(135deg,#0F5E6A,#1a8a9a)", boxShadow: "0 8px 28px rgba(15,94,106,0.3)" }}
                                    >
                                        Send Message & Plan My Trip →
                                    </button>

                                    <p className="text-xs text-center" style={{ color: "rgba(26,26,46,0.4)" }}>
                                        🔒 Your details are safe with us. No spam, ever.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;