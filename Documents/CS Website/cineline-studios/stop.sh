#!/bin/bash

echo "🛑 Shutting down Cineline Studios..."

# Kill Node Backend (looking for server.js)
pkill -f "node server.js" && echo "   -> Backend killed."

# Kill Next.js Frontend
pkill -f "next-server"
pkill -f "next-router-worker"
pkill -f "npm run dev" && echo "   -> Frontend killed."

echo "✅ All systems offline."
