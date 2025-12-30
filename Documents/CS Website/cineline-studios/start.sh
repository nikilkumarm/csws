nohup /opt/homebrew/bin/mongod \
  --dbpath "$DB_DIR" \
  --bind_ip 127.0.0.1 \
  --port 27017 \
  --logpath "$MONGO_LOG" \
  --logappend \
  >/dev/null 2>&1 &
