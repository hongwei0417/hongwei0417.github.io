---
# sidebar_position: 2
draft: true
tags: ["frontend", "angular", "angular-form"]
last_update:
  date: 2023/6/19
  author: Kevin Hu
---

# Template Driven Form

:::info 不用寫 ts 就能控制表單

在 Angular 中提供兩種處理表單的方式，分別是 template-driven & model-driven 的方式  
相較於 model-driven，template-driven 可以不用定義 `FormControl` 類的相關物件，取得代之的是透過 `Directive` 來處理表單相關行為
在處理某些較單純的表單行為中，可以用更簡潔的方式完成功能 :smile:

:::

## Live Demo

提供本篇文章使用的的範例程式碼:  
https://stackblitz.com/edit/stackblitz-starters-hymotv?file=src%2Fmain.ts

## Template-Driven Form Directives

Angular 是如何神奇地做到透過 Template 來管理控制表單，要來認識一下三個重要的 Directive:

- `NgModel`: 透過綁定在表單元素[^1]上，可監控表單輸入變化以及提供欄位錯誤驗證等狀態
- `NgForm`: 預設綁定在`<form>`元件上，相當於最外層的`FormGroup`，監控內層所有的表單元素狀態
- `NgModelGroup`: 創建內層`FormGroup`，通常用於嵌套表單[^2](nested form)並且可層層相嵌

[^1]: 表單元素: 常用的 Input、Select、Checkbox 等表單輸入元素
[^2]: 嵌套式表單: 表單內還會有表單，這邊表單可看作`FormGroup`

:::tip `FormsModule`

Template-Driven 會用到的 Directives 只需要透過匯入 `FormsModule` 就可以使用囉 :fire:

:::

## Basic Form

以下展示一個基本的使用方法，可以看到將`ngForm`綁定於`<form>`上此表單建立一個`FormGroup`實體監控內部表單元素的狀態邊更，而內層表單元素則可使用`ngModel`來監控變更，此時使用者輸入會同步更新`FormGroup`。

```html showLineNumbers
<form ngForm>
	<div>
		<label>Parent 1:</label>
		<input ngModel type="text" name="parent-1" />
	</div>
	<div>
		<label>Parent 2:</label>
		<input ngModel type="text" name="parent-2" />
	</div>
</form>
```

:::tip 可以省略`ngForm` :wink:

當我們匯入`FormsModule`其實預設就將所有`<form>`綁定為`ngForm`，可以看到 [Source Code](https://github.com/angular/angular/blob/018750154d730140e749a96f69797040a3121e90/packages/forms/src/directives/ng_form.ts#LL67C44-L67C44) 中已自動選擇

```ts {2}
@Directive({
  selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
  providers: [formDirectiveProvider],
  host: {'(submit)': 'onSubmit($event)', '(reset)': 'onReset()'},
  outputs: ['ngSubmit'],
  exportAs: 'ngForm'
})
export class NgForm extends ControlContainer implements Form {
  ...
}
```

:::

## Nested Form in same component

常見的情境就是在表單內要建立第二層表單，在同元件下使用 template-driven 的方式就相對簡單，如下所示:

```html showLineNumbers {10-24}
<form ngForm>
	<div>
		<label>Parent 1:</label>
		<input ngModel type="text" name="parent-1" />
	</div>
	<div>
		<label>Parent 2:</label>
		<input ngModel type="text" name="parent-2" />
	</div>
	<fieldset ngModelGroup="childForm">
		<div>
			<label>Child 1:</label>
			<input ngModel type="text" name="child-1" />
		</div>
		<div>
			<label>Child 2:</label>
			<input ngModel type="text" name="child-2" />
		</div>
		<div>
			<label>Child 3:</label>
			<input ngModel type="text" name="child-3" />
		</div>
		<app-sub-child />
	</fieldset>
</form>
```

可以看到透過使用`ngModelGroup`可在表單內多建立一層表單，最後表單會組成以結果:

```json
{
	"parent-1": "",
	"parent-2": "",
	"childForm": {
		"child-1": "",
		"child-2": "",
		"child-3": ""
	}
}
```

## Nested Form in separated components

重頭戲來了，若要在不同元件內定義表單，需要的時候進行表單的組合，又能相容`ngForm`的表單控制，那豈不是完美? :satisfied:
是有辦法的，但其中內藏玄機，讓我們一步一步看下去

### `ngModelGroup`

最直覺的是直接將`ngModelGroup`寫在另外一個元件，但此時會得到一個錯誤

:::danger 找不到`ControlContainer`

> Error: NG0201: No provider for ControlContainer found in NodeInjector

:::

這個錯誤的意思是 Angular 找不到 `ControlContainer` 這個實體，不過奇怪的是我們的 code 完全沒有寫到這個東西為何會找不到呢?
讓我們來一探究竟 `ngModelGroup` 的 [Source Code](https://github.com/angular/angular/blob/018750154d730140e749a96f69797040a3121e90/packages/forms/src/directives/ng_model_group.ts#LL48C1-L68C2)

```ts showLineNumbers {10,15,22-24}
@Directive({
	selector: "[ngModelGroup]",
	providers: [modelGroupProvider],
	exportAs: "ngModelGroup",
})
export class NgModelGroup extends AbstractFormGroupDirective implements OnInit, OnDestroy {
	@Input("ngModelGroup") name: string;

	constructor(
		@Host() @SkipSelf() parent: ControlContainer,
		@Optional() @Self() @Inject(NG_VALIDATORS) validators: any[],
		@Optional() @Self() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: any[]
	) {
		super();
		this._parent = parent;
		this._validators = validators;
		this._asyncValidators = asyncValidators;
	}

	/** @internal */
	_checkParentType(): void {
		if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
			TemplateDrivenErrors.modelGroupParentException();
		}
	}
}
```

可以發現`ngModelGroup`創建的時候注入了 ControlContainer，並且他使用 `@Host` 和 `@SkipSelf()` 兩個裝飾器  
關於 DI 注入這邊檢介紹可以參考 https://youtu.be/uVGnsmm9g-I

```ts
@Host() @SkipSelf() parent: ControlContainer
```

這邊整理效果為:

- `@Host()`: 只查找到宿主元素的提供者
- `@SkipSelf()`: 不查找自身提供者(這邊的自身是指`ngModelGroup`這個 Directive 本身)

總結來說，當你將單獨使用`ngModelGroup`在 A 元件內，他只查找到 A 元件的提供者就沒有向上尋找，因此無法取得`ngForm`所提供的`ControlContainer` :cry:

### Solutions

知道問題了那該如何解決呢? 若他無法在定義`ngModelGroup`的該元件內取得`ControlContainer`

```ts
viewProviders: [{ provide: ControlContainer, useExisting: NgForm }];
```

## References

- https://www.youtube.com/watch?v=G8zXugcYd7o&list=PLX7eV3JL9sfmJ6AaZj9eDlAKrJrEul4Vz
- https://medium.com/@a.yurich.zuev/angular-nested-template-driven-form-4a3de2042475
- https://github.com/angular/angular/blob/4.4.x/packages/forms/src/directives/ng_model_group.ts
- https://www.tektutorialshub.com/angular/host-decorator-in-angular/
