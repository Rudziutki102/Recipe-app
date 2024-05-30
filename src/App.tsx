import { ThemeProvider } from "@/components/theme-provider";
import { RouterProvider } from "react-router-dom";
import { router } from "@/config";
import { NavigationMenuDemo } from "@/components/navigation";
import { ModeToggle } from "@/components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-[150vh]">
        <NavigationMenuDemo />
        <RouterProvider router={router} />
        <ModeToggle className="md:hidden fixed bottom-[5%] right-[5%]" />
      </div>
    </ThemeProvider>
  );
}

export default App;
