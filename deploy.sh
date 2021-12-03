#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
# pushed using SSH
git push -f git@github.com:frammkor/frammkor.github.io.git master:gh-pages
cd -