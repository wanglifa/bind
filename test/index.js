const bind = require('../src/index')

function test1(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    console.assert(Function.prototype.bind2 !== undefined)
}
function test2(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn1 = function() {
        return this
    }
    const newFn1 = fn1.bind2({ name: 'lifa' })
    console.assert(newFn1().name === 'lifa')
}
function test3(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn2 = function(p1, p2) {
        return [this, p1, p2]
    }
    const newFn2 = fn2.bind2({ name: 'lifa' }, 123, 456)
    console.assert(newFn2()[0].name === 'lifa')
    console.assert(newFn2()[1] === 123)
    console.assert(newFn2()[2] === 456)
}
function test4(message) {
    console.log(message)
    Function.prototype.bind2 = bind
    const fn2 = function(p1, p2) {
        return [this, p1, p2]
    }
    const anotherFn2 = fn2.bind2({ name: 'lifa' })
    console.assert(anotherFn2(222, 333)[0].name === 'lifa')
    console.assert(anotherFn2(222, 333)[1] === 222)
    console.assert(anotherFn2(222, 333)[2] === 333)
}

test1('fn.bind能用')
test2('this 绑定成功')
test3('this, p1, p2 绑定成功')
test4('this, pq 绑定成功, 后传 p2 调用成功')
