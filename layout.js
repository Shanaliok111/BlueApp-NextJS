export const metadata = {
  title: "BlueApp",
  description: "Your app is running successfully.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
