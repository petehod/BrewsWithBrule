import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { PostCard } from "../components/Posts/PostCard";

export default function Page() {
  return (
    <View style={styles.container}>
      <PostCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  homeTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 16,
  },
});
