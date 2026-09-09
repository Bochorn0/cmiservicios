#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/cmi}"
BRANCH="${DEPLOY_BRANCH:-main}"

cd "$APP_DIR"

git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"

npm ci
npm run build
pm2 restart cmi
pm2 save
