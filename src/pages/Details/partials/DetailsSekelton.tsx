import Page from '../../../components/Page';

interface DetailsSkeletonProps {
  isLoading: boolean;
  children: JSX.Element[] | JSX.Element;
}

const DetailsSkeleton: React.FC<DetailsSkeletonProps> = ({
  isLoading,
  children,
}) => {
  return (
    <Page>
      {isLoading ? (
        <>
          <div className="w-full bg-gradient-to-b from-green-700 to-blue-400 flex items-center flex-col p-7">
            <div className="h-56 w-56 bg-gray-200 rounded animate-pulse" />
            <div className="mt-5 h-12 w-64 bg-gray-200 rounded animate-pulse" />
            <div className="mt-2 h-8 w-40 bg-gray-200 rounded animate-pulse" />
          </div>
        </>
      ) : (
        children
      )}
    </Page>
  );
};

export default DetailsSkeleton;
