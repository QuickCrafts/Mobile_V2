import React from 'react';
import { Image, SafeAreaView, View, StyleSheet } from 'react-native';
import globalStyles from '@/styles/stylesGlobal';
import ShadowsUp from '../svg/shadows_up';
import ShadowsDown from '../svg/shadows_down';
import BackgroundIcon from '../svg/backgroundIcon';


export default function Background({
  children,
  hasIcon = false,
  position = 'up',
  hasWaterMark = false,
}: {
  children: React.ReactNode,
  position: 'up' | 'down',
  hasIcon?: boolean,
  hasWaterMark?: boolean,
}) {
  return (
    <SafeAreaView style={globalStyles.Base}>
      <ShadowsUp />
      <ShadowsDown />
      {hasWaterMark && <BackgroundIcon />}

      <View style={styles.container}>
        {hasIcon &&
          <Image
            source={require('@/assets/images/App_icon_v1.png')}
            style={styles.icon}
          />}
      </View>

      <View style={position === 'up' ? globalStyles.BaseUp : globalStyles.BaseDown}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
    padding: 20,
  },
  icon: {
    width: 30,
    height: 30,
    padding: 20,
  },
});