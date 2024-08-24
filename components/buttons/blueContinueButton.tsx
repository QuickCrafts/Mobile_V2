import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import globalStyles, { colors } from '@/styles/stylesGlobal';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

export default function AppButton({ title, onPress, style }: AppButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    backgroundColor: colors.primaryMain,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    ...globalStyles.ButtonText,
  },
});
