<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Skeleton

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
The `<auro-skeleton>` custom element is for use when display content takes an extended amount of time to process and render on-screen. This indicator communicates to the user that data is being loaded and that the page is not frozen.

[Research](https://www.nngroup.com/articles/progress-indicators/) conducted by the Nielsen Norman Group states that using skeleton states and [loading indicators](https://auro.alaskaair.com/components/auro/loader) improve user satisfaction.

The `<auro-skeleton>` element uses animation to convey that the page is still loading in order to reduce user uncertainty.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-skeleton use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `<auro-skeleton>` element can be used on container-based components like `<auro-card>` and other structured lists.
<!-- AURO-GENERATED-CONTENT:END -->

## Do not...

`<auro-skeleton>` should not be used on action components like `<auro-button>`, `<auro-input>` or `<auro-radio>`.

Do not represent a loading state with `<auro-skeleton>` for an entire component such as a toast notification, dropdown menus, or a modal dialog. It is approapriate to use `<auro-skeleton>` for content inside those components, but never for the entire component.

## Default examples

The `<auro-skelelton>` API consists of a standardized enumerated `shape` attribute and the use of customzied CSS. The following examples illusrtate use cases to include `circle`, `oval` and `rectangle`. With the use of CSS the user has infinate options for how the animated skeleton can be used in their loading UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-skeleton shape="circle" style="width: 40px; height: 40px"></auro-skeleton>
  <auro-skeleton shape="oval" style="width: 200px; height: 100px;"></auro-skeleton>
  <auro-skeleton shape="rectangle" style="width: 400px; height: 300px"></auro-skeleton>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

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
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/table_example.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/table_example.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/table_example.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/table_example.html -->

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
