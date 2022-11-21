import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 64,
    width: "90%",
    backgroundColor: "#262626",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 5,
  },
  content: {
    width: "95%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  btn: {
    height: "100%",
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  textTaskContainer: { width: "70%" },
  textTask: { color: "#F2F2F2", fontSize: 14, textAlign: "left" },
});
