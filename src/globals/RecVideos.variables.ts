interface ThumbnailWithDate {
  videoId: string;
  quality: "hq" | "maxres" | "sd" | "mq";
  date: string;
}

const RecVideos: ThumbnailWithDate[] = [
  { quality: "maxres", videoId: "PYkBS-R95rQ", date: "16-12-2023" },
  { quality: "hq", videoId: "FhxMLb4fmqo", date: "09-12-2023" },
  { quality: "maxres", videoId: "giZYpvfpQK4", date: "02-12-2023" },
  { quality: "maxres", videoId: "PYkBS-R95rQ", date: "25-11-2023" },
  { quality: "maxres", videoId: "giZYpvfpQK4", date: "18-11-2023" },
  { quality: "maxres", videoId: "PYkBS-R95rQ", date: "11-11-2023" },
  { quality: "maxres", videoId: "giZYpvfpQK4", date: "04-11-2023" },
  { quality: "maxres", videoId: "PYkBS-R95rQ", date: "28-10-2023" },
  { quality: "maxres", videoId: "giZYpvfpQK4", date: "21-10-2023" },
  { quality: "maxres", videoId: "PYkBS-R95rQ", date: "14-10-2023" },
  { quality: "maxres", videoId: "giZYpvfpQK4", date: "07-10-2023" },
  { quality: "maxres", videoId: "PYkBS-R95rQ", date: "30-09-2023" },
  { quality: "maxres", videoId: "giZYpvfpQK4", date: "23-09-2023" },
  { quality: "maxres", videoId: "PYkBS-R95rQ", date: "16-09-2023" },
  { quality: "maxres", videoId: "giZYpvfpQK4", date: "09-09-2023" },
  { quality: "maxres", videoId: "PYkBS-R95rQ", date: "02-09-2023" },
  { quality: "maxres", videoId: "giZYpvfpQK4", date: "26-08-2023" },
];

export default RecVideos;
