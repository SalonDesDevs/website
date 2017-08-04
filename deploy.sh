#!/usr/bin/env bash

npm run build
rsync -r --info=progress2 --exclude node_modules . $USER@salondesdevs.io:/var/site/
