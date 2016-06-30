let manifest = {};
let prefix = '/';

export default function assetUrl(name) {
  return `${prefix}/${(manifest[name] || name)}`;
}

assetUrl.init = function init(newPrefix, newManifest) {
  prefix = newPrefix;
  manifest = newManifest;
}
