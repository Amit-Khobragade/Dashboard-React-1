import { ReactNode } from "react";
import Card from "./Card.component";

interface Thumbnail {
  videoId: string;
  quality: "hq" | "maxres" | "sd" | "mq";
}

interface Props {
  images: [Thumbnail, Thumbnail, Thumbnail];
  heading?: string;
  redirectText?: string;
  className?: string;
}

const ThumbnailCard = ({ images, heading, redirectText, className }: Props): ReactNode => (
  <Card className={"p-8 " + className}>
    {heading && <h2 className="text-center font-dm text-accent-1 text-h1 font-bold capitalize">{heading}</h2>}
    <div className="p-8 grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
      {images.map(image => (
        <img
          src={"https://img.youtube.com/vi/" + image.videoId + "/" + image.quality + "default.jpg"}
          className="rounded-lg w-full h-full object-fill duration-200 cursor-pointer hover:scale-105"
        />
      ))}
      <p className="place-self-center text-h2 font-dm underline text-black cursor-pointer hover:opacity-40">
        {redirectText || "watch all lectures →"}
      </p>
    </div>
  </Card>
);

export default ThumbnailCard;
