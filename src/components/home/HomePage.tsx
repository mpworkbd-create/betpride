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

      <p style={{ marginTop: "8px", color: "#111827" }}>
        Country: <b>{countryName}</b> ({countryCode})
      </p>

      <p style={{ marginTop: "12px", maxWidth: 520, color: "#374151" }}>
        Your site is deployed successfully. Next step: connect Supabase and show offers.
      </p>

      <button
        style={{
          marginTop: "18px",
          background: "#2563eb",
          color: "#fff",
          padding: "12px 20px",
          borderRadius: "10px",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Get Bonus
      </button>
    </div>
  );
}
