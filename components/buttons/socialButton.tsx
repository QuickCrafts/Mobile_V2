import { colors } from '@/styles/stylesGlobal';
import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ViewStyle } from 'react-native';

interface SocialButtonProps {
  icon: any; 
  onPress: () => void;
  style?: ViewStyle;
}

export default function SocialButton({ icon, onPress, style }: SocialButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, 
    backgroundColor: colors.background0, 
    marginHorizontal: 10, 
  },
  icon: {
    width: 45,
    height: 45,
    resizeMode: 'cover',
  },
});
