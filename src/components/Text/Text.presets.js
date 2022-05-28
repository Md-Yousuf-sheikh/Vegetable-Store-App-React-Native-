import { color } from "../../theme/color";
import { typography } from "../../theme/typography";

const BASE = {
    fontFamily: typography.primary,
    fontSize: 16,

}

const BASE_BOLD = {
    fontFamily: typography.primaryBold,
    fontSize: 16,
}

const BOLD = {
    fontFamily: typography.bold,

}

export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 34,
        fontWeight: 'bold'
    },
    h2: {
        ...BOLD,
        fontSize: 28,
        fontWeight: 'bold'
    },
    h3: {
        ...BASE_BOLD,
        fontSize: 22,
        fontWeight: 'bold'
    },
    h4: {
        ...BASE,
        fontSize: 18
    },
    small: {
        ...BASE,
        fontSize: 17
    }
}