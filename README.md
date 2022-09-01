# mitt-ext

> This is mitt's extensions package.
> 
> 这是一个mitt的扩展包。

## override

### on() & off()
+ `on(event[], handler)`
+ ` off(event[], handler)`

```js
import mitt from "mitt-ext";

function handler(payload) {
	console.log(payload);
}
mitt.on(["create", "update", "search", "delete"], handler);
mitt.off(["create", "delete"], handler);
```