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

var _createClass = (function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
})();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _FormContext = require('./FormContext');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
        );
    }
    return call && (typeof call === 'object' || typeof call === 'function')
        ? call
        : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError(
            'Super expression must either be null or a function, not ' +
                typeof superClass,
        );
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true,
        },
    });
    if (superClass)
        Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
}

var Validation = (function(_Component) {
    _inherits(Validation, _Component);

    function Validation() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Validation);

        for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
        ) {
            args[_key] = arguments[_key];
        }

        return (
            (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                this,
                (_ref =
                    Validation.__proto__ ||
                    Object.getPrototypeOf(Validation)).call.apply(
                    _ref,
                    [this].concat(args),
                ),
            )),
            _this)),
            (_this.getFields = function(source) {
                var config = _this.props.config;

                var getFirstDefinedValue = function getFirstDefinedValue() {
                    for (
                        var _len2 = arguments.length,
                            values = Array(_len2),
                            _key2 = 0;
                        _key2 < _len2;
                        _key2++
                    ) {
                        values[_key2] = arguments[_key2];
                    }

                    return values.find(function(value) {
                        return value !== undefined;
                    });
                };
                return Object.keys(config).reduce(function(allFields, field) {
                    return _extends(
                        {},
                        allFields,
                        _defineProperty(
                            {},
                            field,
                            getFirstDefinedValue(source[field], ''),
                        ),
                    );
                }, {});
            }),
            _temp)),
            _possibleConstructorReturn(_this, _ret)
        );
    }

    _createClass(Validation, [
        {
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _props = this.props,
                    register = _props.register,
                    initialValues = _props.initialValues,
                    config = _props.config;

                register(config, this.getFields(initialValues));
            },
        },
        {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this.props.unregister(this.props.config);
            },
        },
        {
            key: 'render',
            value: function render() {
                var _props2 = this.props,
                    errors = _props2.errors,
                    fields = _props2.fields,
                    submitted = _props2.submitted,
                    children = _props2.children,
                    config = _props2.config,
                    setField = _props2.setField;

                var childrenArgs = {
                    errors: errors,
                    fields: this.getFields(fields),
                    submitted: submitted,
                    setField: setField,
                };

                return children(childrenArgs);
            },
        },
    ]);

    return Validation;
})(_react.Component);

Validation.defaultProps = {
    errors: {},
    fields: {},
    initialValues: {},
};
Validation.propTypes = {
    config: (0, _propTypes.shape)({}).isRequired,
    errors: (0, _propTypes.shape)({}),
    fields: (0, _propTypes.shape)({}),
    register: _propTypes.func,
    submitted: _propTypes.bool,
    unregister: _propTypes.func,
};
exports.default = (0, _FormContext.withFormContext)(Validation);
