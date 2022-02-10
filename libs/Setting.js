export const DEFAULT_SETTING = () => ({
  paths: [""],
  tags: [],
  prevs:
  ["png"],
  origin: "png",
  column: 6,
  pixelated: true,
})

export function importSetting(hash) {
  setting = Object.assign(
    DEFAULT_SETTING(),
    hash,
  )
}
