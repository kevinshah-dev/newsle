import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

const eslintConfig = [
  {
    ignores: ["cloudflare-env.d.ts", ".open-next/**"],
  },
  ...nextVitals,
  ...nextTs,
]

export default eslintConfig
