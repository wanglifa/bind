function _bind(asThis, ...args) {
    const fn = this
    function resultFn(...args2) {
        // var temp = {}
        // this = temp
        // this.__proto__ = resultFn.prototype
        return fn.call(this instanceof resultFn ? this : asThis, ...args, ...args2)
    }
    resultFn.prototype = fn.prototype
    return resultFn
}
var slice = Array.prototype.slice
function bind(asThis) {
    var fn = this
    var args = slice.call(arguments, 1)
    if (typeof fn !== 'function') {
        throw new Error('bind的类型必须是函数')
    }
    function resultFn() {
        var args2 = slice.call(arguments, 0)
        return fn.apply(this instanceof resultFn ? this : asThis, args.concat(args2))
    }
    resultFn.prototype = fn.prototype
    return resultFn

}
module.exports = bind

if(!Function.prototype.bind) {
    Function.prototype.bind = bind
}