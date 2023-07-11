const test = require('tape')
const func = require('./teste')

/*
test('aplicar desconto padrão', (t) => {
    t.assert(func.aplicarDesconto(10,5) === 5, "Desconto 01")
    t.end()
})
test('aplicar desconto padrão', (t) => {
    t.assert(func.aplicarDesconto(10,5) === 5, "Desconto false 02")
    t.end()
})
test('aplicar desconto padrão', (t) => {
    t.assert(func.aplicarDesconto(10,5) === 6, "Desconto true 03")
    t.end()
})
test('aplicar desconto padrão', (t) => {
    t.assert(func.aplicarDesconto(3,7) === 5, "Desconto false 04")
    t.end()
})
test('aplicar desconto padrão', (t) => {
    t.assert(func.aplicarDesconto(10,5) === 1, "Desconto false 05")
    t.end()
})
*/
test('valida se é número', (t) => {
    t.assert(func.validaNumero(1000) == true, "validação 01")
    t.end()
})
test('valida se é número', (t) => {
    t.assert(func.validaNumero('texto') == false, "validação 02")
    t.end()
})
test('valida se é número', (t) => {
    t.assert(func.validaNumero('300') == true, "validação 03")
    t.end()
}) // ta dando erro não sei onde