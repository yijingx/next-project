import {inter, lusitana} from "@/app/ui/fonts";
import "@/app/ui/global.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>{children}</body>
    </html>
  );
}
