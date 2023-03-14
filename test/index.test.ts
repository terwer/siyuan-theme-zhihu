import { describe, it } from "vitest"
import Theme from "~/src/index"

describe("test theme", () => {
  it("test main", async () => {
    const theme = new Theme()
    await theme.init("node")
  })
})
