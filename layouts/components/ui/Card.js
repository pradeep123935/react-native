import { StyleSheet, View } from "react-native";
import colors from "../../constants/colors";
const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    backgroundColor: colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    //android
    elevation: 4,
    //shadow properties for ios
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
