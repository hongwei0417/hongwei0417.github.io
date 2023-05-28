---
# sidebar_position: 2
tags: ["frontend", "angular"]
last_update:
  date: 2023/5/28
  author: Kevin Hu
---

# Directive Dynamic Operations

:::info 目的

Directive 可以寄生在宿主元件(Host Element)上，藉此來改變該元件的行為  
但有時需要動態新增元素或是取得宿主元素進行操作，因此整理以下使用情境

:::

## Common APIs

在介紹情境之前，來先了解一些 Angular 常用的 API，透過直接在 Directive 內注入這些服務就可以直接引用

- [ViewContainerRef](https://angular.io/api/core/ViewContainerRef): 負責管理動態元件的特殊容器，它提供了創建、插入、刪除元件等操作
- [ElementRef](https://angular.io/api/core/ElementRef): 用於直接代表元件的物件，可透過它提供的`nativeElement`存取元件的 DOM，可以想像它就是將包元件 DOM 在包一層的物件
- [Renderer2](https://angular.io/api/core/Renderer2): Angular 所提供的一種可以操作元素的物件，它提供了一組方法來操作 DOM 元素，讓我們不需要直接操作底層的 DOM API，並且可用於跨平台的 DOM 操作

## Use Cases

這邊分別列出不同情境的目的，以及要如何在 Directive 內進行實作，
範例程式碼可以參考 [Live Demo (Angular 16)](https://stackblitz.com/edit/stackblitz-starters-ejpzwn?file=src%2Faccess-child.directive.ts)

### Sibling Element

> 在宿主元件後動態新增元素，也就是兄弟節點(Sibling)

這是最常見且最基本的情境，透過注入`ViewContainerRef`並使用`createComponent`來動態創建元件:

```ts showLineNumbers
constructor(private viewContainerRef: ViewContainerRef) {};

ngOnInit() {
  const component = this.viewContainerRef.createComponent(DynamicComponent);
}
```

:::tip `ComponentRef<T>`

`ViewContainerRef.createComponent()` 會回傳新元素的[`ComponentRef`](https://angular.io/api/core/ComponentRef)物件，它提供`location`屬性來存取原生 DOM，以及`instance`可取得 Angular 的元件實體 😆

:::
`createComponent`預設會創建一個元件在宿主元素之後，產生結果示意如下:

<!-- prettier-ignore-start -->
```html
<host-element></host-element>
<new-element></new-element> <== sibling here
```
<!-- prettier-ignore-end -->

### Parent Element

> 在宿主元素外新增一層元素，也就是父節點(Parent)

這邊除了`ViewContainerRef`創建父元素以外，還需要透過`Renderer2`提供的`appendChild`，將宿主元素添加進父元素內:

```ts {10,11} showLineNumbers
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    const component = this.viewContainerRef.createComponent(DynamicComponent);
    this.renderer.appendChild(
      component.location.nativeElement,
      this.elementRef.nativeElement
    );
  }
```

產生結果如下示意:

<!-- prettier-ignore-start -->

```html
<new-element> <== parent here
  <host-element></host-element>
</new-element> 
```
<!-- prettier-ignore-end -->

### Child Element

> 在宿主元素內新增元素，也就是子節點(Child)

同樣透過`Renderer2`提供的`appendChild`，將新增元素添加進父元素內:

```ts {10,11} showLineNumbers
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    const component = this.viewContainerRef.createComponent(DynamicComponent);
    this.renderer.appendChild(
      this.elementRef.nativeElement,
      component.location.nativeElement
    );
  }
```

產生結果如下示意:

<!-- prettier-ignore-start -->

```html
  <host-element>
    <new-element> <== child here
    </new-element> 
  </host-element>
```
<!-- prettier-ignore-end -->

### Access Child Element

> 存取宿主元素內的子元素，並進行修改

透過`ViewContainerRef`可以拿到宿主元素的 DOM，再使用[DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)對元素內進行搜尋，這邊使用`querySelector`

```ts showLineNumbers
  ngAfterViewInit() {
    const p = this.viewContainerRef.element.nativeElement.querySelector('p');
    p.style.color = 'red';
    p.textContent = 'I have been changed!';
  }

  constructor(private viewContainerRef: ViewContainerRef) {}
```
