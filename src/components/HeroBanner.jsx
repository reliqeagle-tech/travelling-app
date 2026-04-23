import React from 'react'

const HeroBanner = () => {
    const [ref, vis] = useReveal();
    const [active, setActive] = useState(null);
    
    return (
        <div>
            <section style={{ position: "relative", height: 480, overflow: "hidden", display: "flex", alignItems: "center" }}>
                {/* BG image */}
                <div style={{ position: "absolute", inset: 0 }}>
                    <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80" alt=""
                        style={{ width: "100%", height: "100%", objectFit: "cover", animation: "heroImgKen 14s ease-in-out infinite alternate" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(250,248,244,0.92) 0%, rgba(250,248,244,0.75) 40%, rgba(15,94,106,0.25) 100%)" }} />
                    {/* Bottom fade */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to top,#faf8f4,transparent)" }} />
                </div>

                {/* Decorative rotating ring */}
                <div className="anim-spin" style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", width: 280, height: 280, borderRadius: "50%", border: "1px dashed rgba(201,150,58,0.25)", pointerEvents: "none" }}>
                    <div style={{ position: "absolute", inset: 30, borderRadius: "50%", border: "0.5px solid rgba(15,94,106,0.12)" }} />
                </div>

                {/* Content */}
                <div style={{ position: "relative", zIndex: 2, padding: "0 8%", maxWidth: 780 }}>
                    <div className="anim-fade-up d1">
                        <Tag>Our Services</Tag>
                    </div>
                    <h1 className="font-display anim-fade-up d2" style={{ fontSize: "clamp(44px,6vw,80px)", fontWeight: 300, lineHeight: 1.05, color: "#0a1628", marginBottom: 8 }}>
                        Journeys Crafted<br />
                        <em style={{ fontWeight: 400 }}>With <span className="gold-text">Passion</span></em>
                    </h1>
                    <p className="anim-fade-up d4" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, fontWeight: 400, color: "rgba(26,26,46,0.6)", lineHeight: 1.8, maxWidth: 520, marginBottom: 36 }}>
                        From sacred pilgrimages to adrenaline-pumping adventures — explore our full spectrum of travel services crafted for every kind of wanderer.
                    </p>
                    <div className="anim-fade-up d5" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                        <a href="#services" className="btn-sweep" style={{ background: "linear-gradient(135deg,#0F5E6A,#1a8a9a)", border: "none", borderRadius: 6, padding: "13px 32px", fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff", cursor: "pointer", boxShadow: "0 6px 24px rgba(15,94,106,0.3)", textDecoration: "none", display: "inline-block", transition: "transform .2s" }}
                            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                            Explore Services
                        </a>
                        <a href="#contact" style={{ background: "transparent", border: "1.5px solid rgba(201,150,58,0.5)", borderRadius: 6, padding: "13px 32px", fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9963A", cursor: "pointer", textDecoration: "none", display: "inline-block", transition: "all .2s" }}
                            onMouseEnter={e => { e.currentTarget.style.background = "#C9963A"; e.currentTarget.style.color = "#fff"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9963A"; }}>
                            Talk to an Expert
                        </a>
                    </div>
                </div>
            </section>
            <section ref={ref} style={{ background: "#fff", borderTop: "1px solid rgba(15,94,106,0.08)", borderBottom: "1px solid rgba(15,94,106,0.08)", padding: "32px 8%" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
                    {STATS.map((s, i) => (
                        <div key={s.label} className={`stat-tile reveal ${vis ? "vis" : ""}`}
                            style={{ textAlign: "center", padding: "16px 24px", borderRight: i < 3 ? "1px solid rgba(15,94,106,0.08)" : "none", transitionDelay: `${i * 0.08}s` }}>
                            <div className="font-display" style={{ fontSize: 42, fontWeight: 600, color: "#0F5E6A", lineHeight: 1 }}>{s.value}</div>
                            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(26,26,46,0.45)", marginTop: 6 }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>
            <section ref={ref} style={{ background: "#fff", padding: "90px 8%" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
                        {/* Left text */}
                        <div className={`rev-l ${vis ? "vis" : ""}`}>
                            <Tag>Most Popular</Tag>
                            <h2 className="font-display" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 300, color: "#0a1628", lineHeight: 1.1, marginBottom: 18 }}>
                                Pilgrimage Tours<br /><em style={{ color: "#0F5E6A" }}>Across Sacred India</em>
                            </h2>
                            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: "rgba(26,26,46,0.58)", lineHeight: 1.85, marginBottom: 28 }}>
                                Bodh Gaya — our home — is one of the most sacred Buddhist sites on Earth. As local experts, we offer unmatched pilgrimage experiences from here to every major holy site across India, with deep cultural knowledge and compassionate guidance.
                            </p>
                            {/* Feature list */}
                            {["Expert religious guides with deep scriptural knowledge", "Private AC vehicles & premium accommodation", "24/7 support & emergency assistance", "All permits, puja arrangements handled", "Customisable departures for groups & families"].map((f, i) => (
                                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
                                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(15,94,106,0.1)", border: "1px solid rgba(15,94,106,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                                        <span style={{ color: "#0F5E6A", fontSize: 11, fontWeight: 700 }}>✓</span>
                                    </div>
                                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "rgba(26,26,46,0.65)", lineHeight: 1.6 }}>{f}</span>
                                </div>
                            ))}
                            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                                <button className="btn-sweep" style={{ background: "linear-gradient(135deg,#0F5E6A,#1a8a9a)", border: "none", borderRadius: 6, padding: "12px 28px", fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", cursor: "pointer", boxShadow: "0 6px 20px rgba(15,94,106,0.25)", transition: "transform .2s" }}
                                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-1px)"}
                                    onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                                    View Pilgrimage Packages
                                </button>
                                <button style={{ background: "transparent", border: "1px solid rgba(201,150,58,0.4)", borderRadius: 6, padding: "12px 28px", fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C9963A", cursor: "pointer", transition: "all .2s" }}
                                    onMouseEnter={e => { e.currentTarget.style.background = "#C9963A"; e.currentTarget.style.color = "#fff"; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9963A"; }}>
                                    📞 Call Now
                                </button>
                            </div>
                        </div>

                        {/* Right — image collage */}
                        <div className={`rev-r ${vis ? "vis" : ""}`} style={{ position: "relative", height: 500 }}>
                            <img src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=700&q=80" alt=""
                                style={{ position: "absolute", top: 0, right: 0, width: "72%", height: "68%", objectFit: "cover", borderRadius: 20, boxShadow: "0 20px 50px rgba(0,0,0,0.12)" }} />
                            <img src="https://images.unsplash.com/photo-1575649993993-4b62b966f77e?w=500&q=80" alt=""
                                style={{ position: "absolute", bottom: 0, left: 0, width: "58%", height: "56%", objectFit: "cover", borderRadius: 20, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }} />
                            {/* Floating badge */}
                            <div className="anim-float" style={{ position: "absolute", bottom: 100, right: "-8%", background: "linear-gradient(135deg,#0F5E6A,#1a8a9a)", borderRadius: 16, padding: "16px 20px", boxShadow: "0 16px 40px rgba(15,94,106,0.3)" }}>
                                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>Annual Travelers</div>
                                <div className="font-display" style={{ fontSize: 30, fontWeight: 600, color: "#fff", lineHeight: 1 }}>5,000+</div>
                                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "#E8B455" }}>on pilgrimage tours</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={ref} style={{ background: "linear-gradient(135deg,#f0f9fa 0%,#faf8f4 60%,#fef9f0 100%)", padding: "90px 8%" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div className={`reveal ${vis ? "vis" : ""}`} style={{ textAlign: "center", marginBottom: 60 }}>
                        <Tag>Simple Process</Tag>
                        <h2 className="font-display" style={{ fontSize: "clamp(34px,4.5vw,56px)", fontWeight: 300, color: "#0a1628", lineHeight: 1.1 }}>
                            How It <em style={{ color: "#C9963A" }}>Works</em>
                        </h2>
                        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: "rgba(26,26,46,0.5)", marginTop: 12 }}>
                            From first conversation to final destination — we keep it simple.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, position: "relative" }}>
                        {/* Connector line */}
                        <div style={{ position: "absolute", top: 40, left: "12%", right: "12%", height: 1, background: "linear-gradient(90deg,#C9963A,#0F5E6A,#C9963A)", opacity: 0.2, zIndex: 0 }} />

                        {PROCESS.map((p, i) => (
                            <div key={p.step} className={`process-card reveal ${vis ? "vis" : ""}`}
                                style={{ background: "#fff", borderRadius: 18, padding: "32px 22px", border: "1px solid rgba(15,94,106,0.08)", textAlign: "center", position: "relative", zIndex: 1, transitionDelay: `${i * 0.1}s` }}>
                                {/* Step circle */}
                                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,#0F5E6A,#1a8a9a)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", boxShadow: "0 8px 24px rgba(15,94,106,0.25)" }}>
                                    <span className="font-display" style={{ fontSize: 20, fontWeight: 600, color: "#fff" }}>{p.step}</span>
                                </div>
                                <h4 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, fontWeight: 700, color: "#0a1628", marginBottom: 10, lineHeight: 1.3 }}>{p.title}</h4>
                                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "rgba(26,26,46,0.55)", lineHeight: 1.7 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section ref={ref} style={{ background: "#0a1628", padding: "80px 8%", position: "relative", overflow: "hidden" }}>
                {/* BG decoration */}
                <div style={{ position: "absolute", right: -80, top: -80, width: 320, height: 320, borderRadius: "50%", border: "1px solid rgba(201,150,58,0.08)", pointerEvents: "none" }} />
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div className={`reveal ${vis ? "vis" : ""}`} style={{ textAlign: "center", marginBottom: 52 }}>
                        <Tag>Testimonials</Tag>
                        <h2 className="font-display" style={{ fontSize: "clamp(32px,4.5vw,52px)", fontWeight: 300, color: "#fff" }}>
                            Voices of <em style={{ color: "#C9963A" }}>Happy Travelers</em>
                        </h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
                        {testimonials.map((t, i) => (
                            <div key={t.name} className={`reveal ${vis ? "vis" : ""}`}
                                style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(201,150,58,0.15)", borderRadius: 18, padding: "30px 26px", transitionDelay: `${i * 0.1}s`, position: "relative" }}>
                                <div className="font-display" style={{ fontSize: 72, lineHeight: 0.6, color: "rgba(201,150,58,0.12)", position: "absolute", top: 20, left: 22, userSelect: "none" }}>"</div>
                                <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                                    {Array(t.stars).fill(0).map((_, j) => <span key={j} style={{ color: "#C9963A", fontSize: 14 }}>★</span>)}
                                </div>
                                <p className="font-display" style={{ fontSize: 17, fontWeight: 300, color: "rgba(255,255,255,0.82)", lineHeight: 1.65, fontStyle: "italic", marginBottom: 22 }}>"{t.text}"</p>
                                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#0F5E6A,#C9963A)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 700, color: "#fff" }}>
                                        {t.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                                    </div>
                                    <div>
                                        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 600, color: "#fff" }}>{t.name}</div>
                                        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#C9963A" }}>{t.loc}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroBanner
