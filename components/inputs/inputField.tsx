import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import globalStyles from '@/styles/stylesGlobal';
import { colors } from '@/styles/stylesGlobal';

interface AppInputProps {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function AppInput({ placeholder, value, onChangeText, title }: AppInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={globalStyles.PlaceholderText.color}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    gap: 3,
  },
  label: {
    ...globalStyles.TitleInput,
  },
  input: {
    height: 40,
    backgroundColor: colors.background1,
    borderRadius: 5,
    paddingHorizontal: 15,
    ...globalStyles.Paragraph,
  },
});
