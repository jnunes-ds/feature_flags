import React from "react";
import { View, Text } from "react-native";

import styles from "./HomeScreen.styles";
import { useFeatureFlag } from "configcat-react";

function Home() {
  const { value: showEventFeatureBanner, loading } = useFeatureFlag(
    "event_feature_banner",
    false
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Carregando . . .</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feature flags</Text>
      {showEventFeatureBanner && <View style={styles.banner} />}
    </View>
  );
}

export default Home;
