"use client";
import React, { useState } from "react";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { MessageCircle, StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const Widget = () => {
  const [rating, setRating] = useState(3);
  const [submitted, setSubmitted] = useState(true)
  const [open, setOpen] = useState(false); 

  const onSelectedRating = (index: number) => {
    setRating(index + 1);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement; // Cast target as HTMLFormElement

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      feedback: (form.elements.namedItem("feedback") as HTMLTextAreaElement).value,
      rating
    };
    setSubmitted(false)
    console.log(data)

    setTimeout(() => {
      setOpen(false)
    }, 1500); 

  }
  return (
    <div className="widget fixed bottom-4 right-4 z-50">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="rounded-full shadow-lg hover:scale-105">
            <MessageCircle className="mr-2 h-5 w-5" />
            Feedback
          </Button>
        </PopoverTrigger>
        <PopoverContent className="widget rounded-lg bg-card p-4 shadow-lg w-full max-w-md">
          {submitted ? (
          <div className="">
          <h3 className="text-lg font-bold">Send your feedback</h3>
          <form className="space-y-2" onSubmit={submit}>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="feedback">Feedback</Label>
              <Textarea
                id="feedback"
                placeholder="send your feedback"
                className="min-h-[100px] resize-none"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    className={cn(
                      "h-5 w-5 cursor-pointer",
                      rating > index
                        ? "fill-primary"
                        : "fill-muted stroke-muted-foreground"
                    )}
                    onClick={() => onSelectedRating(index)}
                  />
                ))}
              </div>

              <Button>Submit</Button>
            </div>
          </form>
        </div>
          ): (
              <div className="">
                <h3 className="text-lg font-bold">Thank you for feedback</h3>
                <p className="text-muted-foreground mt-4">
                  We appreciate you feedback. It helps us improve our product and provide better service to our customers
                </p>
            </div>
          )}
          
        </PopoverContent>
      </Popover>
    </div>
  );
};
