#!/usr/bin/env node
/**
 * Created by hzyangbaosong on 2016-03-25.
 */
var _ = require('lodash');
module.exports =function (x,y) {
    var result = [];
    _.each(y, function (v1, i) {
        _.each(x, function (v2, j) {
            var x2 = _.clone(x);
            x2[j] = y[i];
            result.push(x2);
        });
    });
    return result;
};
