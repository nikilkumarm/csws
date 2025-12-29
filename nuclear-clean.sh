#!/bin/bash

set -e

COMP_DIR="app/components"
BACKUP_DIR="backups/components"
TS=$(date +%s)

echo "📦 Backing up components to $BACKUP_DIR/backup.$TS ..."
mkdir -p "$BACKUP_DIR"
cp -a "$COMP_DIR" "$BACKUP_DIR/backup.$TS"

echo "🧼 Cleaning JSX files in $COMP_DIR ..."

find "$COMP_DIR" -type f -name "*.jsx" | while read file; do
  tmp=$(mktemp)
  echo " - fixing: $file"

  # Remove dquote>, >, stray prompts AND duplicate imports
  awk '
    BEGIN { hasImage=0 }
    /^ *dquote>/ { next }
    /^ *>+$/ { next }
    NF==0 { blank++ ; if(blank>1) next; print ""; next }
    {
      blank=0
      if ($0 ~ /^import Image from "next\/image"/) {
        if(!hasImage) {
          print $0
          hasImage=1
        }
      } else {
        print $0
      }
    }
  ' "$file" > "$tmp"

  mv "$tmp" "$file"
done

echo "🧹 Cleaning Next.js build cache..."
rm -rf .next

echo "🚀 NUCLEAR CLEAN COMPLETE!"
echo "Run: npm run dev"

