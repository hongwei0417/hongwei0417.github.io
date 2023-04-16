---
# sidebar_position: 2
tags: ["frontend", "jest", "testing"]
last_update:
  date: 2023/4/16
  author: Kevin Hu
---

# Angular 設置 Jest 環境

:::tip Jest 是什麼?
[Jest](https://jestjs.io/) 是一套很多人使用的 Javascript 測試框架
由 Facebook 所開發支援 Vue, React, Angular, Node.js, Typescript, Svelte 等等
:::

## 環境設置

### Step1. 移除 Karma

移除 Angular 預設的測試框架 Karma

```bash
npm remove karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter
```

```bash
rm ./karma.conf.js ./src/test.ts
```

### Step2. 安裝 Jest

- `jest` 主要函式庫

- `jest-preset-angular` 幫助我們在 Angular 中設定 Jest 環境

- `@types/jest` 讓我們能在 Typescript 中看到可用的語法

- `@angular-builders/jest` 讓我們能透過 `ng test` 來運行 jest

```bash
npm install -D jest jest-preset-angular @types/jest @angular-builders/jest
```

### Step3. 創建 `jest.config.js`

新增 jest 主要設定檔內容

```js
module.exports = {
	preset: "jest-preset-angular",
	setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
	globalSetup: "jest-preset-angular/global-setup",
};
```

### Step4. 創建 `setup-jest.ts`

新增 jest-preset-angular 環境設定檔內容

```ts
import "jest-preset-angular/setup-jest";
```

### Step5. 修改 `tsconfig.spec.json`

typescript 編譯設定檔內容

```json {6}
{
	"extends": "./tsconfig.json",
	"compilerOptions": {
		"outDir": "./out-tsc/spec",
		"module": "CommonJs",
		"types": ["jest"],
		"emitDecoratorMetadata": true
	},
	"include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}
```

### Step6. 修改 `angular.json`

angular 專案設定檔內容

```json {2}
"test": {
  "builder": "@angular-builders/jest:run",
  "options": {
    "polyfills": [ "src/polyfills.ts" ],
    "tsConfig": "tsconfig.spec.json",
    "inlineStyleLanguage": [ "scss" ],
    "assets": [ "src/favicon.ico", "src/assets" ],
    "styles": [ "src/styles.scss" ],
    "scripts": []
  }
}
```

### Step7. 安裝 `Jest vscode extension (optional)`

若使用 vscode，可以安裝[vscode-jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)有更好的測試體驗

### Step8. 在 `package.json` 加入指令

```json
"test": "ng test",
"testw": "ng test --watch-all",
"coverage": "ng test --coverage"
```

---

## References

- [Testing Angular Faster with Jest](https://www.xfive.co/blog/testing-angular-faster-jest/)
- [Angular CLI: “ng test” with Jest in 3 minutes](https://www.justjeb.com/post/angular-cli-ng-test-with-jest)
