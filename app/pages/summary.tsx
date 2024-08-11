import s from "@/styles/stylesGlobal";
import { Image, Text, SafeAreaView } from "react-native";

export default function Summary() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text style={s.white}>████</Text>
      <Text style={s.grayLight}>████</Text>
      <Text style={s.grayLight2}>████</Text>
      <Text style={s.gray}>████</Text>
      <Text style={s.black}>████</Text>

      <Text style={s.primaryMain}>████</Text>
      <Text style={s.primaryDark}>████</Text>
      <Text style={s.primaryLight}>████</Text>

      <Text style={s.secondaryMain}>████</Text>
      <Text style={s.secondaryDark}>████</Text>
      <Text style={s.secondaryLight}>████</Text>

      <Text style={s.accentMain}>████</Text>
      <Text style={s.accentDark}>████</Text>
      <Text style={s.accentLight}>████</Text>

      <Text style={s.TitleBlue40px}>Title Blue 40px</Text>
      <Text style={s.TitlePurple40px}>Title Purple 40px</Text>
      <Text style={s.TitleBlack40px}>Title Black 40px</Text>

      <Text style={s.SubBlue28px}>Sub Blue 28px</Text>
      <Text style={s.SubPurple28px}>Sub Purple 28px</Text>
      <Text style={s.SubBlack28px}>Sub Black 28px</Text>

      <Text style={s.ContentBlue18px}>Content Blue 18px</Text>
      <Text style={s.ContentPurple18px}>Content Purple 18px</Text>
      <Text style={s.ContentBlack18px}>Content Black 18px</Text>

      <Text style={s.MiniBlue14px}>Mini Blue 14px</Text>
      <Text style={s.MiniPurple14px}>Mini Purple 14px</Text>
      <Text style={s.MiniBlack14px}>Mini Black 14px</Text>
    </SafeAreaView>
  );
}
