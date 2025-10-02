#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:xmasuhai/morney-react-yarn-origin-website.git &&
git push -f git@github.com:xmasuhai/morney-react-yarn-origin-website.git master:gh-pages &&
git push -u origin master -f &&
cd - || exit
