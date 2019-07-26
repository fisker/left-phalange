#!/bin/bash

echo "start-xvfb.sh"
export DISPLAY=:99.0
sudo cp scripts/xvfb.init /etc/init.d/xvfb
sudo chmod +x /etc/init.d/xvfb
sudo update-rc.d xvfb defaults
sudo service xvfb start
cd /etc/init.d/
ls
echo "start-xvfb.sh:end"
