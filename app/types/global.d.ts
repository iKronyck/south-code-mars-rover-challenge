export type TRover = {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
};

export type TCamera = {
  id: number;
  name: string;
  full_name: string;
  rover_id: number;
};

export type TPhoto = {
  id: number;
  img_src: string;
  sol: string;
  earth_date: string;
  camera: TCamera;
  rover: TRover;
};

export type TBookmark = {
  name: string;
  camera: string;
  sol?: string;
  earth_date?: string;
};

export type BookMarkStore = {
  bookmarks: TBookmark[];
  addBookmark: (bookmark: TBookmark) => void;
};
