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
    width: '90%',
    marginLeft: '5%',
    height: 50,
    backgroundColor: colors.primaryMain,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,

  },
  buttonText: {
    ...globalStyles.ButtonText,
  },
});
