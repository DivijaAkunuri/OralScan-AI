import {
  Bell,
  UserCircle2,
  LogOut
} from "lucide-react";

export default function Navbar() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav className="bg-white border-b">

      <div className="px-8 h-20 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold">
            O
          </div>

          <div>

            <h2 className="font-bold text-lg">
              OralScan AI
            </h2>

            <p className="text-xs text-gray-500">
              Clinical Dashboard
            </p>

          </div>

        </div>

        <div className="flex items-center gap-6">

          <button>
            <Bell
              size={22}
              className="text-gray-500"
            />
          </button>

          <div className="flex items-center gap-3">

            <UserCircle2
              size={36}
              className="text-primary"
            />

            <div>

              <p className="font-medium">
                {user?.name || "User"}
              </p>

              <p className="text-xs text-gray-500">
                {user?.role || "Member"}
              </p>

            </div>

          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            <LogOut size={16} />
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}