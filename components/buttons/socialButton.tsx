import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ViewStyle } from 'react-native';
import FacebookIcon from '../svg/facebook';
import GoogleIcon from '../svg/google';

interface SocialButtonProps {
  type: 'face' | 'google'; //@todo add others svg social icons
  onPress: () => void;
  style?: ViewStyle;
}

export default function SocialButton({ type, onPress, style }: SocialButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {type === 'face' ?
        <FacebookIcon width='30' height='30' />
        :
        <GoogleIcon width='30' height='30' />
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
