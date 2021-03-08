import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#abbaab", "#ffffff"],
    title: "Hazy",
    subtitle: "비도 오고 그래서",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#636363", "#a2ab58"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#4ecdc4", "#556270"],
    title: "Drizzle",
    subtitle: "Is like rain, but gay 🏳️‍🌈",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#525252", "#3d72b4"],
    title: "Raining like a MF",
    subtitle: "For more info look outside",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#7f7fd5", "#86a8e7", "#91eae4"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman? Fuck no.",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#2980B9", "#6DD5FA", "#FFFFFF"],
    title: "Sunny as fuck",
    subtitle: "Go get your ass burnt",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#005AA7", "#FFFDE4"],
    title: "Clouds",
    subtitle: "I know, fucking boring",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#CAC531", "#F3F9A7"],
    title: "Dusty",
    subtitle: "Thanks a lot China 🖕🏻",
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist!",
    subtitle: "It's like you have no glasses on.",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
    "Mist",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 32,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    alignItems: "flex-start",
  },
  title: {
    fontWeight: "600",
    color: "white",
    fontSize: 60,
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 40,
  },
});
