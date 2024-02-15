<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-skeleton

The auro-skeleton element provides users a way to indicate the loading of asynchronous content on a page.

## Attributes

| Attribute | Type     | Description                                  |
|-----------|----------|----------------------------------------------|
| [shape](#shape)   | `String` | Renders a circle, oval, or rectangle loader. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Attribute Examples

#### <a name="shape"></a>`shape`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
The `<auro-skeleton>` element makes use of a single `shape` enumerated attribute. Options are [`circle`, `oval`, `rectangle`]

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/api_shape_circle.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/api_shape_circle.html -->
  <auro-skeleton shape="circle" style="width: 40px; height: 40px"></auro-skeleton>
  <auro-skeleton shape="circle" style="width: 100px; height: 100px"></auro-skeleton>
  <auro-skeleton shape="circle" style="width: 300px; height: 300px"></auro-skeleton>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/api_shape_circle.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/api_shape_circle.html -->

```html
<auro-skeleton shape="circle" style="width: 40px; height: 40px"></auro-skeleton>
<auro-skeleton shape="circle" style="width: 100px; height: 100px"></auro-skeleton>
<auro-skeleton shape="circle" style="width: 300px; height: 300px"></auro-skeleton>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/api_shape_oval.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/api_shape_oval.html -->
  <auro-skeleton shape="oval" style="width: 80px; height: 40px"></auro-skeleton>
  <auro-skeleton shape="oval" style="width: 200px; height: 100px;"></auro-skeleton>
  <auro-skeleton shape="oval" style="width: 600px; height: 300px"></auro-skeleton>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/api_shape_oval.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/api_shape_oval.html -->

```html
<auro-skeleton shape="oval" style="width: 80px; height: 40px"></auro-skeleton>
<auro-skeleton shape="oval" style="width: 200px; height: 100px;"></auro-skeleton>
<auro-skeleton shape="oval" style="width: 600px; height: 300px"></auro-skeleton>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/api_shape_rectangle.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/api_shape_rectangle.html -->
  <auro-skeleton shape="rectangle" style="width: 100px; height: 50px"></auro-skeleton>
  <auro-skeleton shape="rectangle" style="width: 400px; height: 150px"></auro-skeleton>
  <auro-skeleton shape="rectangle" style="width: 800px; height: 300px"></auro-skeleton>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/api_shape_rectangle.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/api_shape_rectangle.html -->

```html
<auro-skeleton shape="rectangle" style="width: 100px; height: 50px"></auro-skeleton>
<auro-skeleton shape="rectangle" style="width: 400px; height: 150px"></auro-skeleton>
<auro-skeleton shape="rectangle" style="width: 800px; height: 300px"></auro-skeleton>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
