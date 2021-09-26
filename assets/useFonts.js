import * as Font from "expo-font";

export default useFonts = async () => {
  await Font.loadAsync({
    "open-sans": require("./fonts/OpenSans-Regular.ttf"),
    "opens-sans-bold": require("./fonts/OpenSans-Bold.ttf"),
  });
};
