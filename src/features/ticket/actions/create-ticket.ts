"use server";

import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { revalidatePath } from "next/cache";

export async function createTicket(formData: FormData) {
  const data = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  };

  await prisma.ticket.create({
    data: {
      title: data.title as string,
      content: data.content as string,
    },
  });

  revalidatePath(ticketsPath());
}
