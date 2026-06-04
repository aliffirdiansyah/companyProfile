import { config } from "@/data/config";

export default function Hero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "120px", paddingBottom: "100px", background: "#0a0e1a" }}>
      
      {/* Orbs */}
      <div style={{ position: "absolute", width: 520, height: 520, borderRadius: "9999px", filter: "blur(90px)", opacity: 0.35, background: "#3b82f6", top: "-160px", left: "-160px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 420, height: 420, borderRadius: "9999px", filter: "blur(90px)", opacity: 0.3, background: "#06d6a0", bottom: "-160px", right: "-160px", pointerEvents: "none" }} />

      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: "760px" }}>

          <p style={{ color: "#06d6a0", letterSpacing: "2.5px", textTransform: "uppercase", fontWeight: 700, fontSize: "12px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#06d6a0", display: "inline-block" }} />
            JASA PEMBUATAN &amp; PERBAIKAN WEBSITE
          </p>

          <h1 style={{ fontSize: "clamp(38px,6vw,72px)", lineHeight: 1.1, fontWeight: 700, marginBottom: "24px", fontFamily: "var(--font-sora)" }}>
            {config.heroTitle}
          </h1>

          <p style={{ fontSize: "clamp(15px,2vw,20px)", lineHeight: 1.75, color: "rgba(232,236,244,0.75)", marginBottom: "40px", maxWidth: "560px" }}>
            {config.heroSubtitle}
          </p>

          <div style={{ display: "flex", gap: "14px", marginBottom: "64px", flexWrap: "wrap" }}>
            <a href="#kontak" style={{ background: "linear-gradient(135deg,#3b82f6,#2563eb)", padding: "15px 32px", borderRadius: "14px", fontWeight: 600, fontSize: "15px", color: "#fff", textDecoration: "none", display: "inline-block" }}>
              Konsultasi Gratis
            </a>
            <a href="#layanan" style={{ padding: "15px 32px", borderRadius: "14px", border: "1px solid rgba(255,255,255,.15)", fontSize: "15px", color: "#e8ecf4", textDecoration: "none", display: "inline-block" }}>
              Lihat Layanan
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))", gap: "32px", maxWidth: "580px" }}>
            <Stat value="5" label="Proyek Selesai" />
            <Stat value="98%" label="Klien Puas" />
            <Stat value="5+" label="Tahun Pengalaman" />
            <Stat value="24/7" label="Support" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div style={{
        fontSize: "clamp(32px,4vw,50px)",
        fontWeight: 700,
        fontFamily: "var(--font-sora)",
        background: "linear-gradient(135deg,#3b82f6,#06d6a0)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}>
        {value}
      </div>
      <div style={{ color: "rgba(232,236,244,0.6)", marginTop: "6px", fontSize: "13px" }}>{label}</div>
    </div>
  );
}