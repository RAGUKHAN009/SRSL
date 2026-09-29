import "./globals.css";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
export const metadata = {
  title: "Zulfiqarabad Tournament",
  description: "Official team roster and league updates",
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="fixed">
          <div className="headerAlign">
            <div className="headerLogo">
              <Image
                src="/Logo.png"
                alt="Website Logo"
                width={100}
                height={100}
              />
            </div>
            <div className="AnnouncementCont">
              <marquee behavior="" direction="">Below Are the only OFFICIALLY ENTERED TEAMS</marquee>
            </div>
            <div className="ContactUsCont">
              <a href="https://www.instagram.com/zulfiqarabad_boy_scout_group?stkn=MXcyam1xdjJpdzQyNg==" target="_blank" rel="noreferrer">
                <FaInstagram className="InstagramIcon" />
              </a>
            </div>
          </div>
        </header>
        <main className="flex-grow pt-24"> {/* pt-24 adds padding at the top so the fixed header doesn't cover your cards */}
          {children}
        </main>
        <footer>
          <marquee behavior="" direction="">
            Want to join our LEAGUE? Join Now click on the Instagram button to stay tunned for more updates!
          </marquee>
        </footer>
      </body>
    </html>
  );
}
