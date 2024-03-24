import { LayoutProps } from "@/utils/interface";

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className="w-full h-screen bg-cyan-700 flex flex-col justify-center items-center">
      {children}
    </section>
  );
};

export default MainLayout;
