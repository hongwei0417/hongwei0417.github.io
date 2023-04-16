---
# sidebar_position: 2
tags: ["frontend", "tailwind", "css"]
last_update:
  date: 2023/4/16
  author: Kevin Hu
---

# Tailwind 基礎介紹

:::tip Tailwind 是什麼?
[Tailwind](https://tailwindcss.com/) 是一套 _utility-first css_ 框架
透過它預定義好的 class，可以不用寫 css 就能做出漂亮的網站 :tada:
:::

## CSS 狀態

需要依據元素狀態變更指定的 style，可以使用 `:` 語法

- Pseudo-classes: `hover:<tailwind-class>` | `active:<tailwind-class>` | `focus:<tailwind-class>`

- Pseudo-elements: `before:content-[]` | `after:<tailwind-class>`

- Responsive breakpoints: `md:<tailwind-class>` | `lg:<tailwind-class>`

[Handling Hover, Focus, and Other States](https://tailwindcss.com/docs/hover-focus-and-other-states)

## 排版常用

- `flex` [Flex](https://tailwindcss.com/docs/flex)

- `grid` [Grid Template Columns](https://tailwindcss.com/docs/grid-template-columns)

- `gap` [Gap](https://tailwindcss.com/docs/gap)

- `p` [Padding](https://tailwindcss.com/docs/padding)

- `m` [Margin](https://tailwindcss.com/docs/margin)

- `space` [Space Between](https://tailwindcss.com/docs/space)

## Breakpoints

Tailwind 定義好的 Breakpoint，只需要套上 class 不需要寫任何 css 也能做 RWD :laughing:

| Breakpoint | width  |                CSS                 |
| :--------: | :----: | :--------------------------------: |
|     sm     | 640px  | @media (min-width: 768px) { ... }  |
|     md     | 768px  | @media (min-width: 768px) { ... }  |
|     lg     | 1024px | @media (min-width: 1024px) { ... } |
|     xl     | 1280px | @media (min-width: 1280px) { ... } |
|    2xl     | 1536px | @media (min-width: 1536px) { ... } |

[Responsive Design](https://tailwindcss.com/docs/responsive-design)

## 常用指令

### [**@layer**](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer)

對 css 做分類，[防止 css 覆蓋問題](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer)，能更好管理

- `base` 用於刻製純 HTML 元素的預設樣式等內容(p, h1, h2...)

- `component` 覆蓋其他 class 的樣式，可重複使用

- `utilities` 單一用途類，這些類應始終優先於任何其他樣式

```css {linenos=true}
@tailwind base;
@tailwind components;
@tailwind utilities;
@layer components {
	.my-custom-style {
		/* ... */
	}
}
```

### [**@apply**](https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply)

可以在 css 檔案裡面使用 Tailwind 語法

```css {linenos=true}
.select2-dropdown {
	@apply rounded-b-lg shadow-md;
}
.select2-search {
	@apply border border-gray-300 rounded;
}
.select2-results__group {
	@apply text-lg font-bold text-gray-900;
}
```

也可以套用自定義 class

```css {linenos=true}
.foo {
	color: blue;
}
.bar {
	@apply foo;
}
```

### [**@theme**](https://tailwindcss.com/docs/functions-and-directives#theme)

可以在 css 檔案中引用 Tailwind Config 裡定義的參數

```css {linenos=true}
.content-area {
	height: calc(100vh - theme("spacing.12"));
}
.content-area {
	height: calc(100vh - theme("spacing[2.5]"));
}
```

## 自訂數值

使用中括號來設定任意的數值

- `w-[50vw]` ⇒ `width: 50vw`

- `h-[50px]` ⇒ `height: 50px`

- `m-[15px]` ⇒ `margin: 15px`

[Adding Custom Styles](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values)

## Tailwind theme 全域設定

依據`tailwind.config.js` 該檔案裡的設定

- `theme` 物件裡面會**重新定義** Tailwind class 實際的 css

  - [可設定的參數](https://tailwindcss.com/docs/theme#configuration-reference)

- `theme.extend` 可以繼承 Tailwind 預設的再加上自定義的 class

```js {linenos=true}
module.exports = {
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
		},
	},
};
```

[Theme Configuration](https://tailwindcss.com/docs/theme)
