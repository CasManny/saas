"use client";

import { Copy } from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CopyButton = ({ text }: { text: string }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
    }
   return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className="absolute bg-white right-2 top-0 hover:bg-black" onClick={copyToClipboard}>
            <Copy className="text-black hover:text-white" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>copy code</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CopyButton;

