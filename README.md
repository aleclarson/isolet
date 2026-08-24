# @alloc/isolet

```
pnpm add @alloc/isolet
```

Build widgets with Vite and pass processed CSS explicitly:

```ts
import css from "./widget.css?inline";
import { createIsolet } from "@alloc/isolet";

export const widget = createIsolet({
  name: "my-widget",
  css,
  mount(container, props) {
    // Render into container.
  },
});
```
