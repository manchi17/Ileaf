import React from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import { COLORS } from "../styles/colors";
import { common } from "../styles/common";

export default function FullscreenLoader() {
  return (
    <SafeAreaView style={common.centeredContainer}>
      <ActivityIndicator color={COLORS.black} size={"large"} />
    </SafeAreaView>
  );
}