import { LucideLoaderCircle } from "lucide-react";

export function Spinner() {
  return (
    <div
      className="flex-1 flex flex-col items-center justify-center self-center"
      role="status"
    >
      <LucideLoaderCircle className="size-16 animate-spin" />
    </div>
  );
}
