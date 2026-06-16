#!/bin/bash

# Allegedly pm2 will not reload if the script fails
set -e

echo '[git pull]'
git pull

echo '[npm ci]'
npm ci

echo '[npm run build]'
npm run build

echo '[pm2 reload]'
pm2 reload web-server-2

echo '[ok]'
