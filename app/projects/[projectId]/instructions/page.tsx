import CopyButton from "@/components/CopyButton";
import React from "react";
type Props = {
  params: {
    projectId: string;
  };
};

const ProjectInstructions = ({ params }: Props) => {
  return (
    <div className="container px-20">
      <h1 className="text-xl font-bold mb-2">Start collecting Feedback</h1>
      <p className="text-lg text-secondary-foreground">
        Embed the code in your site
      </p>
      <div className="bg-blue-950 p-6 rounded-md mt-6 relative">
        <code className="text-white">
          {`  const cart = [
            { name: "Apple", quantity: 2, price: 1.50 },
            { name: "Banana", quantity: 3, price: 0.75 },
            { name: "Orange", quantity: 1, price: 2.00 },
        ];`}
        </code>
        <CopyButton
          text={`  const cart = [
            { name: "Apple", quantity: 2, price: 1.50 },
            { name: "Banana", quantity: 3, price: 0.75 },
            { name: "Orange", quantity: 1, price: 2.00 },
        ];`}
        />
      </div>
    </div>
  );
};

export default ProjectInstructions;
