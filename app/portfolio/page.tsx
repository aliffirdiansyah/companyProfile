import { portfolioItems } from "@/data/portfolio";
import Navbar from "@/components/Navbar";

export default function PortfolioPage() {
  return (
    <>
    <Navbar />
 <main
      style={{
        minHeight: "100vh",
        background: "#0a0e1a",
        padding: "120px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
          <p
            style={{
              color: "#06d6a0",
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Portfolio
          </p>

          <h1
            style={{
              fontSize: "clamp(36px,5vw,56px)",
              marginTop: "12px",
            }}
          >
            Proyek yang Pernah Kami Kerjakan
          </h1>

          <p
            style={{
              maxWidth: "600px",
              margin: "20px auto 0",
              opacity: 0.7,
            }}
          >
            Beberapa contoh website dan aplikasi yang telah kami bangun.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "24px",
          }}
        >
          {portfolioItems.map((item) => (
           <div
            key={item.id}
            style={{
                background: "#141927",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,.06)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
            }}
            >
            <img
                src={item.image}
                alt={item.title}
                style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                }}
            />

            <div
                style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
                }}
            >
                <span
                style={{
                    color: "#06d6a0",
                    fontSize: "12px",
                }}
                >
                {item.category}
                </span>

                <h3
                style={{
                    marginTop: "10px",
                    marginBottom: "12px",
                }}
                >
                {item.title}
                </h3>

                <p
                style={{
                    opacity: 0.7,
                    lineHeight: 1.7,
                }}
                >
                {item.description}
                </p>

                <div
                style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                    marginTop: "16px",
                }}
                >
                {item.tech.map((tech) => (
                    <span
                    key={tech}
                    style={{
                        padding: "6px 10px",
                        borderRadius: "999px",
                        background: "rgba(59,130,246,.15)",
                        fontSize: "12px",
                    }}
                    >
                    {tech}
                    </span>
                ))}
                </div>

                {/* Push button ke bawah */}
                <div style={{ marginTop: "auto", paddingTop: "24px" }}>
                <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    padding: "14px",
                    borderRadius: "12px",
                    background: "#22c55e",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 600,
                    transition: "all .2s ease",
                    }}
                >
                    Lihat Website →
                </a>
                </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    </>
   
  );
}