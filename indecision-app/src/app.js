console.log('app.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'This is the subtitle for the app' ,
  options: ['One', 'Two'] 
};


// JSX - Javscript XML 
const template = (
    <div>
        <h1> {app.title} </h1>
        { app.subtitle  && <p> {app.subtitle} </p>}
        <p>{ app.options.length > 0 ? 'Here are options' : 'No options'}</p>
        <ol>
            <li> Item One </li>
            <li> Item Two </li>
        </ol>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot );

const user = {
    name : 'Johnattan',
    age : 25,
    location : 'Florida'
};

function getLocation(location){
    if(location)
        return <p> Location: {location} </p>;
    else
        return undefined;
}

const templateTwo = (
    <div>
        <h1> {user.name ? user.name : 'Anonymous'} </h1>
         {(user.age > 18 && user.age) && <p> Age: {user.age} </p>}
        {getLocation(user.location)}
    </div>
);

//ReactDOM.render(templateTwo, appRoot);