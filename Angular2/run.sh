#!/bin/bash

# Install packages
npm install

# Install typings
typings install

# Transpile
./node_modules/.bin/tsc --sourcemap --module commonjs ./bin/www.ts


gulp EA2:start

# Run
DEBUG=Express-AngularJS2:* ./bin/www
