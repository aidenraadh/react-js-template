import React from 'react';
import SVGIcons from './SVGIcons'

export function UserThumbnail(props){
	const classes = props.classes ? ` ${props.classes}` : ''
	const Tag = props.tag

	return (
		<Tag className={'user-thumbnail'+classes} {...props.attr}>
			{props.imgUrl ? <img src={props.imgUrl} alt={'User avatar'} /> : ''}
			<span className="user-name">{props.userName}</span>
		</Tag>
	);
}

UserThumbnail.defaultProps = {
	tag: 'div', // String
	userName: 'Name', // String
	imgUrl: '', // String
	classes: '', // String
	attr: {}, // Objects
}


export function Separator(props){
	const Tag = props.tag
	const classes = `separator${props.classes ? ' '+props.classes : props.classes}`
	if(Tag === 'hr'){
		return <hr className={classes} {...props.attr}/>
	}
	return (
		<Tag className={classes} {...props.attr}></Tag>
	)
}

Separator.defaultProps = {
	tag: 'hr', // String
	classes: '', // String
	attr: {}, // Objects
}


export class Collapsible extends React.Component{
    constructor(props){
		super(props);
		this.state = {
			maxHeight: 0,
		};
		this.myRef = React.createRef();
	}

	componentDidUpdate(prevProps){

		if(prevProps.expanded !== this.props.expanded || prevProps.body !== this.props.body){

			this.setState({
				maxHeight: (this.props.expanded ? this.myRef.current.scrollHeight+'px' : 0)
			});
		}
	}

    render(){
		const Tag = (this.props.tag ? this.props.tag : 'div');

		const classes = `collapsible` +
		(this.props.expanded ? ' expanded' : '') +
		(this.props.classes ? ' '+this.props.classes : '')
		
		let attr = {...this.props.attr};
		attr['style'] = (attr['style'] ?
			{...attr['style'], maxHeight: this.state.maxHeight} : {maxHeight: this.state.maxHeight}
		);

		return (
			<Tag id={this.props.name} className={classes}
			{...attr} ref={this.myRef}>
				{this.props.body}
			</Tag>
		);
    }
}

Collapsible.defaultProps = {
	body: 'Lorem ipsum',
	expanded: false, // Boolean
	toggleExpand: () => {alert('Please set the toggle expand')},
	tag: 'div',
	classes: '',
	attr: {}
}

export function Label(props){
	const Tag = (props.tag ? props.tag : 'span');
	const classes = (props.classes ? ' '+props.classes : '');
	return (
		<Tag className={'label '+props.type+' '+props.color+classes}
		{...props.attr}>
			{props.text}
		</Tag>		
	);
}

/*
Example:

<Label
	type={'solid|light'}
	color={'blue|red|green|purple|orange|gray'}
	text={'Lorem ipsum'}
	tag={'span'} // optional
	classes={'some class'} // optional
	attr={{someattr: ''}} // optional
/>
*/

export class Accordion extends React.Component{
    constructor(props){
		super(props);
		this.state = {
			maxHeight: 0,
		};
		this.bodyWrapperRef = React.createRef();
	}
	componentDidUpdate(prevProps){

		if(prevProps.expanded !== this.props.expanded || prevProps.body !== this.props.body){

			this.setState({
				maxHeight: (this.props.expanded ? this.bodyWrapperRef.current.scrollHeight+'px' : 0)
			});
		}
	}
    render(){
		const Tag = (this.props.tag ? this.props.tag : 'div')
		const HeadingTag = (this.props.heading_tag ? this.props.heading_tag : 'h6')
		const classes = `accordion ${this.props.type}` +
			(this.props.expanded ? ' expanded' : '') +
			(this.props.classes ? ` ${this.props.classes}` : '')

		return (
			<Tag className={classes} {...this.props.attr}>
				<header className="flex-row content-space-between items-center">
					<HeadingTag className="heading text-dark-75 text-medium flex-row items-center">
						{
							this.props.heading_icon ? 
							<SVGIcons name={this.props.heading_icon}/>	: ''
						}					
						{this.props.heading}
					</HeadingTag>
					<button type="button" className="toggle flex-row content-end items-center"
					onClick={this.props.toggleExpand}>
						<SVGIcons name={'angle_double_right'} color={'blue'}/>							
						<span className="sr-only">Toggle accordion</span>
					</button>
				</header>
				<div className="body-wrapper" ref={this.bodyWrapperRef}
				style={{'maxHeight': this.state.maxHeight}}>
					<div className="body">
						{this.props.body}
					</div>
				</div>
			</Tag>
		);
    }
}

Accordion.defaultProps = {
	heading: 'Heading',
	body: 'Lorem ipsum',
	expanded: false, // Boolean
	toggleExpand: () => {alert('Please set the toggle expand')},
	type: 'white', // 'solid' || 'white'
	tag: 'div',
	heading_tag: 'h6',
	heading_icon: 'blocks', // SVG icons name
	classes: '',
	attr: {}
}