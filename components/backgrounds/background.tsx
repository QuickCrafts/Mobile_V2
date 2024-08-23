import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default function Background({ children }: { children: React.ReactNode }) {
  return (
    <ImageBackground
      source={require('@/assets/images/Base_inside.png')} 
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
});
