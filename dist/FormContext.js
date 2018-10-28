'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.withFormContext = exports.FormConsumer = exports.FormProvider = undefined;

var _extends =
    Object.assign ||
    function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var _createContext = (0, _react.createContext)({}),
    Consumer = _createContext.Consumer,
    Provider = _createContext.Provider;

var FormProvider = (exports.FormProvider = Provider);
var FormConsumer = (exports.FormConsumer = Consumer);

var withFormContext = (exports.withFormContext = function withFormContext(
    TargetComponent,
) {
    var WithFormContext = function WithFormContext(props) {
        return _react2.default.createElement(Consumer, null, function(
            formContext,
        ) {
            return _react2.default.createElement(
                TargetComponent,
                _extends({}, props, formContext),
            );
        });
    };
    var targetName = TargetComponent.displayName || TargetComponent.name;
    WithFormContext.displayName = 'withFormContext(' + targetName + ')';
    return WithFormContext;
});
