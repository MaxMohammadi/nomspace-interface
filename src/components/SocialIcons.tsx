import styled from "@emotion/styled";
import { Flex, Image, Text } from "theme-ui";
import DiscordIcon from "assets/discord.png";
import TwitterIcon from "assets/twitter.png";
import TelegramIcon from "assets/telegram.png";
import { NewTabLink } from "components/NewTabLink";

const Icon = styled(Image)({
  width: "46px",
  height: "46px",
  marginRight: "12px",
  padding: "7px",
  backgroundColor: "#5452FC",
  filter: "drop-shadow(0px 3px 6px #00000029)",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Website = styled(Text)({
  width: "46px",
  height: "46px",
  marginRight: "12px",
  padding: "7px",
  backgroundColor: "#5452FC",
  filter: "drop-shadow(0px 3px 6px #00000029)",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "12px",
});

interface Props {
  nom: {
    discord: string;
    twitter: string;
    telegram: string;
    website: string;
  };
}

export const SocialIcons: React.FC<Props> = ({ nom }) => {
  return (
    <Flex>
      {nom.website && (
        <NewTabLink href={nom.website}>
          <Website>WWW</Website>
        </NewTabLink>
      )}
      {nom.discord && (
        <NewTabLink href={nom.discord}>
          <Icon src={DiscordIcon} />
        </NewTabLink>
      )}
      {nom.twitter && (
        <NewTabLink href={nom.twitter}>
          <Icon src={TwitterIcon} />
        </NewTabLink>
      )}
      {nom.telegram && (
        <NewTabLink href={nom.telegram}>
          <Icon src={TelegramIcon} />
        </NewTabLink>
      )}
    </Flex>
  );
};
