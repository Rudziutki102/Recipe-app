import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { Beef, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { menuData } from "@/data/data";
export const NavigationMenuDemo = () => (
  <header className="sticky w-full top-0 py-3 backdrop-blur-sm border-b">
    <div className="container max-w-screen-2xl">
      <div className="hidden md:flex ">
        <Link className="flex items-center" to="/">
          <div className="flex items-center text-xl font-semibold uppercase tracking-wider">
            Fare <Beef /> <span className="text-red-800 font-bold">Well</span>
          </div>
        </Link>
        <nav className="flex items-center ml-4">
          <NavigationMenu>
            <NavigationMenuList>
              {menuData.map((linkItem, index) => (
                <NavigationMenuItem key={index}>
                  <Link
                    className="relative text-xl uppercase font-semibold hover:text-gray-400 transition-colors"
                    to={linkItem.link}
                  >
                    {linkItem.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="flex flex-1 justify-end">
          <div className="mr-4">
            <Input placeholder="Search" />
          </div>
          <ModeToggle />
        </div>
      </div>
      <div className="flex md:hidden">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center text-xl font-semibold uppercase tracking-wider">
            Fare <Beef /> <span className="text-red-800 font-bold">Well</span>
          </div>
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col items-start ml-4">
                  {menuData.map((linkItem) => (
                    <Link
                      className="text-xl uppercase font-semibold"
                      to={linkItem.link}
                    >
                      {linkItem.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  </header>
);
