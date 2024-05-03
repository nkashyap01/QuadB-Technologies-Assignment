import React from "react";
import { ShimmerContentBlock, ShimmerThumbnail } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <div className="flex pt-28  py-3 bg-[#2C333F] justify-center gap-8 flex-wrap items-center">
      {Array(10)
        .fill()
        .map((_, i) => (
          <div className="flex w-[26rem] xxl:w-[24rem]  rounded-lg overflow-hidden">
            <ShimmerContentBlock
              title
              text
              cta
              thumbnailWidth={200}
              thumbnailHeight={570}
            />
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
