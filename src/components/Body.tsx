interface BodyProps {
  children: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => (
  <div className="flex flex-col items-center w-full px-8 lg:px-12 pt-5">
    {children}
  </div>
);

export default Body;
