# Using 7.18.0
# npm install @openapitools/openapi-generator-cli -g

FILE_NAME="swagger5.6.json"
NEW_VERSION="7.1.0"
GENERATOR="openapi-generator-cli-7.18.0.jar"

if [ ! -f ".swagger/$FILE_NAME" ]; then
    echo "Ошибка: .swagger/$FILE_NAME не найден!"
    exit 1
fi

if [ ! -f "genConfig.yml" ]; then
    echo "Ошибка: genConfig.yml не найден!"
    exit 1
fi

echo "Начало генерации JS API клиента..."

# Обновление версии в genConfig.yml
sed -i "s/\projectVersion: \".*\"/\projectVersion: \"$NEW_VERSION\"/" genConfig.yml

# Очистка предыдущей генерации
echo "Очистка предыдущей генерации..."
rm -rf new
rm -rf node_modules

# Генерация JS API клиента
echo "Генерация JS API клиента..."
java -jar .vendor/$GENERATOR generate \
  -i .swagger/$FILE_NAME \
  -g javascript \
  -o new \
  --skip-validate-spec \
  -c genConfig.yml

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

npm i -g typescript
npm i -g npm-dts
npm-dts generate -L debug

INDEX_DTS_PATH=index.d.ts

# Постобработка index.d.ts
if [ -f "$INDEX_DTS_PATH" ]; then
    echo "Постобработка $INDEX_DTS_PATH..."

    # 1. Удаляем строки, соответствующие регулярке export type .* = any;
    sed -i '/^[[:space:]]*export type .* = any;$/d' "$INDEX_DTS_PATH"

    # 2. Заменяем все <module> на <any>
    sed -i 's/<module>/<any>/g' "$INDEX_DTS_PATH"

    # 3. Заменяем getActualInstance(): (module: model) => any; на getActualInstance(): (module: any) => any;
    sed -i 's/getActualInstance(): (module: model) => any;/getActualInstance(): (module: any) => any;/g' "$INDEX_DTS_PATH"

    # 4. Удаляем "| ObjectFunction"
    sed -i 's/| ObjectFunction//g' "$INDEX_DTS_PATH"

    # 5. Заменяем module: model на module: any
    sed -i 's/module: model/module: any/g' "$INDEX_DTS_PATH"

    echo "Постобработка $INDEX_DTS_PATH завершена."
else
    echo "Файл index.d.ts не найден. Пропуск постобработки."
fi

npm i
npm run test
