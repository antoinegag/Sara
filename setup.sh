git pull
echo Installing server packages
cd backend && npm install
echo Installing client packages
cd ../client && npm install
echo Building app
npm run build