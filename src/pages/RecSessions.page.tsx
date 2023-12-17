import { ReactNode } from "react";
import RecVideos from "globals/RecVideos.variables";

function RecSessionsPage(): ReactNode {
  return (
    <div className="w-full h-min p-8 flex flex-wrap gap-8 justify-start overflow-y-scroll no-scrollbar">
      {RecVideos.map(image => (
        <div className="flex flex-col duration-200 cursor-pointer hover:scale-105">
          <img
            src={"https://img.youtube.com/vi/" + image.videoId + "/" + image.quality + "default.jpg"}
            className="rounded-lg w-52 "
            style={{ aspectRatio: "16/9" }}
          />
          <p className="text-h2 font-dm font-bold text-center text-accent-1 pt-4">{image.date}</p>
        </div>
      ))}
    </div>
  );
}

export default RecSessionsPage;
