import React from 'react';
import { Image, SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import globalStyles, { colors } from '@/styles/stylesGlobal';


export default function Background({
  children,
  hasIcon = false,
  position = 'up',
}: {
  children: React.ReactNode,
  position: 'up' | 'down',
  hasIcon?: boolean
}) {
  return (
    <SafeAreaView style={globalStyles.Base}>
      <Image
        source={require('@/assets/images/Shadows_base_up.svg')}
        style={styles.shadowsUp}
      />
      <Image
        source={require('@/assets/images/Shadows_base_down.svg')}
        style={styles.shadowsDown}
      />
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
    zIndex: 2,
  },
  icon: {
    width: 30,
    height: 30,
  },
  shadowsUp:{
    top: 0,
    right: 0,
    width: '100%',
    height: 'auto',
    zIndex: 1,
  },
  shadowsDown:{
    bottom: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    zIndex: 0,
  }
});