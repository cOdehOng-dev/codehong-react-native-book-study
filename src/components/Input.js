import { StyleSheet, TextInput } from "react-native";

const styles = ({borderColor}) => StyleSheet.create({
  textInput: {
    width: 200,
    height: 60,
    // marginTop: 5,
    // marginBottom: 5,
    margin:5,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: borderColor || "#3498db",
    fontSize: 24,
  },
});

const Input = ({borderColor}) => {
  return (
    <TextInput
      style={styles({borderColor}).textInput}
      placeholder="Enter a text..."
      placeholderTextColor={borderColor}
    ></TextInput>
  );
};

export default Input;