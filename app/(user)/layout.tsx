type Props = {
  children: React.ReactNode;
};
const UserLayout = ({ children }: Props) => {
  return (
    <div className="container w-full max-w-screen-xl mx-auto py-10">
      {children}
    </div>
  );
};

export default UserLayout;
