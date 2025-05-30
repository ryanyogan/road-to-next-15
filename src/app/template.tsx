import { RedirectToast } from "@/components/redirect-toast";

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <>{children}</>
      <RedirectToast />
    </>
  );
}
