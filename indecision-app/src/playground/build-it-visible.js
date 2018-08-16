
const app = {
    title: 'Visibility toggle',
    toggle: false,
    details: 'These are my details'
}; 

const onToggleDetail = () => {
    app.toggle = !app.toggle;
    renderDom();
};

const appRoot = document.getElementById('app');

const renderDom = () => {
    const template = (
        <div> 
            <h1> {app.title} </h1>
            <button onClick={onToggleDetail}> { !app.toggle ? 'Show Details' : 'Hide Details' }</button>
            /*either one works buttons does not create a div */
            <p> { !app.toggle ? '' : app.details }</p>
            {app.toggle &&  ( <div> 
                <p> more details </p>
            </div>)}
        </div>
    );

    

    ReactDOM.render(template, appRoot);
}

renderDom();