const EventHandling = () => {
	return (
		<button
			onClick={() => alert("You Clicked the Button !")}
			// onDoubleClick={() => alert("You Double Clicked !")}
			// onMouseOver={() => alert("You Hovered the button")}
		>
			Click to see what happens
		</button>
	)
}

export default EventHandling