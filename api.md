<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-skeleton

Shows a placeholder shape with a shimmer animation while content loads, so people can tell the page is still working.

**Key capabilities**
- **Shapes**: Set `shape` to `circle`, `oval`, or `rectangle` to change the outline.
- **Fills its container**: The skeleton always fills the width of its container unless you set a width, and it needs a height set with CSS.
- **Screen reader text**: The skeleton always includes the hidden text "Loading..." for screen reader users.

### Properties and attributes

| Properties | Attributes | Modifiers | Type                              | Default | Description                                                                                                                                                                                                                             |
| ---------- | ---------- | --------- | --------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| shape      | shape      |           | `circle` \| `oval` \| `rectangle` |         | Sets the skeleton's outline. `circle` makes an ellipse, which is a circle when the width and height match, `oval` gives it fully rounded ends, and `rectangle` gives it slightly rounded corners. When not set, the corners are square. |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |
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

<pre class="language-html"><code class="language-html">&lt;auro-skeleton style="width: 400px; height: 300px"&gt;&lt;/auro-skeleton&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

### Shape

Use the `shape` attribute to set the skeleton's outline. `circle` makes an ellipse, which is a circle when the width and height match. `oval` gives it fully rounded ends, like a pill, and `rectangle` gives it slightly rounded corners. Without `shape`, the corners are square.

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

<pre class="language-html"><code class="language-html">&lt;auro-skeleton shape="circle" style="width: 40px; height: 40px"&gt;&lt;/auro-skeleton&gt;
&lt;auro-skeleton shape="circle" style="width: 100px; height: 100px"&gt;&lt;/auro-skeleton&gt;
&lt;auro-skeleton shape="circle" style="width: 300px; height: 300px"&gt;&lt;/auro-skeleton&gt;</code></pre>
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

<pre class="language-html"><code class="language-html">&lt;auro-skeleton shape="oval" style="width: 80px; height: 40px"&gt;&lt;/auro-skeleton&gt;
&lt;auro-skeleton shape="oval" style="width: 200px; height: 100px;"&gt;&lt;/auro-skeleton&gt;
&lt;auro-skeleton shape="oval" style="width: 600px; height: 300px"&gt;&lt;/auro-skeleton&gt;</code></pre>
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

<pre class="language-html"><code class="language-html">&lt;auro-skeleton shape="rectangle" style="width: 100px; height: 50px"&gt;&lt;/auro-skeleton&gt;
&lt;auro-skeleton shape="rectangle" style="width: 400px; height: 150px"&gt;&lt;/auro-skeleton&gt;
&lt;auro-skeleton shape="rectangle" style="width: 800px; height: 300px"&gt;&lt;/auro-skeleton&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common usage patterns

## Be creative

Use `<auro-skeleton>` anywhere data appears once it loads. In the following example, skeletons hold the place of table rows until their data arrives.

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

<pre class="language-html"><code class="language-html">&lt;table class="auro_table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;The table header&lt;/th&gt;
      &lt;th&gt;The table header&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td colspan="2"&gt;
        &lt;auro-skeleton shape="oval" style="height: 20px;"&gt;&lt;/auro-skeleton&gt;
      &lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td colspan="2"&gt;
        &lt;auro-skeleton shape="oval" style="height: 20px;"&gt;&lt;/auro-skeleton&gt;
      &lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td colspan="2"&gt;
        &lt;auro-skeleton shape="oval" style="height: 20px;"&gt;&lt;/auro-skeleton&gt;
      &lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following tokens.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;
&#10;:host {
  --ds-auro-skeleton-container-color: var(--ds-advanced-color-skeleton-background, #{v.$ds-advanced-color-skeleton-background});
  --ds-auro-skeleton-container-gradient-color-one: var(--ds-advanced-color-skeleton-background, #{v.$ds-advanced-color-skeleton-background});
  --ds-auro-skeleton-container-gradient-color-two: var(--ds-advanced-color-skeleton-wave, #{v.$ds-advanced-color-skeleton-wave});
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
