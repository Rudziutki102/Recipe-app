import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { Beef, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

export const NavigationMenuDemo = () => (
  <header className="sticky w-full top-0 py-3 backdrop-blur-sm border-b">
    <div className="container max-w-screen-2xl">
      <div className="hidden md:flex ">
        <div className="flex items-center text-xl font-semibold uppercase tracking-wider">
          Fare <Beef /> <span className="text-red-800 font-bold">Well</span>
        </div>
        <nav className="flex items-center ml-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>Item One</NavigationMenuItem>
              <NavigationMenuItem>Item One</NavigationMenuItem>
              <NavigationMenuItem>Item One</NavigationMenuItem>
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
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  </header>
);
