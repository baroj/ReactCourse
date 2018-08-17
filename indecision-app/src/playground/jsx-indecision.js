console.log('app.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in hands of a computer' ,
  options: [] 
};

const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option)
    {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderDyn()
    }
};

const removeAll = () => {
    app.options = [];
    renderDyn();
};

const onMakeDecision = () => {
    const randomNum = Math.floor( Math.random() * app.options.length );
    const option = app.options[randomNum];
    alert(option);
};

const renderDyn = () => {
    const template = (
        <div>
            <h1> {app.title} </h1>
            { app.subtitle  && <p> {app.subtitle} </p>}
            <p>{ app.options.length > 0 ? 'Here are options' : 'No options'}</p>
            <p>{ app.options.length} </p>
            <button disabled = {app.options.length == 0  } onClick={onMakeDecision}> What should i do? </button>
            <button onClick={removeAll}> Remove All </button>
        
            <ol>
                { app.options.map( (option) => <li key={option}> {option} </li>) }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>     
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderDyn();