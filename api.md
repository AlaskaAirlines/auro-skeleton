<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-skeleton

The `auro-skeleton` element provides users a way to indicate the loading of asynchronous content on a page.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type                              | Default | Description                                 |
| ---------- | ---------- | --------- | --------------------------------- | ------- | ------------------------------------------- |
| shape      | shape      |           | `circle` \| `oval` \| `rectangle` |         | Renders a circle, oval, or rectangle loader |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-skeleton style="width: 400px; height: 300px"></auro-skeleton>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-skeleton style="width: 400px; height: 300px"></auro-skeleton>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

### Shape

The `<auro-skeleton>` element makes use of a single `shape` to control its appearance. Options are [`circle`, `oval`, `rectangle`].

### Circle

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/circle.html) -->
  <!-- The below content is automatically added from ../apiExamples/circle.html -->
  <auro-skeleton shape="circle" style="width: 40px; height: 40px"></auro-skeleton>
  <auro-skeleton shape="circle" style="width: 100px; height: 100px"></auro-skeleton>
  <auro-skeleton shape="circle" style="width: 300px; height: 300px"></auro-skeleton>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/circle.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/circle.html -->

```html
<auro-skeleton shape="circle" style="width: 40px; height: 40px"></auro-skeleton>
<auro-skeleton shape="circle" style="width: 100px; height: 100px"></auro-skeleton>
<auro-skeleton shape="circle" style="width: 300px; height: 300px"></auro-skeleton>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Oval

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/oval.html) -->
  <!-- The below content is automatically added from ../apiExamples/oval.html -->
  <auro-skeleton shape="oval" style="width: 80px; height: 40px"></auro-skeleton>
  <auro-skeleton shape="oval" style="width: 200px; height: 100px;"></auro-skeleton>
  <auro-skeleton shape="oval" style="width: 600px; height: 300px"></auro-skeleton>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/oval.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/oval.html -->

```html
<auro-skeleton shape="oval" style="width: 80px; height: 40px"></auro-skeleton>
<auro-skeleton shape="oval" style="width: 200px; height: 100px;"></auro-skeleton>
<auro-skeleton shape="oval" style="width: 600px; height: 300px"></auro-skeleton>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Rectangle

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/rectangle.html) -->
  <!-- The below content is automatically added from ../apiExamples/rectangle.html -->
  <auro-skeleton shape="rectangle" style="width: 100px; height: 50px"></auro-skeleton>
  <auro-skeleton shape="rectangle" style="width: 400px; height: 150px"></auro-skeleton>
  <auro-skeleton shape="rectangle" style="width: 800px; height: 300px"></auro-skeleton>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/rectangle.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/rectangle.html -->

```html
<auro-skeleton shape="rectangle" style="width: 100px; height: 50px"></auro-skeleton>
<auro-skeleton shape="rectangle" style="width: 400px; height: 150px"></auro-skeleton>
<auro-skeleton shape="rectangle" style="width: 800px; height: 300px"></auro-skeleton>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common Usage Patterns & Functional Examples

## Be creative

Use your imagination. Wherever data can be placed, an `<auro-skeleton>` element can be used. In the following example see how `<auro-skeleton>` is used in place where data will be filled once the process is completed.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/table-example.html) -->
  <!-- The below content is automatically added from ../apiExamples/table-example.html -->
  <table class="auro_table">
    <thead>
      <tr>
        <th>The table header</th>
        <th>The table header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="2">
          <auro-skeleton shape="oval" style="height: 20px;"></auro-skeleton>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <auro-skeleton shape="oval" style="height: 20px;"></auro-skeleton>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <auro-skeleton shape="oval" style="height: 20px;"></auro-skeleton>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/table-example.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/table-example.html -->

```html
<table class="auro_table">
  <thead>
    <tr>
      <th>The table header</th>
      <th>The table header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">
        <auro-skeleton shape="oval" style="height: 20px;"></auro-skeleton>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <auro-skeleton shape="oval" style="height: 20px;"></auro-skeleton>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <auro-skeleton shape="oval" style="height: 20px;"></auro-skeleton>
      </td>
    </tr>
  </tbody>
</table>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;

:host {
  --ds-auro-skeleton-container-color: var(--ds-advanced-color-skeleton-background, #{v.$ds-advanced-color-skeleton-background});
  --ds-auro-skeleton-container-gradient-color-one: var(--ds-advanced-color-skeleton-background, #{v.$ds-advanced-color-skeleton-background});
  --ds-auro-skeleton-container-gradient-color-two: var(--ds-advanced-color-skeleton-wave, #{v.$ds-advanced-color-skeleton-wave});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
