interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => (
  <div className="flex flex-col items-center justify-center w-full h-full">
    {children}
  </div>
);

export default Page;
