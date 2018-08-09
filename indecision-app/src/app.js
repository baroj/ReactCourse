console.log('app.js is running');

// create app object title/subtitle
//user title subtitle in template
// render template

var app = {
  title: 'Indecision App',
  subtitle: 'This is the subtitle for the app'  
};


// JSX - Javscript XML 
var template = (
    <div>
        <h1> {app.title} </h1>
        <p> {app.subtitle} </p>
        <ol>
            <li> Item One </li>
            <li> Item Two </li>
        </ol>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot );

//Create a templateTwo var JSX Expression
// div 
//  h1 -> Johnattan Barona 
//  p -> Age: 25
//  p-> Location: Florida
//  Render Template Two instead of template


var user = {
    name : 'Johnattan',
    age : 25,
    location : 'Florida'
};

var templateTwo = (
    <div>
        <h1> {user.name} </h1>
        <p> Age: {user.age} </p>
        <p> Location: {user.location} </p>
    </div>
);

//ReactDOM.render(templateTwo, appRoot);