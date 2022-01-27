import { useWindowDimensions } from "hooks/useWindowDimensions";
import { NewTabLink } from "components/NewTabLink";
import { Box, Spinner, Image } from "theme-ui";
import { FixedSizeList as List } from "react-window";
import React from "react";
import { useThemeUI } from "theme-ui";
import { Breakpoint, useBreakpoint } from "hooks/useBreakpoint";

interface Metadata {
  image: string;
}
interface Props {
  tokens: Metadata[];
  width?: number;
  onItemClick?: (idx: number) => void;
}

interface IItemProps {
  index: number;
  data: {
    tokens: Metadata[];
    onItemClick?: (idx: number) => void;
  };
  style: React.CSSProperties;
}

const Column: React.FC<IItemProps> = ({ index, style, data }) => {
  const { tokens, onItemClick } = data;
  const token = tokens[index];
  if (!token) return null;
  return (
    <Box
      style={style}
      variant="search.nft.imageContainer"
      onClick={onItemClick ? () => onItemClick(index) : undefined}
    >
      <NewTabLink href={onItemClick ? undefined : token.image}>
        <Spinner />
        <Image
          variant="search.nft.image"
          src={token.image}
          onLoad={(e) => {
            (e.target as HTMLImageElement).previousSibling?.remove();
            (e.target as HTMLImageElement).style.display = "block";
          }}
        />
      </NewTabLink>
    </Box>
  );
};

export const NFTCarousel: React.FC<Props> = ({
  tokens,
  width,
  onItemClick,
}) => {
  const { width: windowWidth } = useWindowDimensions();
  const context = useThemeUI();
  const { theme } = context;
  const breakpoint = useBreakpoint();

  return (
    <Box
      variant="search.carouselRowScrollContainer"
      sx={{
        "> * > * > *": {
          marginLeft: ["mobile", "tablet", "desktop"],
          paddingBottom: "10px",
          paddingTop: "10px",
          height: "auto !important",
        },
        "> * > *": {
          paddingBottom: "10px",
        },
      }}
    >
      <List
        height={breakpoint == Breakpoint.DESKTOP ? "220px" : "200px"}
        itemCount={tokens.length}
        itemSize={218}
        layout="horizontal"
        // change this if you change scrollbar width
        width={width || windowWidth - 3}
        itemData={{ tokens, onItemClick }}
        style={{
          overflowX: "scroll",
          overflowY: "hidden",
          paddingRight: breakpoint == Breakpoint.DESKTOP ? "62px" : "5%",
        }}
      >
        {Column}
      </List>
    </Box>
  );
};
