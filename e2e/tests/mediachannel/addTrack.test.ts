import { peer, sleep, waitVideoPlay } from "../fixture";

describe("mediachannel_addTrack", () => {
  it(
    "mediachannel_addTrack_answer",
    async () =>
      new Promise<void>(async (done) => {
        if (!peer.connected) await new Promise<void>((r) => peer.on("open", r));
        await sleep(100);

        const offer = await peer.request("mediachannel_addTrack_answer", {
          type: "init",
        });

        const pc = new RTCPeerConnection({
          iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
        });
        pc.onicecandidate = ({ candidate }) => {
          peer
            .request("mediachannel_addTrack_answer", {
              type: "candidate",
              payload: candidate,
            })
            .catch(() => {});
        };
        pc.ontrack = async ({ track }) => {
          await waitVideoPlay(track);
          await peer.request("mediachannel_addTrack_answer", {
            type: "done",
          });
          pc.close();
          done();
        };

        await pc.setRemoteDescription(offer);
        await pc.setLocalDescription(await pc.createAnswer());

        peer
          .request("mediachannel_addTrack_answer", {
            type: "answer",
            payload: pc.localDescription,
          })
          .catch(() => {});
      }),
    10 * 1000,
  );

  it(
    "mediachannel_addTrack_offer",
    async () =>
      new Promise<void>(async (done) => {
        if (!peer.connected) await new Promise<void>((r) => peer.on("open", r));
        await sleep(100);

        await peer.request("mediachannel_addTrack_offer", {
          type: "init",
        });

        const pc = new RTCPeerConnection({
          iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
        });
        pc.ontrack = async ({ track }) => {
          await waitVideoPlay(track);
          await peer.request("mediachannel_addTrack_offer", {
            type: "done",
          });
          pc.close();
          done();
        };
        pc.onicecandidate = ({ candidate }) => {
          peer
            .request("mediachannel_addTrack_offer", {
              type: "candidate",
              payload: candidate,
            })
            .catch(() => {});
        };

        pc.addTransceiver("video", { direction: "recvonly" });

        await pc.setLocalDescription(await pc.createOffer());
        const answer = await peer.request("mediachannel_addTrack_offer", {
          type: "offer",
          payload: pc.localDescription,
        });
        await pc.setRemoteDescription(answer);
      }),
    10 * 1000,
  );
});
