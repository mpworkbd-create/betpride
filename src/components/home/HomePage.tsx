export default function HomePage({
  countryCode,
  countryName
}: {
  countryCode: string;
  countryName: string;
}) {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>BETPRIDE</h1>
      <p style={{ marginTop: "8px" }}>
        Country: <b>{countryName}</b> ({countryCode})
      </p>
      <button
        style={{
          marginTop: "18px",
          background: "#2563eb",
          color: "#fff",
          padding: "12px 20px",
          borderRadius: "10px",
          border: "none",
          fontWeight: "bold"
        }}
      >
        Get Bonus
      </button>
    </div>
  );
}
