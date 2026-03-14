import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import { Sheet, ShoppingCart, UserIcon } from "lucide-react";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart />{" "}
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/sign-in">
            <UserIcon />
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet></Sheet>
      </nav>
    </div>
  );
};

export default Menu;
