export default function SectionDivider() {
  return (
    <div
      style={{
        position: "relative",
        maxWidth: "1152px",
        margin: "0 auto",
        height: "1px",
        zIndex: 5,
      }}
    >
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,.05), rgba(59,130,246,.65), rgba(255,255,255,.05), transparent)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "10px",
          height: "10px",
          borderRadius: "999px",
          background: "#3b82f6",
          boxShadow:
            "0 0 12px rgba(59,130,246,.9), 0 0 24px rgba(59,130,246,.45)",
        }}
      />
    </div>
  );
}