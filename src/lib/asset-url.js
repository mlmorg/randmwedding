let manifest = {};
let prefix = process.env.ASSET_PREFIX || '/assets';

export default function assetUrl(name) {
  return `${prefix}/${(manifest[name] || name)}`;
}

assetUrl.init = function init(newManifest) {
  manifest = newManifest;
}
