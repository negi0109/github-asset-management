export const DEFAULT_SETTING = () => ({
  paths: [""],
  prevs:
  ["png"],
  origin: "png",
  column: 6,
  pixelated: true,
  stringifyFormat: "  ",
  tags: {},
  tagRelations: {},
})

export function importSetting(hash) {
  return Object.assign(
    DEFAULT_SETTING(),
    hash,
  )
}

export function exportSetting(hash) {
  return hash
}
