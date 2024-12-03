import Background from "@/components/backgrounds/background";
import UnderlinedButton from "@/components/buttons/underlinesButton";
import Divider from "@/components/dividers/divider";
import Paragraph from "@/components/text/paragraph";
import Title from "@/components/text/title";
import React from "react";

export default function Settings() {
  return (
    <Background position={"up"}>
      <Title>Mi Perfil</Title>

      <Paragraph type="semi">Usuario</Paragraph>
      <Divider />
      <Paragraph type="semi">Configuración</Paragraph>

      <Divider />
      <UnderlinedButton text={"Eliminar Cuenta"} type="secondary" onPress={function (): void {
        throw new Error("Function not implemented.");
      } }/>
      <UnderlinedButton text={"Cerrar Sesión"} onPress={function (): void {
        throw new Error("Function not implemented.");
      } }/>
    </Background>
  );
}
