const Skeleton = ({ height = 20, width = 80 }) => (
  <div
    className="animate-pulse rounded-md bg-gray-300 my-1"
    style={{ height, width }}
  />
);

export default Skeleton;

