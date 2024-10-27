import { useNavigation } from 'expo-router';
import { Image } from 'expo-image';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
const imageSize = Dimensions.get('window').width * 0.9;

const ob = [
  {
    obImg: require("../assets/images/onboarding/ob_bg_one.png"),
    header: "Welcome to ScaleUp!",
    subHeader: "Your journey to focused, distraction-free learning starts here. Discover a platform designed to enhance your knowledge and keep you engaged.",
    next: require("../assets/images/onboarding/ob_next_one.png"),
  },
  {
    obImg: require("../assets/images/onboarding/ob_bg_two.png"),
    header: "Personalized Learning Paths",
    subHeader: "Set your goals and interests to receive tailored course recommendations. We curate content just to help you stay motivated and achieve your objectives.",
    next: require("../assets/images/onboarding/ob_next_two.png"),
  },
  {
    obImg: require("../assets/images/onboarding/ob_bg_three.png"),
    header: "Interactive & Engaging Features",
    subHeader: "Dive into a variety of interactive modules, quizzes, and community discussions. We make learning fun and interactive, ensuring you stay on track.",
    next: require("../assets/images/onboarding/ob_next_three.png"),
  },
  {
    obImg: require("../assets/images/onboarding/ob_bg_four.png"),
    header: "Track Your Progress",
    subHeader: "Use our analytics tools to monitor your learning journey, get detailed feedback, insights, celebrate your achievements and identify areas for improvement.",
    next: require("../assets/images/onboarding/ob_next_four.png"),
  },
]


export default function HomeScreen() {
    const navigation = useNavigation();
    const [step, setStep] = useState(0);
    
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#F5BE0026', '#F5BE00']}
        style={styles.background}
      />
      <Image style={{width: imageSize, height: imageSize}}
        source={ob[step].obImg}
      />
      <Text style={styles.header}>{ob[0].header}</Text>
      <Text style={styles.subHeader}>{ob[0].subHeader}</Text>
      <Pressable onPress={() => {
        if(step == 3){
          navigation.navigate("login");
          setStep(0);
        } else {
          setStep(prev => prev + 1);
        }
      }}>
      <Image style={{width: 60, height: 60}}
        source={ob[step].next}
      />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 10,
  },
  subHeader: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
  },
});
