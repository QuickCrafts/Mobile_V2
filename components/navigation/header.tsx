import React from 'react';
import { Image, SafeAreaView, ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '@/styles/stylesGlobal';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from './drawerNavigator';

export default function Header({
  hasIcon = true,
  hasMenu = false,
  navigation
}: {
  hasIcon?: boolean,
  hasMenu?: boolean,
  navigation: DrawerNavigationProp<DrawerParamList>
}) {
  return (
    <SafeAreaView style={styles.container}>
      {hasMenu &&
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <View style={styles.menuIconContainer}>
          <View style={styles.menuIconRow}>
            <View style={styles.menuCircle} />
            <View style={styles.menuCircle} />
          </View>
          <View style={styles.menuIconRow}>
            <View style={styles.menuCircle} />
            <View style={styles.menuCircle} />
          </View>
        </View>
        </TouchableOpacity>}
      {hasIcon &&
        <Image
          source={require('@/assets/images/App_icon_v1.png')}
          style={styles.icon}
        />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    paddingTop: 40,
  },
  icon: {
    width: 27,
    height: 27,
    marginRight: 20,
  },
  menuIconContainer: {
    gap: 6,
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  menuIconRow: {
    gap: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuCircle: {
    width: 4,
    height: 4,
    borderRadius: 4 / 2,
    backgroundColor: colors.primaryMain,
  }
});