const assert = require('assert')
const context = require('../context/')
const testPackage_53 = require('../../src/')

const testPackage_53TestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testPackage_53, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testPackage_53()
        })
    },
}

module.exports = testPackage_53TestSuite
