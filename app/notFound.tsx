import Background from "@/components/backgrounds/background";
import Subtitle from "@/components/text/subtitle";
import Title from "@/components/text/title";
import React from "react";

export default function NotFound() {
  return (
    <Background position={"up"}>
      <Title>¡Ops!</Title>
      <Subtitle>Página no encontrada</Subtitle>
    </Background>
  );
}
