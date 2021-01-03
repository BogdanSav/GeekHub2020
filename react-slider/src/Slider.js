import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';


export default class Slider extends React.PureComponent {
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
		this.width = this.barRef.current.clientWidth;
		this.dx = this.width / (this.props.max - this.props.min);
		this.barRect = this.barRef.current.getBoundingClientRect();
		console.log(this.barRect.width);
		this.setState({ x: this.props.value * this.dx });

	}


	onDragStart = (e) => {
		this.firstX = e.clientX;
		this.startX = e.clientX - this.HandlerRef.current.clientWidth;


		this.onDrag(e);
		document.body.addEventListener("mousemove", this.onDrag);
		document.body.addEventListener("mouseup", this.onDragEnd);


	};
	onDrag = (e) => {
		let x = this.startX + e.clientX - this.firstX;

		if (x < 0) {
			x = 0;
		}
		else if (x + 10 > this.barRect.width) {
			x = this.barRect.width;
		}
		this.setState({
			x: this.startX + e.clientX - this.firstX,

		});
		if (this.startX < x + this.dx) {
			this.setState({ value: Math.round(x / this.dx) + this.props.min });
		}
		if (this.startX > x - this.dx) {
			this.setState({ value: Math.round(x / this.dx) + this.props.min });
		}

	};
	onDragEnd = () => {
		this.startX = this.state.x;

		document.body.removeEventListener("mousemove", this.onDrag);
		document.body.removeEventListener("mouseup", this.onDragEnd);
	}
	valueChange = (e) => {
		if (Number(e.target.value) <= this.props.min) {
			this.setState({
				value: this.props.min,
				x: this.state.value * this.dx - this.props.min
			});
		} else if (Number(e.target.value) > this.props.max) {
			this.setState({
				value: this.props.max,
				x: this.state.value * this.dx -this.props.min
			});
		} else this.setState({
			value: Number(e.target.value),
			x: this.state.value * this.dx - this.props.min
		});


	}
	




	render() {

		return (
			<Root>
				<input value={this.state.value} onChange={this.valueChange} />
				<Bar ref={this.barRef}>
					<Handler x={this.state.x} onMouseDown={this.onDragStart} ref={this.HandlerRef} />

				</Bar>
			</Root>
		);
	}
}


//#region ====================== Styles ========================================

const Root = styled.div`
    padding: 10px 0;
`;

const Bar = styled.div`
    position: relative;
	height: 2px;
	background-color: black;
	margin-top: 10px;
`;

const Handler = styled.div.attrs(props => ({
	style: {
		left: props.x,
	},
}))`
    position: absolute;
	height: 10px;
	width: 10px;
	border-radius: 5px;
	background-color: red;
	top: -4px;
`;

//#endregion