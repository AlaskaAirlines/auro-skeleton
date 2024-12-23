<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Skeleton

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/description.md) -->
<!-- The below content is automatically added from ../docs/partials/description.md -->
The `<auro-skeleton>` custom element is for use when display content takes an extended amount of time to process and render on-screen. This indicator communicates to the user that data is being loaded and that the page is not frozen.

[Research](https://www.nngroup.com/articles/progress-indicators/) conducted by the Nielsen Norman Group states that using skeleton states and [loading indicators](https://auro.alaskaair.com/components/auro/loader) improve user satisfaction.

The `<auro-skeleton>` element uses animation to convey that the page is still loading in order to reduce user uncertainty.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-skeleton use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ../docs/partials/useCases.md -->
The `<auro-skeleton>` element can be used on container-based components like `<auro-card>` and other structured lists.
<!-- AURO-GENERATED-CONTENT:END -->

## Do not...

`<auro-skeleton>` should not be used on action components like `<auro-button>`, `<auro-input>` or `<auro-radio>`.

Do not represent a loading state with `<auro-skeleton>` for an entire component such as a toast notification, dropdown menus, or a modal dialog. It is approapriate to use `<auro-skeleton>` for content inside those components, but never for the entire component.

## Default examples

The `<auro-skelelton>` API consists of a standardized enumerated `shape` attribute and the use of customzied CSS. The following examples illusrtate use cases to include `circle`, `oval` and `rectangle`. With the use of CSS the user has infinate options for how the animated skeleton can be used in their loading UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ../apiExamples/basic.html -->
  <auro-skeleton shape="circle" style="width: 40px; height: 40px"></auro-skeleton>
  <auro-skeleton shape="oval" style="width: 200px; height: 100px;"></auro-skeleton>
  <auro-skeleton shape="rectangle" style="width: 400px; height: 300px"></auro-skeleton>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basic.html -->

```html
<auro-skeleton shape="circle" style="width: 40px; height: 40px"></auro-skeleton>
<auro-skeleton shape="oval" style="width: 200px; height: 100px;"></auro-skeleton>
<auro-skeleton shape="rectangle" style="width: 400px; height: 300px"></auro-skeleton>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Be creative

Use your imagination. Wherever data can be placed, an `<auro-skelelton>` element can be used. In the following exmaple see how `<auro-skelelton>` is used in place where data will be filled once the process is completed.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/table_example.html) -->
  <!-- The below content is automatically added from ../apiExamples/table_example.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/table_example.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/table_example.html -->

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

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-skeleton` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `AuroSkeleton.register(name)` method and pass in a unique name.

```js
import { AuroSkeleton } from './src/auro-skeleton.js';

AuroSkeleton.register('custom-skeleton');
```

This will create a new custom element that you can use in your HTML that will function identically to the `<auro-skeleton>` element.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ../apiExamples/custom.html -->
  <custom-skeleton shape="circle" style="width: 40px; height: 40px"></custom-skeleton>
  <custom-skeleton shape="oval" style="width: 200px; height: 100px;"></custom-skeleton>
  <custom-skeleton shape="rectangle" style="width: 400px; height: 300px"></custom-skeleton>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/custom.html -->

```html
<custom-skeleton shape="circle" style="width: 40px; height: 40px"></custom-skeleton>
<custom-skeleton shape="oval" style="width: 200px; height: 100px;"></custom-skeleton>
<custom-skeleton shape="rectangle" style="width: 400px; height: 300px"></custom-skeleton>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
