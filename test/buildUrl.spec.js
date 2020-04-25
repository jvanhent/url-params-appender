const assert = require('assert');
const buildUrl = require("../src/index.js")

describe('buildUrl', function() {
  
    it('should return basePath when no params provided', function() {
      assert.equal(buildUrl('/go/see'), '/go/see');
      assert.equal(buildUrl('/go/see', null, null), '/go/see');
      assert.equal(buildUrl('/go/see', {}, {}), '/go/see');
    });

    it('should return basePath ? single param when single param provided', function() {
      assert.equal(buildUrl('/go/see', {aaa: 111}, {}), '/go/see?aaa=111');
      assert.equal(buildUrl('/go/see', {aaa: 111}, {aaa:222}), '/go/see?aaa=222');
      assert.equal(buildUrl('/go/see', {}, {aaa:222}), '/go/see?aaa=222');
    });

    it('should return basePath ? multiple params when multiple params provided', function() {
      assert.equal(buildUrl('/go/see', {aaa: 111, bbb:111}, {}), '/go/see?aaa=111&bbb=111');
      assert.equal(buildUrl('/go/see', {aaa: 111, bbb:111}, {aaa:222, bbb:222}), '/go/see?aaa=222&bbb=222');
      assert.equal(buildUrl('/go/see', {}, {aaa:222, bbb:222}), '/go/see?aaa=222&bbb=222');
    });

    it('should merge params and priorityParams', function() {
      assert.equal(
          buildUrl('/go/see', {yyy: 'y', xxx: 'xx', aaa: 111, bbb:111, ccc: 'ccc'}, {aaa:222, bbb:222, other: 'other'}), 
        '/go/see?yyy=y&xxx=xx&aaa=222&bbb=222&ccc=ccc&other=other'
      );
    });
});