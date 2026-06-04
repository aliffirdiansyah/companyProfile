"use client";

import { Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "12px",
    background: "#1c2235",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#e8ecf4",
    fontSize: "15px",
    outline: "none",
    marginBottom: "16px",
    display: "block",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  return (
    <section
      id="kontak"
      style={{ padding: "128px 24px", background: "#0a0e1a" }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{
            fontSize: "12px",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#06d6a0",
            marginBottom: "12px",
          }}>
            Mulai Proyek Anda
          </p>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, marginBottom: "16px", fontFamily: "var(--font-sora)" }}>
            Hubungi Kami
          </h2>
          <p style={{ color: "rgba(232,236,244,0.6)", fontSize: "15px", lineHeight: 1.7 }}>
            Ceritakan kebutuhan Anda dan kami akan merespons dalam 24 jam
          </p>
        </div>

        {/* WhatsApp */}
        <a
          href="https://wa.me/6287786705516"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            width: "100%",
            padding: "16px",
            borderRadius: "14px",
            background: "#25D366",
            color: "#fff",
            fontWeight: 600,
            fontSize: "15px",
            textDecoration: "none",
            marginBottom: "24px",
            boxSizing: "border-box",
          }}
        >
          <MessageCircle size={20} />
          Chat WhatsApp Langsung
        </a>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px", whiteSpace: "nowrap" }}>atau kirim email</span>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
        </div>

        <a
        href="mailto:aliffirdiansyah5@gmail.com?subject=Konsultasi%20Website"
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
            padding: "16px",
            borderRadius: "14px",
            background: "linear-gradient(135deg,#3b82f6,#2563eb)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "15px",
            textDecoration: "none",
            boxSizing: "border-box",
        }}
        >
        <Send size={18} />
        Kirim via Email
        </a>

      </div>
    </section>
  );
}