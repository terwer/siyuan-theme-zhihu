# Copyright (c) 2022 Terwer Authors. All Rights Reserved.
# @author terwer on 2023/3/8
# ========================================================
import os

import scriptutils

if __name__ == "__main__":
    # 切换工作空间
    scriptutils.switch_workdir()

    # clean root build
    scriptutils.rm_files("./theme.d.ts")
    scriptutils.rm_files("./theme.d.ts.map")

    # clean src build
    scriptutils.rm_files("./src/**/*.map")
    scriptutils.rm_files("./src/**/*.map")
    scriptutils.rm_files("./src/**/*.map")


    # none default dts
    scriptutils.rm_files("./typings/*alpha.d.ts")
    scriptutils.rm_files("./typings/*beta.d.ts")
    scriptutils.rm_files("./typings/*public.d.ts")

    # formatter
    os.system("pnpm prettier")
    os.system("pnpm lint:fix")
    print("cleaned.")