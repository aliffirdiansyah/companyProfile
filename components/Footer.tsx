"use client"

import { Code2, MessageCircle } from "lucide-react";
import { config } from "@/data/config";

export default function Footer() {
  return (
    <footer style={{ padding: "40px 24px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0a0e1a" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
        
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "28px", height: "28px", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center", background: "#3b82f6" }}>
            <Code2 size={14} color="white" />
          </div>
          <span style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "14px" }}>{config.companyName}</span>
        </div>

        <p style={{ color: "rgba(232,236,244,0.4)", fontSize: "13px" }}>
          © 2026 {config.companyName}. All rights reserved.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
            style={{ color: "rgba(232,236,244,0.5)", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e8ecf4")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(232,236,244,0.5)")}
            aria-label="WhatsApp">
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}