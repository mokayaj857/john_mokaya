import { FiMoon, FiSun } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="outline" size="icon" onClick={changeTheme} className="">
        {theme === "light" ? (
            <FiMoon />
        ) : (
            <FiSun />
        )}
    </Button>
  );
}
