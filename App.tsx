import Home from "./src/screens/Home";
import { ConfigCatProvider, PollingMode } from "configcat-react";
import { FEATURE_FLAG_SDK_KEY } from "@env";

function App() {
  return (
    <ConfigCatProvider
      sdkKey={`${FEATURE_FLAG_SDK_KEY}`}
      pollingMode={PollingMode.AutoPoll}
      options={{ pollIntervalSeconds: 10 }}
    >
      <Home />
    </ConfigCatProvider>
  );
}

export default App;
