<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- The below content is automatically added from ../docs/api.md -->

# auro-skeleton

The auro-skeleton element provides users a way to indicate the loading of asynchronous content on a page.

## Attributes

| Attribute | Type     | Description                                  |
|-----------|----------|----------------------------------------------|
| [shape](#shape)   | `String` | Renders a circle, oval, or rectangle loader. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Attribute Examples

#### shape

The `<auro-skeleton>` element makes use of a single `shape` enumerated attribute. Options are [`circle`, `oval`, `rectangle`]

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/api_shape_circle.html) -->
  <!-- The below content is automatically added from ../apiExamples/api_shape_circle.html -->
  <auro-skeleton shape="circle" style="width: 40px; height: 40px"></auro-skeleton>
  <auro-skeleton shape="circle" style="width: 100px; height: 100px"></auro-skeleton>
  <auro-skeleton shape="circle" style="width: 300px; height: 300px"></auro-skeleton>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/api_shape_circle.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/api_shape_circle.html -->

```html
<auro-skeleton shape="circle" style="width: 40px; height: 40px"></auro-skeleton>
<auro-skeleton shape="circle" style="width: 100px; height: 100px"></auro-skeleton>
<auro-skeleton shape="circle" style="width: 300px; height: 300px"></auro-skeleton>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/api_shape_oval.html) -->
  <!-- The below content is automatically added from ../apiExamples/api_shape_oval.html -->
  <auro-skeleton shape="oval" style="width: 80px; height: 40px"></auro-skeleton>
  <auro-skeleton shape="oval" style="width: 200px; height: 100px;"></auro-skeleton>
  <auro-skeleton shape="oval" style="width: 600px; height: 300px"></auro-skeleton>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/api_shape_oval.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/api_shape_oval.html -->

```html
<auro-skeleton shape="oval" style="width: 80px; height: 40px"></auro-skeleton>
<auro-skeleton shape="oval" style="width: 200px; height: 100px;"></auro-skeleton>
<auro-skeleton shape="oval" style="width: 600px; height: 300px"></auro-skeleton>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/api_shape_rectangle.html) -->
  <!-- The below content is automatically added from ../apiExamples/api_shape_rectangle.html -->
  <auro-skeleton shape="rectangle" style="width: 100px; height: 50px"></auro-skeleton>
  <auro-skeleton shape="rectangle" style="width: 400px; height: 150px"></auro-skeleton>
  <auro-skeleton shape="rectangle" style="width: 800px; height: 300px"></auro-skeleton>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/api_shape_rectangle.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/api_shape_rectangle.html -->

```html
<auro-skeleton shape="rectangle" style="width: 100px; height: 50px"></auro-skeleton>
<auro-skeleton shape="rectangle" style="width: 400px; height: 150px"></auro-skeleton>
<auro-skeleton shape="rectangle" style="width: 800px; height: 300px"></auro-skeleton>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ../src/tokens.scss -->

```scss
@import "./../node_modules/@aurodesignsystem/design-tokens/dist/alaska/SCSSVariables--alaska";

:host {
  --ds-auro-skeleton-container-color: var(--ds-advanced-color-skeleton-background, #{$ds-advanced-color-skeleton-background});
  --ds-auro-skeleton-container-gradient-color-one: var(--ds-advanced-color-skeleton-background, #{$ds-advanced-color-skeleton-background});
  --ds-auro-skeleton-container-gradient-color-two: var(--ds-advanced-color-skeleton-wave, #{$ds-advanced-color-skeleton-wave});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
