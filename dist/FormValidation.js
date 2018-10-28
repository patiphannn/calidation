'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});

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

var _propTypes = require('prop-types');

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _Validation = require('./Validation');

var _Validation2 = _interopRequireDefault(_Validation);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
    var target = {};
    for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
    }
    return target;
}

var FormValidation = function FormValidation(props) {
    var children = props.children,
        config = props.config,
        initialValues = props.initialValues,
        onSubmit = props.onSubmit,
        rest = _objectWithoutProperties(props, [
            'children',
            'config',
            'initialValues',
            'onSubmit',
        ]);

    return _react2.default.createElement(
        _Form2.default,
        _extends({ onSubmit: onSubmit }, rest),
        _react2.default.createElement(
            _Validation2.default,
            { config: config, initialValues: initialValues },
            children,
        ),
    );
};

FormValidation.propTypes = {
    children: _propTypes.func.isRequired,
    config: (0, _propTypes.shape)({}).isRequired,
    initialValues: (0, _propTypes.shape)({}),
    onSubmit: _propTypes.func,
};

exports.default = FormValidation;
