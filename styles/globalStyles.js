import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginRight: 15,
    marginLeft: 15,
  },
  summaryLabel: {
    padding: 10,
    fontSize: 18,
    textTransform: "capitalize",
    letterSpacing: 2,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  summeryDetail: {
    padding: 10,
    fontSize: 18,
  },
});
