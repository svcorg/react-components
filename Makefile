git-config:
	git config --global user.email "kamthamc@users.noreply.github.com"
	git config --global user.name "Chaitanya K Kamatham"

bootstrap:
	npm install && npm run bootstrap && npm run build

release: git-config bootstrap
	npm run publish
