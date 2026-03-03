export default function HomePage({ countryName }: { countryName: string }) {
  return (
    <div style={{padding:"40px", fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:"32px", fontWeight:"bold"}}>BETPRIDE</h1>
      <h2 style={{color:"#2563eb"}}>Top Betting Offers - {countryName}</h2>
      <p>Project successfully installed. Connect Supabase to load offers.</p>
      <button style={{background:"#2563eb", color:"#fff", padding:"12px 20px", borderRadius:"8px"}}>
        Get Bonus
      </button>
    </div>
  );
}