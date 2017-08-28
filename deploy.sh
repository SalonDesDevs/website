#!/usr/bin/env bash

env NODE_ENV="production" npm run build
rsync -r --info=progress2 --exclude node_modules . $USER@salondesdevs.io:/var/site/
