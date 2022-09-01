import mitt from "mitt";

export default function mittExt() {
	let emittor = mitt();
	return {
		...emittor,
		on(...args) {
			if (typeof args[0] == "string" || typeof args[0] == "symbol") return emittor.on(...args);
			if (Array.isArray(args[0])) return args[0].reduce((o, i) => (emittor.on(i, args[1]), o), []);
		},
		off(...args) {
			if (typeof args[0] == "string" || typeof args[0] == "symbol") return emittor.off(...args);
			if (Array.isArray(args[0])) return args[0].reduce((o, i) => (emittor.off(i, args[1]), o), []);
		}
	};
};