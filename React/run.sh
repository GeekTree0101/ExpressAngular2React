#!/bin/bash

# Install packages
npm install

# Install typings
typings install 

# Transpile
./node_modules/.bin/tsc --sourcemap --module commonjs ./bin/www.ts

gulp ER1:start

# Run
DEBUG=Express-ReactJS:* ./bin/www
