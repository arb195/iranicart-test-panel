"use client";

import { useSearchParams } from "next/navigation";
import NewTicket from "../newTicket/newTicket";
import ViewTicket from "../viewTicket/viewTicket";

export default function SingeTicket() {
  const searchParams = useSearchParams();
  const id: string | null = searchParams.get("id");

  return <>{id ? <ViewTicket /> : <NewTicket />}</>;
}
