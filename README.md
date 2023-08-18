# mitt-ext

> This is mitt's extensions package.
> 
> 这是一个mitt的扩展包。

## override

### on() & off()
+ `on(event[], handler)`
+ ` off(event[], handler)`

```js
import mittExt from "mitt-ext";

const mitt = mittExt();

function handler(payload) {
	console.log(payload);
}
let payload = { id: 1 };
mitt.on(["create", "update", "search", "delete"], handler);
mitt.off(["create", "delete"], handler);
mitt.emit(["create", "delete"], payload);
```