# Using 7.18.0 
#npm install @openapitools/openapi-generator-cli -g

FILE_NAME=swagger.json
NEW_VERSION="7.0.0-rc5"

sed -i "s/\projectVersion: \".*\"/\projectVersion: \"$NEW_VERSION\"/" genConfig.yml


rm -rf new
openapi-generator-cli generate -i .swagger/$FILE_NAME -g javascript -o new --skip-validate-spec --type-mappings=set=Array -c genConfig.yml

cp -r new/src .
cp -r .migration/ApiClient.js src/ApiClient.js

cp -r new/docs .
cp -r new/test .

cp -r new/.babelrc .
cp -r new/mocha.opts .
cp -r new/.openapi-generator .

cp -r new/package.json package-new.json
sed -i "s/\"version\": \".*\"/\"version\": \"$NEW_VERSION\"/" package.json

cp -r new/README.MD README-NEW.MD
./update-docs.sh

# npm i
# npm run test