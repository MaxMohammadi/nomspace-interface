import { toast } from "react-toastify";
import { Text } from "theme-ui";
import { BlockscoutTxLink } from "components/BlockscoutTxLink";

export const toastTx = (tx: string) => {
  toast(
    <>
      <Text>Transaction completed! </Text>
      <BlockscoutTxLink tx={tx}>View on Blockscout</BlockscoutTxLink>
    </>
  );
  toast(
    <>
      <Text>
        Be patient with us! Changes can take several seconds to finalize.
      </Text>
    </>
  );
};
