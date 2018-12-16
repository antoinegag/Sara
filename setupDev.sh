git pull
echo Installing server packages
cd backend && npm install
echo Installing client packages
cd ../client && npm install
echo Setting environnement to dev
export NODE_ENV=dev
echo Done! Run npm start to start