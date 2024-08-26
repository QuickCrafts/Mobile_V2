import * as React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ShadowsDown = () => (
  <Image
    source={require('@/assets/images/shadows_down.jpg')}
    style={styles.shadowsUp}
  />
);

export default ShadowsDown;

const styles = StyleSheet.create({
  shadowsUp: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    opacity: 0.2,
  },
});