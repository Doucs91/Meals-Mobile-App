import React from "react";
import { View, Text, StyleSheet, Button, Platform} from "react-native";
import Colors from "../constants/Colors";

const CategoryMealScreen = (props) => {
  const categoty = props.navigation.getParam("category");
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Text>{categoty.title}</Text>
      <Button
        title="Go to Meal Detail"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoty = navigationData.navigation.getParam("category");
  return {
    headerTitle: categoty.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
