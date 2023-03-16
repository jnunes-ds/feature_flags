import Home from "./src/screens/Home";
import { ConfigCatProvider } from "configcat-react";
import { FEATURE_FLAG_SDK_KEY } from "@env";

function App() {
  return (
    <ConfigCatProvider sdkKey={`${FEATURE_FLAG_SDK_KEY}`}>
      <Home />
    </ConfigCatProvider>
  );
}

export default App;
