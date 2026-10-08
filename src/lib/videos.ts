export type Video = { title: string; year: number; youtube: string };
export type Stream = { title: string; year: number; twitch: string };

const GUILL = "https://www.twitch.tv/theguill84";

export const VIDEOS: readonly (Video | Stream)[] = [
    { title: "Twitch Plays Minecraft", year: 2025, twitch: GUILL },
    { title: "Twitch Plays Cobblemon", year: 2025, twitch: GUILL },
    { title: "Yggdrasil 2.0, The Lost Villages", year: 2024, youtube: "UNYxJkHhb8w" }
];

export const CHANNEL = "https://www.youtube.com/@hardel-dw";
