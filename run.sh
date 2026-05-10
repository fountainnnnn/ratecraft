#!/bin/bash
PORT=5913
echo "Starting RateCraft on port $PORT..."
lsof -ti:$PORT | xargs kill -9 2>/dev/null
npx vite --port $PORT --host 127.0.0.1
