#!/usr/bin/env sh

npm run build
git push origin --delete gh-pages
git add dist && git commit -m 'adding dist subtree'
git subtree push --prefix dist origin gh-pages
git reset --hard HEAD^1
