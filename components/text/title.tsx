import React from 'react';
import { Text, TextStyle } from 'react-native';
import globalStyles from '@/styles/stylesGlobal';

interface TitleProps {
  children: React.ReactNode;
  style?: TextStyle;
}

export default function Title({ children, style }: TitleProps) {
  return (
    <Text style={[globalStyles.Title, style]}>
      {children}
    </Text>
  );
}
