<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Skeleton

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## auro-skeleton use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Do not...

`<auro-skeleton>` should not be used on action components like `<auro-button>`, `<auro-input>` or `<auro-radio>`.

Do not represent a loading state with `<auro-skeleton>` for an entire component such as a toast notification, dropdown menus, or a modal dialog. It is approapriate to use `<auro-skeleton>` for content inside those components, but never for the entire component.

## Default examples

The `<auro-skelelton>` API consists of a standardized enumerated `shape` attribute and the use of customzied CSS. The following examples illusrtate use cases to include `circle`, `oval` and `rectangle`. With the use of CSS the user has infinate options for how the animated skeleton can be used in their loading UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Be creative

Use your imagination. Wherever data can be placed, an `<auro-skelelton>` element can be used. In the following exmaple see how `<auro-skelelton>` is used in place where data will be filled once the process is completed.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/table_example.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/table_example.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
