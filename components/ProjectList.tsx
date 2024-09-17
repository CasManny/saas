import { projects } from "@/db/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import SubscribeButton from "./SubscribeButton";
import { MONTHLY_PLAN_PRICE_ID } from "@/lib/payment";

type Props = {
  projects: (typeof projects.$inferSelect)[];
};

const ProjectList = ({ projects }: Props) => {
  return (
    <div className="container mx-10">
      <ul className="grid gap-3 grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="max-w-[350px] flex flex-col">
            <CardHeader className="flex-1">
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href={`/projects/${project.id}`}>
                <Button>View Project</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
        <SubscribeButton price={MONTHLY_PLAN_PRICE_ID} />
      </ul>

    </div>
  ); 
};

export default ProjectList;
