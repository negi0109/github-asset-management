import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

export function Init() {
    library.add(fas)
}

export const ICONS = Object.entries(fas).map(v => [v[1].prefix, v[1].iconName])
