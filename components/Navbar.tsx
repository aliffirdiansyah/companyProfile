"use client";

import { useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { config } from "@/data/config";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/#layanan", label: "Layanan" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/#tentang", label: "Tentang" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "16px 24px",
          background: "rgba(10,14,26,0.88)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#3b82f6",
                flexShrink: 0,
              }}
            >
              <Code2 size={18} color="white" />
            </div>

            <span
              style={{
                fontFamily: "var(--font-sora)",
                fontSize: "17px",
                fontWeight: 700,
              }}
            >
              {config.companyName}
            </span>
          </Link>

          {/* Desktop */}
          <div
            className="hide-on-mobile"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: "rgba(232,236,244,0.75)",
                  textDecoration: "none",
                  fontSize: "15px",
                }}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#kontak"
              style={{
                padding: "10px 20px",
                borderRadius: "10px",
                background: "#3b82f6",
                color: "#fff",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="show-on-mobile"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "none",
              color: "#e8ecf4",
              padding: "8px",
              borderRadius: "8px",
              cursor: "pointer",
              display: "none",
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            background: "rgba(10,14,26,0.97)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: "#e8ecf4",
                fontSize: "22px",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/#kontak"
            onClick={() => setMobileOpen(false)}
            style={{
              padding: "14px 36px",
              borderRadius: "12px",
              background: "#3b82f6",
              color: "#fff",
              fontWeight: 600,
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </>
  );
}