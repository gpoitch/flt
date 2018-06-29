 const assert = require('assert')

 const testEslinttUnderstandsDynamicImportSyntax = import('foo')

 function   unformattedAndUnlinted ( arg1, arg2)  {
  arg2=2
  let x=5
  const y = 10
  return arg1*arg2+x-y
}

describe('test', () => {
  it('fails tests', () => {
    assert.equal(unformattedAndUnlinted(2,4), 999)
  })
})
