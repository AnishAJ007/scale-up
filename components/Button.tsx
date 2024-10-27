import { Pressable, PressableProps, Text } from "react-native";

interface UIPressableProps extends PressableProps {
  title?: string;
}

const UIPressable = ({ title, ...props }: UIPressableProps) => {
  return (
    <Pressable
      style={{
        backgroundColor: "#043142",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderRadius: 10,
        marginVertical: 15,
      }}
      {...props}
    >
      <Text style={{ fontSize: 18, fontWeight: "600", color: "#fff" }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default UIPressable;
