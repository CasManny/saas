import { allProjects } from "@/actions/project";
import NewProjectButton from "@/components/NewProjectButton";
import { auth } from "@clerk/nextjs/server";

const DashboardHome = async () => {
  const projects = await allProjects();
  const { userId } = await auth();
  return <NewProjectButton />;
};

export default DashboardHome;
