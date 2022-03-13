import React from "react";
import Image from "next/image";
import { shimmer, toBase64 } from "@helpers/image";

const ImageComponent = ({ width, height, src, alt }) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(
        shimmer(width, height)
      )}`}
    />
  );
};

export default ImageComponent;
