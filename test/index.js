const bind = require('../src/index')
Function.prototype.bind2 = bind
console.assert(Function.prototype.bind2 !== undefined)

const fn1 = function() {
    return this
}
const newFn1 = fn1.bind2({ name: 'lifa' })
console.assert(newFn1().name === 'lifa')

const fn2 = function(p1, p2) {
    return [this, p1, p2]
}
const newFn2 = fn2.bind2({ name: 'lifa' }, 123, 456)
console.assert(newFn2()[0].name === 'lifa')
console.assert(newFn2()[1] === 123)
console.assert(newFn2()[2] === 456)

const anotherFn2 = fn2.bind2({ name: 'lifa' })
console.assert(anotherFn2(222, 333)[0].name === 'lifa')
console.assert(anotherFn2(222, 333)[1] === 222)
console.assert(anotherFn2(222, 333)[2] === 333)