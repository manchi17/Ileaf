import { StyleSheet } from "react-native";
import { COLORS } from "../styles/colors";
export const common = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    backgroundColor:COLORS.white,
    paddingTop: 38,
    backgroundColor: COLORS.white,
  },
  centeredContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rowConatiner: {
   flexDirection:"row"
  },
});