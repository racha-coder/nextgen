const PropDemo = (props) => {
	return (
		<div>
			<div>Hello, {props.name}</div>
			<div>Your wokring role is {props.role}</div>
			<div>Your Salary is {props.salary}</div>
		</div>
	)
}

export default PropDemo