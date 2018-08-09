'use strict';

console.log('app.js is running');

// create app object title/subtitle
//user title subtitle in template
// render template

var app = {
    title: 'Indecision App',
    subtitle: 'This is the subtitle for the app'
};

// JSX - Javscript XML 
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        app.title,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' ',
        app.subtitle,
        ' '
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            ' Item One '
        ),
        React.createElement(
            'li',
            null,
            ' Item Two '
        )
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

//Create a templateTwo var JSX Expression
// div 
//  h1 -> Johnattan Barona 
//  p -> Age: 25
//  p-> Location: Florida
//  Render Template Two instead of template


var user = {
    name: 'Johnattan',
    age: 25,
    location: 'Florida'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        user.name,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' Age: ',
        user.age,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' Location: ',
        user.location,
        ' '
    )
);

//ReactDOM.render(templateTwo, appRoot);
