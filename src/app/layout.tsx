import "./globals.css";
import SideBar from "components/sidebar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex">
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-scroll md:min-w-[20rem]">
            {/* Sidebar */}
            <SideBar />
          </div>

          {/* chat gpt notification thinking */}
          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
