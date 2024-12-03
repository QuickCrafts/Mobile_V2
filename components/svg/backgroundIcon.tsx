import * as React from "react";
import { StyleSheet, Image, Dimensions, View } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const BackgroundIcon = () => (
  <View style={styles.container}>
    <Image
      source={require('@/assets/images/App_icon_v1.png')}
      style={styles.shadowsUp}
    />
  </View>
);

export default BackgroundIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: windowHeight,
    width: windowWidth,
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  shadowsUp: {
    height: windowHeight + 350,
    width: windowWidth + 400,
    resizeMode: 'contain',
    opacity: 0.04,
  },
});