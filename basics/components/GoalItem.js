import { View, Text, StyleSheet, Pressable } from "react-native";
const GoalItem = (props) => {
  return (
    <Pressable
      android_ripple={{ color: "blue" }}
      onPress={props.deleteGoalHandler.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "lightblue",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
