import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const ResturantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://cdn.alfabetajuega.com/wp-content/uploads/2021/08/Demon-Slayer-pord.jpg",
    ],
    address = "My house",
    openingHours = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0]}} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16 },
});
