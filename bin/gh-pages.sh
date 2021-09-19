#!/bin/sh

if [[ $(git status -s) ]]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

echo "Deleting old publication"
rm -rf public
mkdir public
rm -rf .git/worktrees/public/

echo "Checking out gh-pages branch into public"
git worktree add -B gh-pages public origin/gh-pages

echo "Removing existing files"
rm -rf public/*

echo "Generating site"
hugo

cp _config.yml ./public/_config.yml

echo "Updating gh-pages branch"
cd public && git add --all && git commit -m ":memo:Publishing to gh-pages (publish.sh)"

echo "Push to origin"
git push origin gh-pages
