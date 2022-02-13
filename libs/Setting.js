import _ from "lodash"

export const DEFAULT_SETTING = () => ({
  paths: [""],
  prevs: ["png"],
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
  const tmp = _.cloneDeep(hash)
  const usedTags = _.uniq(_.flatten(Object.values(tmp.tagRelations)))
  Object.keys(tmp.tags).forEach(key => {
    if (!usedTags.includes(key)) delete tmp.tags[key]
  })

  return tmp
}
