document.addEventListener('DOMContentLoaded', () => {
  const manifestUri = "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd";
  const drmLicense = "ae26845bd33038a9c0774a0981007294:63ac662dde310cfb4cc6f9b43b34196d";

  const player = new shaka.Player(document.getElementById('video'));

  // Extract keys for ClearKey DRM
  const [keyId, keyValue] = drmLicense.split(':');

  player.configure({
    drm: {
      clearKeys: {
        [keyId]: keyValue
      }
    }
  });

  player.load(manifestUri).then(() => {
    console.log("The video has successfully loaded.");
  }).catch(err => {
    console.error("Error loading video:", err);
  });
});
