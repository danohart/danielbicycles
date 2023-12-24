import { Container } from "react-bootstrap";
import "./style.scss";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Daniel Bicycles",
  description: "Stats for Daniel",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={oswald.className}>
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
