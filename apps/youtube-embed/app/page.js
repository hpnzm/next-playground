import { YouTubeEmbed } from "@next/third-parties/google";

export default function Page() {
  return (
    <YouTubeEmbed videoid="yE-YUr_a4fU" height={400} params="controls=0" />
  );
}
