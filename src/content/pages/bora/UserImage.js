import * as React from "react";

import use1 from "./img/use1.png";
import use2 from "./img/use2.png";
import use3 from "./img/use3.png";

import { Card, Box } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const RootStyle = styled("div")({
  display: "block",
  flexWrap: "wrap",
  gap: 12,
  justifyContent: "space-around",
  marginTop: 20,
});
const BoxStyle = styled((props) => <Box {...props} />)({
  textOverflow: "ellipsis",
  marginBottom: 10,
  overflow: "hidden",
});

// title
const CoverImgStyle = styled("img")({
  width: 280,
  height: 280,
  objectfit: "cover",
  border: "3px solid grey",
  borderRadius: 16,
  marginBottom: 20,
  "&:hover": {
    boxShadow: "4px 4px 4px grey",
    opacity: 0.7,
    cursor: "pointer",
  },
});

const TileCardStyle = styled((props) => <Card {...props} />)({
  position: "relative",
  width: 280,
  height: 280,
  border: "1px solid #eee",
  margin: "0 0 10px 45px",
  display: "inline",
});

const CaptionStyle = styled("div")({
  whiteSpace: "nowrap",
  position: "absolute",
  display: "block",
  left: 3,
  bottom: 26,
  width: 270,
  height: 100,
  padding: "10px 5px 2px",
  overflow: "hidden",
  color: "rgb(255, 255, 255)",
  backgroundColor: "rgba(22, 28, 36, 0.72)",
  borderBottomLeftRadius: 13,
  borderBottomRightRadius: 13,
});

export default function MediaCard() {
  const itemData = [
    {
      img: use1,
      title: "Breakfast",
    },
    {
      img: use2,
      title: "Breakfast",
    },
    {
      img: use3,
      title: "Breakfast",
    },
  ];
  const imgList = itemData.map((item) => (
    <TileCardStyle>
      <CoverImgStyle src={item.img} key={item.img} alt={item.title} />
      <CaptionStyle>
        <BoxStyle component="h4">{item.title}</BoxStyle>
      </CaptionStyle>
    </TileCardStyle>
  ));

  return <RootStyle>{imgList}</RootStyle>;
}
