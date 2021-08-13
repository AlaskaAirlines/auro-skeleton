# Skeleton

The `auro-skeleton` component is for use when display content takes an extended amount of time to process and render on-screen. This indicator communicates to the user that data is being loaded and that the page is not frozen.

[Research](https://www.nngroup.com/articles/progress-indicators/) conducted by the Nielsen Norman Group states that using skeleton states and [loading indicators](http://auro.alaskaair.com/components/auro/loader) improve user satisfaction.

`auro-skeleton` uses animation to convey that the page is not stuck and that data is still being loaded in order to reduce user uncertainty.

## Use Cases

`auro-skeleton` can be used on container-based components like `auro-card` and structured lists.

## Do not...
`auro-skeleton` should not be used on action components like `auro-button`, `auro-input` or `auro-radio`.

Do not represent a loading state with `auro-skeleton` for an entire component such as a toast notification, dropdown menus, or a modal dialog. It is approapriate to use `auro-skeleton` for content inside those components, but never for the entire component.
## Basic Examples

### Circle

<div class="exampleWrapper">
  <auro-skeleton shape="circle" style="width: 40px; height: 40px"></auro-skeleton>
  <auro-skeleton shape="circle" style="width: 100px; height: 100px"></auro-skeleton>
  <auro-skeleton shape="circle" style="width: 300px; height: 300px"></auro-skeleton>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-skeleton shape="circle" style="width: 40px; height: 40px"></auro-skeleton>
  <auro-skeleton shape="circle" style="width: 100px; height: 100px"></auro-skeleton>
  <auro-skeleton shape="circle" style="width: 300px; height: 300px"></auro-skeleton>
  ```
</auro-accordion>

### Oval

<div class="exampleWrapper">
  <auro-skeleton shape="oval" style="width: 80px; height: 40px"></auro-skeleton>
  <auro-skeleton shape="oval" style="width: 200px; height: 100px;"></auro-skeleton>
  <auro-skeleton shape="oval" style="width: 600px; height: 300px"></auro-skeleton>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-skeleton shape="oval" style="width: 80px; height: 40px"></auro-skeleton>
  <auro-skeleton shape="oval" style="width: 200px; height: 100px;"></auro-skeleton>
  <auro-skeleton shape="oval" style="width: 600px; height: 300px"></auro-skeleton>
  ```
</auro-accordion>

### Rectangle

<div class="exampleWrapper">
  <auro-skeleton shape="rectangle" style="width: 100px; height: 50px"></auro-skeleton>
  <auro-skeleton shape="rectangle" style="width: 400px; height: 150px"></auro-skeleton>
  <auro-skeleton shape="rectangle" style="width: 800px; height: 300px"></auro-skeleton>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-skeleton shape="rectangle" style="width: 100px; height: 50px"></auro-skeleton>
  <auro-skeleton shape="rectangle" style="width: 400px; height: 150px"></auro-skeleton>
  <auro-skeleton shape="rectangle" style="width: 800px; height: 300px"></auro-skeleton>
  ```
</auro-accordion>

## Table Example

<div class="exampleWrapper">
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
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

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

</auro-accordion>
