git pull
echo Building app
cd client && npm run build
pm2 restart sara