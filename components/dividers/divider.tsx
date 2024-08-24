import { colors } from '@/styles/stylesGlobal';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Divider() {
  return <View style={styles.rectangle} />;
}

const styles = StyleSheet.create({
    rectangle: {
        width: '100%',
        height: 1,
        backgroundColor: colors.background1,
    },
});