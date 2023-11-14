import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const MapSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#E6E6E6" highlightColor="#969696">
      <div className="h-1/2-screen w-2/3 m-auto relative">
        <Skeleton
          style={{ width: "100%", height: "100%", borderRadius: "1.5rem" }}
        />
      </div>
    </SkeletonTheme>
  );
};
