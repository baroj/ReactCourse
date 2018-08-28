// Create VisibilitiyToggle - render, constructor, toggleVisibility
// visibility false 

class Visbility extends React.Component {
    constructor (props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    };

    handleToggleVisibility (){
        this.setState( (prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    };

    render() {
        return (
            <div>
            <button onClick={this.handleToggleVisibility}> { !this.state.visibility ? 'Show Details' : 'Hide Details' }</button>
            {this.state.visibility && (<div><p>details</p> </div>)}
            </div>
        )
    };
};

ReactDOM.render( <Visbility /> , document.getElementById('app'))




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