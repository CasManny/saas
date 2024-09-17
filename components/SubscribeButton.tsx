"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useState } from "react";
import { getStripe } from "@/lib/stripe-client";

type Props = {
  price: string;
};

const SubscribeButton = ({ price }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (price: string) => {
    setLoading(true);
    try {
      const { sessionId } = await fetch("/api/stripe/checkout-session", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ price }),
      }).then((res) => res.json());

      const stripe = await getStripe();
      if (stripe) {
        stripe.redirectToCheckout({ sessionId });
      }
        setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
  };
  return <Button onClick={() => handleCheckout(price)} disabled={loading}>Subscribe</Button>;
};

export default SubscribeButton;
