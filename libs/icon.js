import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import _ from "lodash"

export function Init() {
  library.add(fas)
}

export const ICONS = _.uniqWith(
  Object.entries(fas).map(v => [v[1].prefix, v[1].iconName]),
  _.isEqual
)
