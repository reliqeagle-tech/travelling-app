// import React from 'react'

// const Footer = () => {
//     const TEAL = "#0F5E6A";
//     const GOLD = "#C9963A";
//     const GOLD_LIGHT = "#E8B455";
//     const DARK = "#0a1628";
//     const DARK2 = "#0d1e35";

//     return (
//         <div>
//             {/* ── FOOTER ───────────────────────────────────────────────── */}
//             <footer style={{ background: "#060f1e", borderTop: `1px solid rgba(201,150,58,0.1)`, padding: "60px 2rem 32px" }}>
//                 <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//                     <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: 48, marginBottom: 48 }}>
//                         {/* Brand */}
//                         <div>
//                             <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
//                                 <div style={{ display: "flex", flexDirection: "column" }}>
//                                     <span className="font-display" style={{ fontSize: 28, fontWeight: 600, color: "#fff", letterSpacing: "0.1em" }}>ATITHI</span>
//                                     <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase" }}>TRAVEL YATRA</span>
//                                 </div>
//                             </div>
//                             <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.9, maxWidth: 280, marginBottom: 24 }}>
//                                 Discover. Explore. Journey. — Crafting unforgettable Indian travel experiences since 2013.
//                             </p>
//                             <div style={{ display: "flex", gap: 10 }}>
//                                 {["f", "in", "tw", "yt"].map(s => (
//                                     <a key={s} href="#" style={{ width: 36, height: 36, borderRadius: "50%", border: "0.5px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", textDecoration: "none", textTransform: "uppercase", transition: "all 0.2s" }}
//                                         onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
//                                         onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}>
//                                         {s}
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Quick Links */}
//                         {[
//                             { title: "Quick Links", items: ["About Us", "Destinations", "Packages", "Experiences", "Blog", "Contact"] },
//                             { title: "Tours", items: ["Pilgrimage Yatras", "Adventure Trips", "Honeymoon", "Family Holidays", "Group Travel", "Corporate"] },
//                         ].map(col => (
//                             <div key={col.title}>
//                                 <h5 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD, marginBottom: 20 }}>{col.title}</h5>
//                                 <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
//                                     {col.items.map(item => (
//                                         <li key={item}><a href="#" style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
//                                             onMouseEnter={e => e.currentTarget.style.color = GOLD_LIGHT}
//                                             onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}>{item}</a></li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}

//                         {/* Newsletter */}
//                         <div>
//                             <h5 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD, marginBottom: 20 }}>Newsletter</h5>
//                             <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: 16 }}>Get exclusive travel deals and inspiration delivered to your inbox.</p>
//                             <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//                                 <input placeholder="Your email address" style={{ background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "10px 14px", fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "#fff", width: "100%", transition: "border-color 0.2s" }}
//                                     onFocus={e => e.target.style.borderColor = GOLD}
//                                     onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
//                                 <button style={{ background: `linear-gradient(135deg,${GOLD},${GOLD_LIGHT})`, border: "none", borderRadius: 6, padding: "10px", fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a1628", cursor: "pointer", transition: "opacity 0.2s" }}
//                                     onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
//                                     onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
//                                     Subscribe
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Bottom bar */}
//                     <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
//                         <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
//                             © 2025 Atithi Travel Yatra. All rights reserved. | Made with ♥ in India
//                         </p>
//                         <div style={{ display: "flex", gap: 24 }}>
//                             {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(l => (
//                                 <a key={l} href="#" style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
//                                     onMouseEnter={e => e.currentTarget.style.color = GOLD}
//                                     onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}>{l}</a>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     )
// }

// export default Footer



import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const FOOTER_CSS = `
  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 48px;
    margin-bottom: 48px;
  }

  .footer-bottom {
    border-top: 0.5px solid rgba(255,255,255,0.06);
    padding-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  .footer-links {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }

  .footer-social {
    display: flex;
    gap: 10px;
  }

  @media (max-width: 1024px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr !important;
      gap: 36px !important;
    }
  }

  @media (max-width: 640px) {
    .footer-grid {
      grid-template-columns: 1fr !important;
      gap: 32px !important;
    }

    .footer-bottom {
      flex-direction: column !important;
      text-align: center !important;
      gap: 16px !important;
    }

    .footer-links {
      justify-content: center !important;
      gap: 16px !important;
    }

    .footer-social {
      justify-content: center !important;
    }

    .footer-root {
      padding: 40px 1.2rem 24px !important;
    }
  }
`;

const Footer = () => {
    const TEAL = "#0F5E6A";
    const GOLD = "#C9963A";
    const GOLD_LIGHT = "#E8B455";

    return (
        <div>
            <style>{FOOTER_CSS}</style>

            <footer className="footer-root" style={{ background: "#060f1e", borderTop: `1px solid rgba(201,150,58,0.1)`, padding: "60px 2rem 32px" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                    <div className="footer-grid">

                        {/* ── Brand ── */}
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 600, color: "#fff", letterSpacing: "0.1em" }}>ATITHI</span>
                                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase" }}>TRAVEL YATRA</span>
                                </div>
                            </div>
                            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.9, maxWidth: 280, marginBottom: 24 }}>
                                Discover. Explore. Journey. — Crafting unforgettable Indian travel experiences since 2013.
                            </p>
                            <div className="footer-social">
                                {[<FaFacebook />, <FaInstagram />, <FaTwitter />, <FaYoutube />].map((icon, index) => (
                                    <a key={index} href="#"
                                        style={{ width: 36, height: 36, borderRadius: "50%", border: "0.5px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit',sans-serif", fontSize: 22, fontWeight: 700, color: "rgba(255,255,255,0.5)", textDecoration: "none", textTransform: "uppercase", transition: "all 0.2s" }}
                                        onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
                                        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}>
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* ── Quick Links & Tours ── */}
                        {[
                            { title: "Quick Links", items: ["About Us", "Destinations", "Packages", "Services", "Blog", "Contact"] },
                            { title: "Tours", items: ["Pilgrimage Yatras", "Adventure Trips", "Honeymoon", "Family Holidays", "Group Travel", "Corporate"] },
                        ].map(col => (
                            <div key={col.title}>
                                <h5 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD, marginBottom: 20 }}>{col.title}</h5>
                                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                                    {/* {col.items.map(item => (
                                        <li key={item}>
                                            <a href="#"
                                                style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                                                onMouseEnter={e => e.currentTarget.style.color = GOLD_LIGHT}
                                                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}>
                                                {item}
                                            </a>
                                        </li>
                                    ))} */}
                                    {col.items.map(item => (
                                        <li key={item}>
                                            <Link
                                                to={
                                                    item === "About Us" ? "/about" :
                                                        item === "Destinations" ? "#" :
                                                            item === "Packages" ? "#" :
                                                                item === "Services" ? "/services" :
                                                                    item === "Blog" ? "/about" :
                                                                        item === "Contact" ? "/contact" : "/"
                                                }
                                                className="text-[13px] text-white/50 hover:text-amber-400 transition-colors"
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* ── Newsletter ── */}
                        <div>
                            <h5 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD, marginBottom: 20 }}>Newsletter</h5>
                            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: 16 }}>
                                Get exclusive travel deals and inspiration delivered to your inbox.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                <input
                                    placeholder="Your email address"
                                    style={{ background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "10px 14px", fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "#fff", width: "100%", transition: "border-color 0.2s", outline: "none" }}
                                    onFocus={e => e.target.style.borderColor = GOLD}
                                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
                                <button
                                    style={{ background: `linear-gradient(135deg,${GOLD},${GOLD_LIGHT})`, border: "none", borderRadius: 6, padding: "10px", fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a1628", cursor: "pointer", transition: "opacity 0.2s" }}
                                    onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
                                    onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ── Bottom Bar ── */}
                    <div className="footer-bottom">
                        <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
                            © 2025 Atithi Travel Yatra. All rights reserved. | Made with ♥ in India
                        </p>
                        <div className="footer-links">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(l => (
                                <a key={l} href="#"
                                    style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
                                    onMouseEnter={e => e.currentTarget.style.color = GOLD}
                                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}>
                                    {l}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer