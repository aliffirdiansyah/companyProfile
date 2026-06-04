export default function Process() {
  const steps = [
    { no: "1", title: "Konsultasi", desc: "Diskusi kebutuhan dan tujuan website Anda secara mendalam", accent: false },
    { no: "2", title: "Desain", desc: "Membuat mockup dan prototype desain yang sesuai brand Anda", accent: false },
    { no: "3", title: "Development", desc: "Membangun website dengan teknologi modern dan terpercaya", accent: false },
    { no: "4", title: "Launch", desc: "Website live dan dukungan teknis berkelanjutan", accent: true },
  ];

  return (
    <section style={{ padding: "128px 24px", background: "#141927" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{ fontSize: "12px", letterSpacing: "2.5px", textTransform: "uppercase", fontWeight: 700, color: "#06d6a0", marginBottom: "12px" }}>
            Cara Kami Bekerja
          </p>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, fontFamily: "var(--font-sora)", marginBottom: "16px" }}>
            Proses Kerja Kami
          </h2>
          <p style={{ color: "rgba(232,236,244,0.6)", fontSize: "15px", maxWidth: "400px", margin: "0 auto", lineHeight: 1.7 }}>
            Proses terstruktur untuk memastikan hasil terbaik di setiap proyek
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "24px" }}>
          {steps.map((step) => (
            <div key={step.no} style={{ textAlign: "center" }}>
              <div style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                background: step.accent
                  ? "linear-gradient(135deg,#06d6a0,#059669)"
                  : "linear-gradient(135deg,#3b82f6,#2563eb)",
                boxShadow: step.accent
                  ? "0 0 24px rgba(6,214,160,0.35)"
                  : "0 0 24px rgba(59,130,246,0.35)",
              }}>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: "18px" }}>{step.no}</span>
              </div>
              <div style={{
                background: "#0a0e1a",
                borderRadius: "16px",
                padding: "24px 20px",
                border: `1px solid ${step.accent ? "rgba(6,214,160,0.15)" : "rgba(59,130,246,0.1)"}`,
              }}>
                <h4 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px", fontFamily: "var(--font-sora)" }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: "13px", color: "rgba(232,236,244,0.6)", lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}