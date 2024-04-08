export enum ERover {
  CURIOSITY = "curiosity",
  OPPORTUNITY = "opportunity",
  SPIRIT = "spirit",
}

export const CURIOSITY_CAMERAS = [
  "FHAZ",
  "RHAZ",
  "MAST",
  "CHEMCAM",
  "MAHLI",
  "MARDI",
  "NAVCAM",
];
export const OPPORTUNITY_CAMERAS = [
  "FHAZ",
  "RHAZ",
  "NAVCAM",
  "PANCAM",
  "MINITES",
];
export const SPIRIT_CAMERAS = ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"];

export const ROVERS_LIST = [
  ERover.CURIOSITY,
  ERover.OPPORTUNITY,
  ERover.SPIRIT,
];
export const FILTERS_LIST = ["earth_date", "sol"];
