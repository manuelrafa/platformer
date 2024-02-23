"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _delta, _a;
const Time = new (_a = class {
        /**
         * Tiempo que pasó desde el frame anterior, en segundos.
         */
        get deltaTime() { return __classPrivateFieldGet(this, _delta, "f"); }
        set deltaTime(delta) { __classPrivateFieldSet(this, _delta, delta, "f"); }
        constructor() {
            _delta.set(this, 0);
            this.previousTimestamp = 0;
            window.requestAnimationFrame(this.mainLoop.bind(this));
        }
        mainLoop(timestamp) {
            this.calculateDeltaTime(timestamp);
            window.requestAnimationFrame(this.mainLoop.bind(this));
        }
        calculateDeltaTime(timestamp) {
            this.deltaTime = (timestamp - this.previousTimestamp) / 1000;
            this.previousTimestamp = timestamp;
        }
    },
    _delta = new WeakMap(),
    _a)();
