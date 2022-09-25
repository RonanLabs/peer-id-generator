import { createEd25519PeerId } from "@libp2p/peer-id-factory";
import { toString as uint8ArrayToString } from "uint8arrays/to-string";

const main = async () => {
  const peerId = await createEd25519PeerId();

  const data = {
    id: peerId.toString(),
    privKey: uint8ArrayToString(peerId.privateKey, "base64pad"),
    pubKey: uint8ArrayToString(peerId.publicKey, "base64pad"),
  };

  console.log(JSON.stringify(data));
};

main().catch((err) => console.log(err));
