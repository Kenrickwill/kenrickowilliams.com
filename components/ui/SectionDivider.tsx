export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "0 24px",
        maxWidth: "var(--container-max)",
        margin: "0 auto",
      }}
    >
      <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.05)" }} />
      <div
        style={{
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: "rgba(59,130,246,0.4)",
        }}
      />
      <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.05)" }} />
    </div>
  );
}
