import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			task: {
				text: "",
				id: "",
			},
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		let newArr = [...this.state.tasks];
		newArr.push(this.state.task);
		this.setState({ tasks: [...newArr], task: { text: "", id: "" } });
	}

	handleChange(e) {
		this.setState({
			task: {
				text: e.target.value,
				id: uniqid(),
			},
		});
	}

	deleteTask(e) {
		let newArr = this.state.tasks.filter(
			(task) => task.id !== e.target.getAttribute("data-task-id")
		);
		this.setState({
			tasks: newArr,
		});
	}

	render() {
		return (
			<div>
				<h1>Add your tasks</h1>
				<form className="form" onSubmit={this.handleSubmit}>
					<label htmlFor="taskInput">Enter Task</label>
					<input
						id="taskInput"
						onChange={this.handleChange}
						value={this.state.task.text}
					></input>
					<button onClick={this.handleSubmit} type="submit">
						Submit
					</button>
				</form>
				<ol>
					<Overview arr={this.state.tasks} deleteHandler={this.deleteTask} />
				</ol>
			</div>
		);
	}
}

export default App;
