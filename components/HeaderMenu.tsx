import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCard, Folder, Menu } from "lucide-react";
import Link from "next/link";

const HeaderMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-5">
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={'/dashboard'} className="flex items-center">
            <Folder className="mr-2 h-5 w-5" />
            <span>Projects</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/payment" className="flex items-center">
            <CreditCard className="mr-2 h-5 w-5" />
            <span>Billing</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderMenu;
