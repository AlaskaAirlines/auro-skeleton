<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Skeleton

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
The `<auro-skeleton>` custom element is for use when display content takes an extended amount of time to process and render on-screen. This indicator communicates to the user that data is being loaded and that the page is not frozen.

[Research](https://www.nngroup.com/articles/progress-indicators/) conducted by the Nielsen Norman Group states that using skeleton states and [loading indicators](https://auro.alaskaair.com/components/auro/loader) improve user satisfaction.

The `<auro-skeleton>` element uses animation to convey that the page is still loading in order to reduce user uncertainty.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
The `<auro-skeleton>` element can be used on container-based components like `<auro-card>` and other structured lists to indicate loading states.
<!-- AURO-GENERATED-CONTENT:END -->

## Do Not...

`<auro-skeleton>` should not be used on action components like `<auro-button>`, `<auro-input>` or `<auro-radio>`.

Do not represent a loading state with `<auro-skeleton>` for an entire component such as a toast notification, dropdown menus, or a modal dialog. It is appropriate to use `<auro-skeleton>` for content inside those components, but never for the entire component.

## Example(s)

### Basic

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
