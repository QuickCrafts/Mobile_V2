import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import globalStyles from '@/styles/stylesGlobal';

interface ParagraphProps {
  children: React.ReactNode;
  style?: TextStyle;
}

export default function Paragraph({ children, style }: ParagraphProps) {
  return (
    <Text style={[globalStyles.Paragraph, style]}>
      {children}
    </Text>
  );
}
