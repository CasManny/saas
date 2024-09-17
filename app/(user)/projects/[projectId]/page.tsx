import Table from "@/components/Table";
import { Button } from "@/components/ui/button";
import { getProject } from "@/db/queries";
import { Globe } from "lucide-react";
import Link from "next/link";

type Props = {
  params: { projectId: string };
};
const ProjectId = async ({ params }: Props) => {
  const project = await getProject(parseInt(params.projectId));
  if (!project) {
    return;
  }

  return (
    <div className="container mx-auto w-full">
      <div className="">
        <div className="">
          <Link href='/dashboard'>
          <Button>Back</Button>
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-3xl font-bold mb-3">{project?.name}</h1>
            <h2 className="text-neutral-500 text-3xl mb-2">
              {project?.description}
            </h2>
          </div>
          {project?.url && (
            <Link
              href={project.url}
              className="underline text-indigo-300 flex items-center"
            >
              {" "}
              <Globe className="w-5 h-5 mr-2" />
              Visit site
            </Link>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Table data={project?.feedbacks} />
      </div>
    </div>
  );
};

export default ProjectId;
