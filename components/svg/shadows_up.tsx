import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";

const ShadowsUp = ({
  width = '390',
  height = '537',
}: {
  height?: string,
  width?: string
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 390 537"
    fill="none"
  >
    <G opacity={0.11}>
      <G filter="url(#filter0_f_27_409)">
        <Path d="M431-36v376.5L380 41 88-46.5 431-36z" fill="#0EC8E1" />
      </G>
      <G opacity={0.59} filter="url(#filter1_f_27_409)">
        <Path
          d="M404.98 43.945L474.5 478.5 352.062 139.684 74.5-83.5 404.98 43.945z"
          fill="#EAC1FF"
        />
      </G>
    </G>
    <Defs></Defs>
  </Svg>
);

export default ShadowsUp;
