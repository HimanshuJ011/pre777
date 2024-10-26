export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex ">
      {/* Main Content Area with Scroll */}
      <div className="flex-grow overflow-y-auto">{children}</div>

      {/* Right Sidebar */}
      {/* <div className="w-64 pl-4 border-l h-screen overflow-y-auto  hidden sm:block">
        <nav className="pr-4 py-4">
          <h2 className="text-lg font-bold mb-4 rounded-md bg-primary p-2 text-center">
            Score
          </h2>
          <div className="border-t">
            <ul className="space-y-2 my-4 ">
              <li className="text-center p-2 bg-muted/50 rounded-md">
                Player 1: 100
              </li>
              <li className="text-center p-2 bg-muted/50 rounded-md">
                Player 2: 85
              </li>
              <li className="text-center p-2 bg-muted/50 rounded-md">
                Player 3: 70
              </li>
            </ul>
          </div>
        </nav>
      </div> */}
    </div>
  );
}
