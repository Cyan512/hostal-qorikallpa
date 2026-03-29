"use client";

import Image from "next/image";
import { useState } from "react";

type SmartImageProps = {
  strapiUrl?: string;
  alt: string;
  width: number;
  height: number;
  fallback?: string;
  className?: string;
  loading?: "eager" | "lazy";
};

export default function SmartImage({
  strapiUrl,
  alt,
  width,
  height,
  fallback = "/test.webp",
  className,
  loading = "lazy",
}: SmartImageProps) {
  const [imgSrc, setImgSrc] = useState(() => {
    if (!strapiUrl) return fallback;
    return `${process.env.NEXT_PUBLIC_STRAPI_URL}${strapiUrl}`;
  });

  const isStrapi = imgSrc.includes("localhost:1337");

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      unoptimized={isStrapi}
      loading={loading}
      onError={() => {
        setImgSrc(fallback);
      }}
    />
  );
}
