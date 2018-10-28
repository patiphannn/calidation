'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});

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

var _slicedToArray = (function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for (
                var _i = arr[Symbol.iterator](), _s;
                !(_n = (_s = _i.next()).done);
                _n = true
            ) {
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i['return']) _i['return']();
            } finally {
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
        } else {
            throw new TypeError(
                'Invalid attempt to destructure non-iterable instance',
            );
        }
    };
})();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ValidatorsContext = require('./ValidatorsContext');

var _FormContext = require('./FormContext');

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

var removeFrom = function removeFrom(original) {
    return function(fieldsToRemove) {
        return Object.entries(original)
            .filter(function(_ref) {
                var _ref2 = _slicedToArray(_ref, 1),
                    fieldName = _ref2[0];

                return !fieldsToRemove.includes(fieldName);
            })
            .reduce(function(all, _ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                    fieldName = _ref4[0],
                    fieldValue = _ref4[1];

                return _extends(
                    {},
                    all,
                    _defineProperty({}, fieldName, fieldValue),
                );
            }, {});
    };
};

var Form = (function(_Component) {
    _inherits(Form, _Component);

    function Form() {
        var _ref5;

        var _temp, _this, _ret;

        _classCallCheck(this, Form);

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
                (_ref5 =
                    Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(
                    _ref5,
                    [this].concat(args),
                ),
            )),
            _this)),
            (_this.state = {
                config: {},
                errors: {},
                fields: {},
                submitted: false,
            }),
            (_this.onChange = function(e) {
                var value =
                    e.target.type === 'file'
                        ? e.target.files.length <= 1
                            ? e.target.files[0]
                            : e.target.files
                        : e.target.type === 'checkbox'
                            ? e.target.checked
                            : e.target.value;

                var fields = _extends(
                    {},
                    _this.state.fields,
                    _defineProperty({}, e.target.name, value),
                );
                var errors = _this.validate(fields, _this.state.config);
                _this.setState({ errors: errors, fields: fields });
            }),
            (_this.onSubmit = function(e) {
                e.preventDefault();
                _this.setState({ submitted: true });
                var _this$state = _this.state,
                    errors = _this$state.errors,
                    fields = _this$state.fields;

                _this.props.onSubmit({
                    errors: errors,
                    fields: fields,
                    isValid: Object.values(errors).every(function(error) {
                        return error === null;
                    }),
                });
            }),
            (_this.setField = function(diff) {
                var fields = _extends({}, _this.state.fields, diff);
                var errors = _this.validate(fields, _this.state.config);
                _this.setState({ errors: errors, fields: fields });
            }),
            (_this.validate = function(fields, config) {
                return Object.entries(config).reduce(function(
                    allErrors,
                    _ref6,
                ) {
                    var _ref7 = _slicedToArray(_ref6, 2),
                        name = _ref7[0],
                        fieldConfig = _ref7[1];

                    return _extends(
                        {},
                        allErrors,
                        _defineProperty(
                            {},
                            name,
                            _this.validateField(
                                fieldConfig,
                                name,
                                fields,
                                allErrors,
                            ),
                        ),
                    );
                },
                {});
            }),
            (_this.validateField = function(
                fieldValidators,
                name,
                allFields,
                allErrors,
            ) {
                return Object.entries(fieldValidators).reduce(function(
                    error,
                    _ref8,
                ) {
                    var _ref9 = _slicedToArray(_ref8, 2),
                        validatorName = _ref9[0],
                        validatorConfig = _ref9[1];

                    if (error) return error;

                    var validator = _this.props.validators[validatorName];
                    (0, _invariant2.default)(
                        validator,
                        "You specified a validator that doesn't exist. You " +
                            ('specified ' +
                                validatorName +
                                '. Available validators: \n\n') +
                            Object.keys(_this.props.validators).join(',\n'),
                    );

                    var context = {
                        fields: allFields,
                        errors: _extends({}, _this.state.errors, allErrors),
                    };

                    if (typeof validatorConfig === 'function') {
                        validatorConfig = validatorConfig(context);
                    }

                    if (typeof validatorConfig === 'string') {
                        validatorConfig = { message: validatorConfig };
                    }

                    if (
                        typeof validatorConfig.validateIf === 'function' &&
                        !validatorConfig.validateIf(context)
                    ) {
                        return null;
                    } else if (
                        typeof validatorConfig.validateIf === 'boolean' &&
                        !validatorConfig.validateIf
                    ) {
                        return null;
                    }

                    return validator(validatorConfig)(allFields[name]);
                },
                null);
            }),
            (_this.registerSubComponent = function(
                subComponentConfig,
                initialValues,
            ) {
                var config = _extends(
                    {},
                    _this.state.config,
                    subComponentConfig,
                );
                var fields = _extends({}, _this.state.fields, initialValues);
                var errors = _this.validate(fields, config);

                _this.setState(function(prevState) {
                    return {
                        config: _extends({}, prevState.config, config),
                        fields: _extends({}, prevState.fields, fields),
                        errors: _extends({}, prevState.errors, errors),
                    };
                });
            }),
            (_this.unregisterSubComponent = function(fieldsToRemove) {
                var keys = Object.keys(fieldsToRemove);
                var fields = removeFrom(_this.state.fields)(keys);
                var config = removeFrom(_this.state.config)(keys);
                var errors = removeFrom(_this.state.errors)(keys);

                _this.setState({
                    config: config,
                    errors: _this.validate(fields, config),
                    fields: fields,
                });
            }),
            _temp)),
            _possibleConstructorReturn(_this, _ret)
        );
    }

    _createClass(Form, [
        {
            key: 'render',
            value: function render() {
                var _props = this.props,
                    children = _props.children,
                    onSubmit = _props.onSubmit,
                    rest = _objectWithoutProperties(_props, [
                        'children',
                        'onSubmit',
                    ]);

                var formContext = {
                    errors: this.state.errors,
                    fields: this.state.fields,
                    register: this.registerSubComponent,
                    setField: this.setField,
                    submitted: this.state.submitted,
                    unregister: this.unregisterSubComponent,
                };
                return _react2.default.createElement(
                    'form',
                    _extends(
                        { onChange: this.onChange, onSubmit: this.onSubmit },
                        rest,
                    ),
                    _react2.default.createElement(
                        _FormContext.FormProvider,
                        { value: formContext },
                        children,
                    ),
                );
            },
        },
    ]);

    return Form;
})(_react.Component);

Form.defaultProps = {
    onSubmit: function onSubmit(f) {
        return f;
    },
};
Form.propTypes = {
    onSubmit: _propTypes.func,
    validators: (0, _propTypes.shape)({}).isRequired,
};
exports.default = (0, _ValidatorsContext.withValidators)(Form);
