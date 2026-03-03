"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Offer = {
  id: string;
  brand_name: string;
  headline: string;
  subheadline: string;
  country_code: string;
  slug: string;
  logo_url: string;
  offer_type: string;
};

export default function HomePage() {
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    async function fetchOffers() {
      const { data, error } = await supabase
        .from("offers")
        .select("*")
        .eq("country_code", "GLOBAL");

      if (error) {
        console.error(error);
      } else {
        setOffers(data || []);
      }
    }

    fetchOffers();
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        BETPRIDE – Top Global Betting Offers
      </h1>

      <div style={{ marginTop: "30px" }}>
        {offers.map((offer) => (
          <div
            key={offer.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h2>{offer.brand_name}</h2>
            <p style={{ fontWeight: "bold" }}>{offer.headline}</p>
            <p>{offer.subheadline}</p>

            <button
              style={{
                marginTop: "10px",
                background: "#2563eb",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => alert("Redirect to affiliate link")}
            >
              Get Bonus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
