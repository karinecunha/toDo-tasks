import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
  },

  listContainer: {
    backgroundColor: "#1A1A1A",
    width: "100%",
    alignItems: "center",
    flex: 3,
  },

  input: {
    backgroundColor: "#262626",
    height: 54,
    width: 272,
    borderRadius: 5,
    marginRight: 4,
    paddingLeft: 10,
    paddingRight: 10,
    color: "#F2F2F2",
  },

  containerInput: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -27,
  },

  btnPlus: {
    height: 52,
    width: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  topList: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 20,
  },

  textTopList: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#D9D9D9",
  },

  qtdeTasksContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  countTaskContainer: {
    backgroundColor: "#333333",
    width: 25,
    height: 19,
    borderRadius: 30,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  textCreated: { color: "#4EA8DE" },

  textConcluded: { color: "#8284FA" },

  separator: { width: "90%", backgroundColor: "#808080", height: 1 },

  emptyListContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },

  contentContainerStyleFlatlist: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 130,
  },
  flatlist: { width: "100%" },

  flatlistContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  imageEmptyList: { marginBottom: 20 },

  textEmptyList: { fontSize: 14, color: "#808080" },
});
