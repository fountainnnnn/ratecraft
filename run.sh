#!/bin/bash
lsof -ti:5913 | xargs kill -9 2>/dev/null
lsof -ti:5923 | xargs kill -9 2>/dev/null
echo "Starting RateCraft..."
node server/index.cjs &
sleep 1
npx vite --port 5913 --host 127.0.0.1
