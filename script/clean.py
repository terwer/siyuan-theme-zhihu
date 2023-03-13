# Copyright (c) 2022 Terwer Authors. All Rights Reserved.
# @author terwer on 2023/3/8
# ========================================================
import os

import scriptutils

if __name__ == "__main__":
    # 切换工作空间
    scriptutils.switch_workdir()

    # none default dts
    scriptutils.rm_files("./typings/*alpha.d.ts")
    scriptutils.rm_files("./typings/*beta.d.ts")
    scriptutils.rm_files("./typings/*public.d.ts")

    # formatter
    os.system("pnpm prettier")
    os.system("pnpm lint:fix")
    print("cleaned.")