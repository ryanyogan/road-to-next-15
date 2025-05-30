import { toast } from "sonner";
import { useActionFeedback } from "./hooks/use-action-feedback";
import { ActionState } from "./utils/to-action-state";

type FormProps = {
  action: (payload: FormData) => void;
  actionState: ActionState;
  children: React.ReactNode;
};

export function Form({ action, actionState, children }: FormProps) {
  useActionFeedback(actionState, {
    onSuccess: ({ actionState }) => {
      toast.success(actionState.message || "Ticket saved successfully!");
    },
    onError: ({ actionState }) => {
      toast.error(
        actionState.message || "An error occurred while saving the ticket."
      );
    },
  });

  return (
    <form action={action} className="flex flex-col gap-y-2">
      {children}

      <noscript>
        {actionState.status === "ERROR" && (
          <div style={{ color: "red" }}>{actionState.message}</div>
        )}

        {actionState.status === "SUCCESS" && (
          <div style={{ color: "green" }}>
            {actionState.message || "Ticket saved successfully!"}
          </div>
        )}
      </noscript>
    </form>
  );
}
