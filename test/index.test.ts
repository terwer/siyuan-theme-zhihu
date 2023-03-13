import { describe, it } from "vitest"
import Theme from "~/src"

describe("test index", () => {
  it("test hello", function () {
    const theme = new Theme()
    theme.welcome()
  })
})
