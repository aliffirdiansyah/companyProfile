"use client"

import { Layout, Wrench, Search, Smartphone } from "lucide-react";

const services = [
  { icon: Layout, title: "Pembuatan Website", desc: "Website custom dengan desain modern, responsif, dan dioptimalkan untuk performa serta SEO.", color: "#3b82f6", bg: "rgba(59,130,246,0.12)" },
  { icon: Wrench, title: "Perbaikan Website", desc: "Fixing bug, error, masalah tampilan, dan optimasi kecepatan website Anda yang sudah ada.", color: "#06d6a0", bg: "rgba(6,214,160,0.12)" },
  { icon: Search, title: "SEO & Optimasi", desc: "Optimasi mesin pencari agar website Anda mudah ditemukan di halaman pertama Google.", color: "#3b82f6", bg: "rgba(59,130,246,0.12)" },
  { icon: Smartphone, title: "Desain UI/UX", desc: "Desain antarmuka yang intuitif dan pengalaman pengguna terbaik untuk setiap perangkat.", color: "#06d6a0", bg: "rgba(6,214,160,0.12)" },
];

export default function Services() {
  return (
    <section id="layanan" style={{ padding: "128px 24px", background: "#141927" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{ fontSize: "12px", letterSpacing: "2.5px", textTransform: "uppercase", fontWeight: 700, color: "#06d6a0", marginBottom: "12px" }}>
            Apa yang Kami Tawarkan
          </p>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, fontFamily: "var(--font-sora)", marginBottom: "16px" }}>
            Layanan Kami
          </h2>
          <p style={{ color: "rgba(232,236,244,0.6)", fontSize: "15px", maxWidth: "440px", margin: "0 auto", lineHeight: 1.7 }}>
            Solusi digital lengkap untuk kebutuhan bisnis Anda dari desain hingga pengembangan
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "20px" }}>
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                style={{
                  background: "#0a0e1a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px",
                  padding: "32px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = `${item.color}40`;
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", background: item.bg, marginBottom: "20px" }}>
                  <Icon size={22} color={item.color} />
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: 600, marginBottom: "10px", fontFamily: "var(--font-sora)" }}>
                  {item.title}
                </h3>
                <p style={{ color: "rgba(232,236,244,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}