import React, { Component } from "react";

class Overview extends Component {
	constructor(props) {
		super(props);

		this.deleteTask = this.deleteTask.bind(this);
	}

	deleteTask(e) {
		this.props.deleteHandler(e);
		alert("Successfully passed to child!");
	}
	// renderLists() {
	// 	let tasks = this.props.arr;
	// 	if (tasks === []) return <li></li>;

	// 	tasks.forEach((element) => {
	// 		return <li>{element}</li>;
	// 	});
	// }

	render() {
		let tasks = this.props.arr;
		return (
			<ul>
				{tasks.map((task) => {
					return (
						<li key={task.id}>
							<p>{task.text}</p>
							<button
								type="button"
								data-task-id={task.id}
								onClick={this.deleteTask}
							>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default Overview;
