import { Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <nav
      aria-label="Global"
      className="mx-auto flex items-center justify-between p-6 lg:px-8"
    >
      <div className="flex lg:flex-1">
        <Link to="/" className="flex gap-4 items-center">
          <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="h-8 w-auto dark:hidden"
          />
          <span className="font-bold text-xl">Skild</span>
        </Link>
      </div>

      <Link to="/sign-in/$" className="py-2 btn-primary">
        <LogIn size={24} />
        <span>Sign in</span>
      </Link>
    </nav>
  );
};
export default Navbar;
