import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@/generated/prisma";
import { updateTicket } from "../actions/update-ticket";

type TicketUpdateFormProps = {
  ticket: Ticket;
};

export function TicketUpdateForm({ ticket }: TicketUpdateFormProps) {
  return (
    <form
      action={updateTicket.bind(null, ticket.id)}
      className="flex flex-col gap-y-2"
    >
      <Label htmlFor="title">Title</Label>
      <Input type="text" name="title" id="title" defaultValue={ticket.title} />

      <Label htmlFor="content">Content</Label>
      <Textarea name="content" id="content" defaultValue={ticket.content} />

      <Button type="submit" className="cursor-pointer">
        Update
      </Button>
    </form>
  );
}
