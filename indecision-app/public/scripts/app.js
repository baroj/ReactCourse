'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Create VisibilitiyToggle - render, constructor, toggleVisibility
// visibility false 

var Visbility = function (_React$Component) {
    _inherits(Visbility, _React$Component);

    function Visbility(props) {
        _classCallCheck(this, Visbility);

        var _this = _possibleConstructorReturn(this, (Visbility.__proto__ || Object.getPrototypeOf(Visbility)).call(this, props));

        _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);
        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(Visbility, [{
        key: 'handleToggleVisibility',
        value: function handleToggleVisibility() {
            this.setState(function (prevState) {
                return {
                    visibility: !prevState.visibility
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.handleToggleVisibility },
                    ' ',
                    !this.state.visibility ? 'Show Details' : 'Hide Details'
                ),
                this.state.visibility && React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'details'
                    ),
                    ' '
                )
            );
        }
    }]);

    return Visbility;
}(React.Component);

;

ReactDOM.render(React.createElement(Visbility, null), document.getElementById('app'));

// const app = {
//     title: 'Visibility toggle',
//     toggle: false,
//     details: 'These are my details'
// }; 

// const onToggleDetail = () => {
//     app.toggle = !app.toggle;
//     renderDom();
// };

// const appRoot = document.getElementById('app');

// const renderDom = () => {
//     const template = (
//         <div> 
//             <h1> {app.title} </h1>
//             <button onClick={onToggleDetail}> { !app.toggle ? 'Show Details' : 'Hide Details' }</button>

//             <p> { !app.toggle ? '' : app.details }</p>

//             {app.toggle &&  ( <div> 
//                 <p> more details </p>
//             </div>)}
//         </div>
//     );


//     ReactDOM.render(template, appRoot);
// }

// renderDom();
