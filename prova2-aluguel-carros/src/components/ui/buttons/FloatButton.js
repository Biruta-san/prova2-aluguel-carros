import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FloatButton = ({ onPress, label = "Adicionar" }) => (
  <SafeAreaView
    edges={["bottom", "right"]}
    style={styles.container}
    pointerEvents="box-none"
  >
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 16,
    bottom: 16,
    zIndex: 1000,
    elevation: 10,
  },
  button: {
    borderRadius: 100,
    width: 100,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6495ED",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default FloatButton;
