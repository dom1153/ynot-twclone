#!/usr/bin/env bash
cd "$(dirname $0)"
cd ..
echo "$0 : npm run dev"
npm run dev

### can't run custom port because next auth assumes port 3000...
### -- --port 3025
