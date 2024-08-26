import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import FacebookIcon from '../svg/facebook';
import GoogleIcon from '../svg/google';
import { colors } from '@/styles/stylesGlobal';

interface SocialButtonProps {
  type: 'face' | 'google'; //@todo add others svg social icons
  onPress: () => void;
  style?: ViewStyle;
  withText?: boolean;
}

export default function SocialButton({ type, onPress, style, withText = false }: SocialButtonProps) {
  return (
    <TouchableOpacity style={[withText ? styles.buttonText : styles.button, style]} onPress={onPress}>
      {type === 'face' ?
        <FacebookIcon width='30' height='30' />
        :
        <GoogleIcon width='30' height='30' />
      }
      {withText && <Text style={styles.text}>Ingresar con {type === 'face' ? 'Facebook' : 'Google'}</Text>}
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

  buttonText: {
    backgroundColor: colors.background1,
    width: "100%",
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18,
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 24,
    paddingRight: 24,
  },

  text:{
    fontSize: 23,
		fontWeight: '700',
    fontFamily: 'BalooBhai2_700Bold',
    color: colors.gray0,
  }
});
