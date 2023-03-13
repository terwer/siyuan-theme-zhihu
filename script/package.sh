#!/bin/sh
pnpm install
vite build

mkdir -p etc
mkdir -p temp
mkdir -p typings
pnpm vitepress:api
pnpm vitepress:prepare
vitepress build docs
echo "vercel build theme done."