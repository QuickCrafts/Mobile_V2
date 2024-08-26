import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import globalStyles, { colors } from '@/styles/stylesGlobal';

interface UnderlinedButtonProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  type?: 'primary' | 'secondary'
}

export default function UnderlinedButton({ text, onPress, style, type = 'primary' }: UnderlinedButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={type === 'primary' ? globalStyles.LinkPrimary : globalStyles.LinkSecondary}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    textAlign: 'left',
  },
});
