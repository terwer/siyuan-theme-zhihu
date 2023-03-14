/*
 Copyright (c) 2023 Terwer. All rights reserved.

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

/// <reference types="vite/client" />

/**
 * 预定义的环境变量
 *
 * @author terwer
 * @since 1.0.0
 */
interface ImportMetaEnv {
  VITE_LOG_STACK_SIZE: number
}

/**
 * 环境变量定义
 */
interface ImportMeta {
  readonly env: ImportMetaEnv
}
