import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MAIN_COLOR } from '../utils/colors';

const Circle = ({ content }) => {
  return (
    <View style={styles.circle}>
      {typeof content === 'string' ? (
        <Text style={styles.iconText}>{content}</Text>
      ) : (
        content
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50, // Setengah dari width atau height untuk membuat lingkaran
    backgroundColor: "#f5f5f5",
    justifyContent: 'center', // Memusatkan konten secara vertikal
    alignItems: 'center', // Memusatkan konten secara horizontal
  },
  iconText: {
    color: 'black', // Warna teks
  },
});

export default Circle;
