<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE. THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Skeleton

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
Use `<auro-skeleton>` as a placeholder for content that takes a while to load and display. It shows people that data is loading and the page isn't frozen.

[Research by the Nielsen Norman Group](https://www.nngroup.com/articles/progress-indicators/) shows that skeleton states and [loading indicators](https://auro.alaskaair.com/components/auro/loader) improve user satisfaction.

Its shimmer animation shows that the page is still loading, which reduces uncertainty.
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
Use `<auro-skeleton>` to show loading content inside containers, such as `<auro-card>`, and inside structured lists.
<!-- AURO-GENERATED-CONTENT:END -->

## When not to use

Don't use `<auro-skeleton>` on action components, such as `<auro-button>`, `<auro-input>`, or `<auro-radio>`.

Don't use `<auro-skeleton>` to show a whole component loading, such as a toast notification, a dropdown menu, or a modal dialog. Use it only for the content inside those components.

## Examples

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

<pre class="language-html"><code class="language-html">&lt;auro-skeleton style="width: 400px; height: 300px"&gt;&lt;/auro-skeleton&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
