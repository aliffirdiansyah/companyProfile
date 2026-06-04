import { CheckCircle, Zap, Database, Palette, Code } from "lucide-react";

export default function About() {
  return (
    <section
      id="tentang"
      style={{ padding: "128px 24px", background: "#0a0e1a" }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "64px", alignItems: "center" }}>
        
        {/* Left */}
        <div>
          <p style={{ fontSize: "12px", letterSpacing: "2.5px", textTransform: "uppercase", fontWeight: 700, color: "#06d6a0", marginBottom: "12px" }}>
            Tentang Kami
          </p>
          <h2 style={{ fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 700, marginBottom: "20px", lineHeight: 1.2, fontFamily: "var(--font-sora)" }}>
            Tim Profesional yang Berdedikasi
          </h2>
          <p style={{ color: "rgba(232,236,244,0.7)", lineHeight: 1.8, marginBottom: "28px", fontSize: "15px" }}>
            Kami adalah tim developer dan desainer berpengalaman yang fokus membantu bisnis Indonesia tampil profesional di dunia digital.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              "Developer bersertifikat dengan pengalaman 5+ tahun",
              "Menggunakan teknologi terbaru dan best practice",
              "Garansi revisi dan support pasca peluncuran",
              "Harga transparan tanpa biaya tersembunyi",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <CheckCircle size={18} color="#06d6a0" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span style={{ fontSize: "14px", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ background: "#141927", borderRadius: "20px", padding: "40px", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <Skill icon={<Zap size={28} />} title="React / Next.js" bg="rgba(59,130,246,.12)" color="#3b82f6" />
            <Skill icon={<Database size={28} />} title="Laravel / PHP" bg="rgba(6,214,160,.12)" color="#06d6a0" />
            <Skill icon={<Palette size={28} />} title="Figma / UI" bg="rgba(59,130,246,.12)" color="#3b82f6" />
            <Skill icon={<Code size={28} />} title="Full Stack Dev" bg="rgba(6,214,160,.12)" color="#06d6a0" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Skill({ icon, title, bg, color }: { icon: React.ReactNode; title: string; bg: string; color: string }) {
  return (
    <div style={{ textAlign: "center", padding: "20px 16px", borderRadius: "14px", background: bg }}>
      <div style={{ color, marginBottom: "10px", display: "flex", justifyContent: "center" }}>{icon}</div>
      <p style={{ fontSize: "13px", fontWeight: 600 }}>{title}</p>
    </div>
  );
}