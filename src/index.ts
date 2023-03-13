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

  /**
   * 主流程加载
   *
   * @param runAs 运行模式
   */
  public async init(runAs?: any): Promise<void> {
    this.hello.hello()
  }
}

export default Theme
