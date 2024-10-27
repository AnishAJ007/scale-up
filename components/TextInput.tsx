import { Entypo, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

interface InputProps extends TextInputProps {
  isPassword?: boolean;
}

const TextInputUI = ({
  value,
  onChangeText,
  isPassword = false,
  placeholder,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.row}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={showPassword}
        maxLength={props.maxLength}
      />
      {isPassword && (
        <Entypo
          name={!showPassword ? "eye-with-line" : "eye"}
          size={20}
          onPress={() => {
            setShowPassword((prev) => !prev);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    flex: 1,
  },
  row: {
    paddingHorizontal: 15,
    minHeight: 40,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D6D6D633",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      height: 4,
      width: 4,
    },
  },
});

export default TextInputUI;
