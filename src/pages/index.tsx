import { AnalyticsBrowser } from "@segment/analytics-next";

const analytics = AnalyticsBrowser.load({
  writeKey: process.env.NEXT_PUBLIC_SEGMENT_KEY as string,
  cdnURL: "https://proxy-segment.vercel.app/api/segment",
  // cdnURL: "http://localhost:3006/api/segment",
});

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen gap-2">
      <button
        className="py-2 px-6 bg-indigo-600 rounded-md"
        onClick={() => {
          analytics.identify("1");
        }}
      >
        Identify
      </button>
      <button
        className="py-2 px-6 bg-cyan-500 rounded-md"
        onClick={() => {
          analytics.track("Event from Next Test App");
        }}
      >
        Track
      </button>
    </div>
  );
}
