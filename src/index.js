function _bind(asThis, ...args) {
    const fn = this
    return function(...args2) {
        return fn.call(asThis, ...args, ...args2)
    }
}
var slice = Array.prototype.slice
function bind(asThis) {
    var fn = this
    var args = slice.call(arguments, 1)
    if (typeof fn !== 'function') {
        throw new Error('bind的类型必须是函数')
    }
    return function() {
        var args2 = slice.call(arguments, 0)
        return fn.apply(asThis, args.concat(args2))
    }
}
module.exports = bind

if(!Function.prototype.bind) {
    Function.prototype.bind = bind
}