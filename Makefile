git-config:
	git config --global user.email "kamthamc@users.noreply.github.com"
	git config --global user.name "Chaitanya K Kamatham"

npm-config:
	echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ./.npmrc

bootstrap:
	npm install && npm run bootstrap && npm run build

release: npm-config git-config bootstrap
	npm run publish
