import React from 'react';
import styled from 'styled-components';

export default class DoubleSlider extends React.PureComponent {
	constructor(props) {
		super(props)
		this.barRef = React.createRef();
		this.HandlerRef = React.createRef();
		this.state = {
			value: this.props.value,
			x: 0,

		}
		this.width = 0,
		this.dx = 0;
		this.startX = 0;
		this.firstX = 0;


	}
	componentDidMount() {
		// this.width = this.barRef.current.clientWidth;
		// this.dx = this.width / (this.props.max - this.props.min);
		// this.setState({ x: this.props.value * this.dx });

	}


	onDragStart = (e) => {
		this.firstX = e.clientX;
		this.startX = e.clientX;
		console.log(this.state.x);
		console.log(this.firstX);
		// this.firstY = e.clientY;
		this.onDrag(e);
		document.body.addEventListener("mousemove", this.onDrag);
		document.body.addEventListener("mouseup", this.onDragEnd);


	};
	onDrag = (e) => {
		// let x = this.startX + e.clientX - this.firstX;

		// if (x < 0) {
		// 	x = 0;
		// }
		// else if (x > this.width) {
		// 	x = this.width;
		// }
		// this.setState({
		// 	x: this.startX + e.clientX - this.firstX,

		// });
		// if (this.startX < x + this.dx) {
		// 	this.setState({ value: Math.round(x / this.dx) + this.props.min });
		// }
		// if (this.startX > x - this.dx) {
		// 	this.setState({ value: Math.round(x / this.dx) + this.props.min });
		// }

	};
	onDragEnd = () => {
		this.startX = this.state.x;

		document.body.removeEventListener("mousemove", this.onDrag);
		document.body.removeEventListener("mouseup", this.onDragEnd);
	}
	valueChange = (e) => {
		this.setState({
			value: e.target.value,
			x: this.state.value * this.dx,
		});



	}

	render() {
		return (
			<Root>
				<input/>
				<input/>

				<Bar>
					<Handler value={100}/>
					<Handler value={200}/>
				</Bar>
			</Root>
		);
	}
}


//region ====================== Styles ========================================

const Root = styled.div`
    padding: 10px 0;
`;

const Bar = styled.div`
    position: relative;
	height: 2px;
	background-color: black;
    margin-top: 10px;
`;

const Handler = styled.div`
    position: absolute;
	height: 10px;
	width: 10px;
	border-radius: 5px;
    background-color: red;
	top: -4px;
	left: ${p => p.value + 'px'};
`;

//endregion