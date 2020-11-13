import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  summaryContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 8,
  },
  summaryParagraphContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginRight: 15,
    marginLeft: 15,
  },
  summaryRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginRight: 15,
    marginLeft: 15,
  },
  btn: {
    width: "40%",
    backgroundColor: "green",
    color: "white",
    alignItems: "center",
    borderRadius: 5,
  },
  btnCancel: {
    width: "40%",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#e7e7e7",
    color: "black",
    borderRadius: 5,
  },
  summaryHeader: {
    marginBottom: 15,
    fontSize: 22,
  },
  thankYouText: {
    marginBottom: 15,
    fontSize: 18,
  },
  innerTextWhite: {
    color: "white",
    padding: 8,
  },
  innerText: {
    color: "black",
    padding: 8,
  },
});
