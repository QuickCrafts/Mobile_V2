import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import globalStyles from '@/styles/stylesGlobal';

interface SubtitleProps {
  children: React.ReactNode;
  style?: TextStyle;
}

export default function Subtitle({ children, style }: SubtitleProps) {
  return (
    <Text style={[globalStyles.Subtitle, style]}>
      {children}
    </Text>
  );
}
