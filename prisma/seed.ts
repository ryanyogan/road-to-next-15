import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export const tickets = [
  {
    title: "Ticket 1",
    content: "This is the content of ticket 1.",
    status: "DONE" as const,
    deadline: new Date().toISOString().split("T")[0], // Set deadline to today
    bounty: 499,
  },
  {
    title: "Ticket 2",
    content: "This is the content of ticket 2.",
    status: "OPEN" as const,
    deadline: new Date().toISOString().split("T")[0], // Set deadline to today
    bounty: 399,
  },
  {
    title: "Ticket 3",
    content: "This is the content of ticket 3.",
    status: "IN_PROGRESS" as const,
    deadline: new Date().toISOString().split("T")[0], // Set deadline to today
    bounty: 599,
  },
];

async function seed() {
  const t0 = performance.now();
  console.log("Seeding database...");

  await prisma.ticket.deleteMany();

  await prisma.ticket.createMany({
    data: tickets,
  });

  const t1 = performance.now();
  console.log(`Database seeded successfully in ${(t1 - t0).toFixed(2)} ms`);
}

seed();
