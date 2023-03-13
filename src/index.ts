/**
 * @packageDocumentation
 * Hello World
 */

import Hello from "~/src/hello/hello"

/**
 * 主题核心启动类
 *
 * @public
 */
class Theme {
  private hello: Hello

  constructor() {
    this.hello = new Hello()
  }

  welcome() {
    this.hello.hello()
  }
}

export default Theme
