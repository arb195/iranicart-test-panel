"use client";

import Image from "next/image";
import { useRouter } from "next/router";

export default function SingeTicket() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>{id ? <p>Showing details for ticket ID: {id}</p> : <p>Loading...</p>}</>
  );
}
