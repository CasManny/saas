import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { createProject } from "@/actions/project";
import SubmitProjectButton from "./SubmitProjectButton";

const NewProjectButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full">+</Button>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[425px] rounded-sm">
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
          <DialogDescription>
            Create a new project to get Started
          </DialogDescription>
        </DialogHeader>
        <form action={createProject}>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Project Name" />
          <Label htmlFor="url">Url</Label>
          <Input id="url" name="url" placeholder="https://example.com" />
          <Label htmlFor="desc">Description</Label>
          <Textarea
            id="desc"
            name="description"
            placeholder="Description(optional)"
          />
          <SubmitProjectButton />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewProjectButton;
