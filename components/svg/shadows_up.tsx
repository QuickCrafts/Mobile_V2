import * as React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ShadowsUp = () => (
  <Image
    source={require('@/assets/images/shadows_up.jpg')}
    style={styles.shadowsUp}
  />
);

export default ShadowsUp;

const styles = StyleSheet.create({
  shadowsUp: {
    top: 0,
    right: 0,
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    opacity: 0.2,
  },
});