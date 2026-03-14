/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            {theme === "light" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            className="flex-center px-10"
            checked={theme === "light"}
            onClick={() => setTheme("light")}
          >
            <SunIcon />
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            className="flex-center px-10"
            checked={theme === "dark"}
            onClick={() => setTheme("dark")}
          >
            <MoonIcon />
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
      <Button
        variant="ghost"
        className={``}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </>
  );
};

export default ModeToggle;
