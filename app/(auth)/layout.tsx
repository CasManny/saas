type Props = {
  children: React.ReactNode;
};
const AuthLayout = ({ children }: Props) => {
  return <div className="h-full items-center justify-center flex">{children}</div>;
};

export default AuthLayout;
