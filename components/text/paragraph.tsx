import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import globalStyles from '@/styles/stylesGlobal';

interface ParagraphProps {
  children: React.ReactNode;
  style?: TextStyle;
  type?: 'normal' | 'semi' | 'bold'
}

export default function Paragraph({ children, style, type = 'normal' }: ParagraphProps) {
  return (
    <Text style={[
      type === 'normal'? 
        globalStyles.Paragraph
          : type === 'semi'?
            globalStyles.ParagraphSemi
              : globalStyles.ParagraphBold, style]}>
      {children}
    </Text>
  );
}
