import { Platform, View, ViewStyle } from "react-native";

export type YouTubePlayerProps = {
   style?: ViewStyle;
   videoId: string;
   autoplay?: boolean;
   controlsVisable?: boolean;
   loop?: boolean;
   mute?: boolean;
   start?: number;
   end?: number;
   modestBranding?: boolean;
   rel?: boolean; // Show related videos
};

export function YouTubePlayer({
   style,
   videoId,
   autoplay = false,
   controlsVisable = true,
   loop = false,
   mute = false,
   start,
   end,
   modestBranding = true,
   rel = false,
}: YouTubePlayerProps): JSX.Element {
   if (Platform.OS !== "web") {
      throw new Error("YouTubePlayer is for web only");
   }

   const queryParams = new URLSearchParams({
      controls: controlsVisable ? "1" : "0",
      autoplay: autoplay ? "1" : "0",
      mute: mute ? "1" : "0",
      loop: loop ? "1" : "0",
      modestbranding: modestBranding ? "1" : "0",
      rel: rel ? "1" : "0",
   });

   if (start !== undefined) queryParams.set("start", String(start));
   if (end !== undefined) queryParams.set("end", String(end));

   const url = `https://www.youtube.com/embed/${videoId}?${queryParams.toString()}`;

   return (
      <View style={style}>
         <iframe
            src={url}
            style={{
               border: "none",
               width: "100%",
               height: "100%",
               display: "block",
               overflow: "hidden",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
         ></iframe>
      </View>
   );
}

