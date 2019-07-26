#!/bin/bash

export DISPLAY=:99.0;
sudo cp scripts/xvfb.init /etc/init.d/xvfb
sudo chmod +x /etc/init.d/xvfb
sudo update-rc.d xvfb defaults
sudo service xvfb start
