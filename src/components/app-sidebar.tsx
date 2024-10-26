import * as React from "react";

// Sample data
const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
          isActive: true,
        },
      ],
    },
  ],
};

export function AppSidebar() {
  return (
    <div className="w-64 pl-4 border-r h-screen hidden sm:block">
      <nav className="pr-4 py-4">
        <h2 className="text-lg font-bold mb-4 rounded-md bg-secondary p-2 text-center ">
          Game Predecition
        </h2>
        <div className=" border-t">
          <ul className="my-4">
            {data.navMain.map((section) => (
              <li key={section.title}>
                <a
                  href={section.url}
                  className="text-gray-600 hover:text-blue-600 font-semibold"
                >
                  {section.title}
                </a>
                <ul className="ml-2 mt-1 space-y-1">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.url}
                        className={`block text-sm ${
                          item.isActive
                            ? "text-blue-600 font-bold"
                            : "text-gray-500 hover:text-blue-500"
                        }`}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
