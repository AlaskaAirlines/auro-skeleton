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