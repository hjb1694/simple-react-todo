import React, {Component} from 'react';
import InputField from './components/inputField/inputField';
import ToDoList from './components/ToDoList/ToDoList';

class App extends Component {

    state = {
        input : '',
        todos : []
    }


    onChangeHandler = e => {

        this.setState({input : e.target.value});


    }

    onSubmitHandler = () => {

        const toDos = [...this.state.todos];

        const id = toDos.length ? toDos[toDos.length - 1].id + 1 : 1;

        toDos.push({
            id, 
            description : this.state.input, 
            completed : false
        });

        this.setState({todos : toDos, input : ''});

    }

    completeItem = id => {

        let todos = [...this.state.todos];

        todos = todos.map((item, index) => {

            if(item.id === id){

                const completed = !item.completed;

                return {
                    id : item.id, 
                    completed, 
                    description : item.description
                }

            } 

            return item;

        });

        this.setState({todos});

    }

    toDoList = () => {

        if(this.state.todos.length){

            return <ToDoList todos={this.state.todos} completeItem={this.completeItem}/>;

        }

        return null;


    }



    render(){

        return (
            <div className="App">
                <InputField change={this.onChangeHandler} submit={this.onSubmitHandler} input={this.state.input}/>
                {this.toDoList()}
            </div>
        );

    }

}


export default App;