import NewProjectButton from "@/components/NewProjectButton";
import ProjectList from "@/components/ProjectList";
import { allProjects } from "@/db/queries";
import { auth } from "@clerk/nextjs/server";

const DashboardHome = async () => {
  const projects = await allProjects();
  return (
    <div className="">
      <div className="flex justify-center items-center my-5 gap-4">
        <h1 className="text-xl text-center font-bold">Project Lists</h1>
        <NewProjectButton />
      </div>
      <ProjectList projects={projects!} />
    </div>
  );
};

export default DashboardHome;
