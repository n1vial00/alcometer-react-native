import { StyleSheet } from "react-native";
import Constants from "expo-constants";


export default StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight+5,
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkModeContainer: {
    backgroundColor: '#000',
  },
  darkModeInnerContainer: {
    backgroundColor: '#000',
  },
  darkModeText: {
    color: 'green',
  },
  button: {
    backgroundColor: 'brown',
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
  selection: {
    backgroundColor: 'brown',
  },
  
});

