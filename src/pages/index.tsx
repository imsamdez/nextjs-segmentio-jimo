import { AnalyticsBrowser } from "@segment/analytics-next";

const analytics = AnalyticsBrowser.load({
  writeKey: "", // change this to your own write key
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
