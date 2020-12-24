# Put your own SARA_HOST
SARA_HOST="antoineg@10.0.0.90"
SERVICE_PATH="~/hardware-service"

rsync -a ./dist $SARA_HOST:$SERVICE_PATH
rsync ecosystem.config.js package.json package-lock.json $SARA_HOST:$SERVICE_PATH

# Remove the load-nvm script if not needed
# load-nvm.sh:
# export NVM_DIR="$HOME/.nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
ssh $SARA_HOST "cd ${SERVICE_PATH} && source ~/load-nvm.sh && npm install --production"