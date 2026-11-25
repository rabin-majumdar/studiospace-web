export const CATEGORIES = [
    { label: "Photo Studios", value: "Photo Studio" },
    { label: "Sound Stages", value: "Film Stage" },
    { label: "Podcast Rooms", value: "Podcast Lounge" },
    { label: "Music Suites", value: "Music Suite" },
    { label: "Art Workshops", value: "Workshop" },
] as const;

export const categoryHref = (value: string) =>
    `/studios?category=${encodeURIComponent(value)}`;