## Setup

First, set your write key in index.tsx

```typescript
const analytics = AnalyticsBrowser.load({
  writeKey: "", // change this to your own write key
});
```

## Test

Start the app.

First, click on the "Identify" button then on the "Track" button.

Then, go to your Jimo dashboard, you should see a "Event from Next Test App" event.
