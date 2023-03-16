import React from "react";
import { View, Text } from "react-native";

import styles from "./HomeScreen.styles";

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feature flags</Text>
    </View>
  );
}

export default Home;
