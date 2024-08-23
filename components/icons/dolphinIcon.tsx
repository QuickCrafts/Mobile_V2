import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function DolphinIcon({ style }: { style: any }) {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require('@/assets/images/App_icon_v1.png')} // Replace with your actual logo path
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  icon: {
    width: 50,
    height: 50,
  },
});
