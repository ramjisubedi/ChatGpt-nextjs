import { SessionProvider } from "../../components/SessionProvider";
import "./globals.css";
import SideBar from "../../components/SideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? 'Not Login':
          <div className="flex">
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-scroll md:min-w-[20rem]">
            {/* Sidebar */}
            <SideBar />
          </div>

          {/* chat gpt notification thinking */}
          <div className="bg-[#343541] flex-1">{children}</div>
        </div>}
        
        </SessionProvider>
      </body>
    </html>
  );
}
