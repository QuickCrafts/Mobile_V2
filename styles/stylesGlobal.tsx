import { StyleSheet } from "react-native";

const colors = {
  background0: "#0C0911",
  background1: "#251736",
  background2: "#412368",

  gray0: "#FFFFFF",
  gray50: "#F3F4F7",
  gray100: "#E3E6EE",
  gray200: "#C3CADB",
  gray300: "#A3ACC8",
  gray400: "#8490B5",
  gray500: "#6474A2",
  gray600: "#505D84",

  lightMain: "#D8F8FC",
  lightMain2: "#E6F8FA",

  primaryMain: "#0EC8E1",
  primaryMain2: "#0FB0C6",
  primaryMain3: "#097A8A",

  secondaryLight: "#EAC1FF",
  secondaryLight2: "#F2DFFC",

  secondaryMain: "#890DE0",
  secondaryMain2: "#730EBA",
  secondaryMain3: "#4E0C7C"
};

const styles = StyleSheet.create({
  Base: {
    backgroundColor: colors.background0,
    flex: 1,
    display: 'flex',
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: 'relative', 
    overflow: 'visible',
  },
  BaseUp: {
    display: 'flex',
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: colors.gray0,
    gap: 16,
    position: 'relative', 
    padding: 20,
    width:"100%",
    flex: 1,
  },
  BaseDown: {
    display: 'flex',
    justifyContent: "flex-end",
    alignItems: "flex-start",
    color: colors.gray0,
    gap: 16,
    position: 'relative',
    padding: 20,
    paddingTop: 40,
    width:"100%",
    flex: 1,
  },
  Title: {
    fontSize: 48,
		fontWeight: '800',
    fontFamily: 'BalooBhai2_800ExtraBold',
    color: colors.gray0,
    lineHeight: 60,
  },
  Subtitle: {
    fontSize: 16,
		fontWeight: '600',
    fontFamily: 'BalooBhai2_600SemiBold',
    color: colors.gray0,
  },
  Paragraph: {
    fontSize: 18,
		fontWeight: '400',
    fontFamily: 'BalooBhai2_400Regular',
    color: colors.gray0,
  },
  ParagraphGray600: {
    fontSize: 18,
		fontWeight: '400',
    fontFamily: 'BalooBhai2_400Regular',
    color: colors.gray600,
  },
  LinkPrimary: {
    fontSize: 18,
		fontWeight: '400',
    fontFamily: 'BalooBhai2_400Regular',
    color: colors.primaryMain,
    textDecorationLine: 'underline'
  },
  LinkSecondary: {
    fontSize: 18,
		fontWeight: '400',
    fontFamily: 'BalooBhai2_400Regular',
    color: colors.secondaryMain,
    textDecorationLine: 'underline',
  },
  ParagraphSemi: {
    fontSize: 18,
		fontWeight: '500',
    fontFamily: 'BalooBhai2_500Medium',
    color: colors.gray0,
  },
  ParagraphBold: {
    fontSize: 18,
		fontWeight: '700',
    fontFamily: 'BalooBhai2_700Bold',
    color: colors.gray0,
  },
  ButtonText: {
    fontSize: 23,
		fontWeight: '700',
    fontFamily: 'BalooBhai2_700Bold',
    color: colors.gray0,
  },
  PlaceholderText: {
    fontSize: 13,
		fontWeight: '400',
    fontFamily: 'BalooBhai2_400Regular',
    color: colors.gray400,
  },
  TitleInput: {
    fontSize: 14,
		fontWeight: '500',
    fontFamily: 'BalooBhai2_500Medium',
    color: colors.gray0,
  }
});

export default styles;
export { colors };
