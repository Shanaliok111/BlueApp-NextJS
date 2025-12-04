export const metadata = {
  title: "BlueApp",
  description: "WhatsApp-style BlueApp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
