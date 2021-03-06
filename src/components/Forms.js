import React from 'react';

export function TextInput(props){
	let classes = `base-form ${props.type} ${props.color} ${props.size}` +
		(props.leftAddon !== undefined ? ` addon-left${props.leftAddon.isPlain ? ' plain-left' : ''}` : '') +
		(props.rightAddon !== undefined ? ` addon-right${props.rightAddon.isPlain ? ' plain-right' : ''}` : '') + 
		(props.containerClasses ? ` ${props.containerClasses}` : props.containerClasses)

	let formAttr = {...props.formAttr}
	if(props.formName){
		formAttr = {...formAttr,
			id: props.formName, name: props.formName, 
		}
	}

	return (
		<span className={classes} {...props.containerAttr}>
			{
				props.label === undefined ? '' :
				<label className='form-label' htmlFor={props.formName}>{props.label}</label>
			}
			<span className='form-group'>
				<input className='form-control' {...formAttr} />
				{props.leftAddon !== undefined ? 
					<span className={`addon left`}>
						{props.leftAddon.content}
					</span> 
				: ''}
				{props.rightAddon !== undefined ? 
					<span className={`addon right`}>
						{props.rightAddon.content}
					</span> 
				: ''}					
			</span>
		</span>		
	)
}

TextInput.defaultProps = {
	formName: '', // String
	type: 'outline', // String - 'outline'|'solid'
	size: 'md', // String - 'sm'|'md'|'lg'
	label: undefined, // String|JSX
	leftAddon: undefined, // {content: 'string', isPlain: false}
	rightAddon: undefined, // {content: 'string', isPlain: false}
	color: 'blue', // String - 'blue'|'green'|'red'|'orange'|'purple'
	containerClasses: '', // String
	containerAttr: {}, // Object
	formAttr: {}, // Object
}

export function Select(props){
	const classes = `base-form ${props.type} ${props.color} ${props.size}` +
		(props.leftAddon !== undefined ? ` addon-left${props.leftAddon.isPlain ? ' plain-left' : ''}` : '') +
		(props.rightAddon !== undefined ? ` addon-right${props.rightAddon.isPlain ? ' plain-right' : ''}` : '') + 
		(props.containerClasses ? ` ${props.containerClasses}` : props.containerClasses)

	let formAttr = {...props.formAttr}
	if(props.formName){
		formAttr = {...formAttr,
			id: props.formName, name: props.formName, 
		}
	}	
	return (
		<span className={classes} {...props.containerAttr}>
			{
				props.label === undefined ? '' :
				<label className='form-label' htmlFor={props.formName}>{props.label}</label>
			}
			<span className='form-group'>				
				<select className='form-control' {...formAttr}>
					{props.options.map((option, key) => (
						<option key={key} value={option.value} {...option.attr}>
							{(option.text ? option.text : option.value)}
						</option>
					))}
				</select>
				{props.leftAddon !== undefined ? 
					<span className={`addon left`}>
						{props.leftAddon.content}
					</span> 
				: ''}
				{props.rightAddon !== undefined ? 
					<span className={`addon right`}>
						{props.rightAddon.content}
					</span> 
				: ''}					
			</span>
		</span>	
	);
}

Select.defaultProps = {
	formName: '', // String
	type: 'outline', // String - 'outline'|'solid'
	size: 'md', // String - 'sm'|'md'|'lg'
	label: undefined, // String|JSX
	options: [ // Array of objects
		{value: 'Option 1', text: 'Option 1', attr: {}},
		{value: 'Option 2', text: 'Option 2', attr: {}},
	], 
	leftAddon: undefined, // {content: 'string', isPlain: false}
	rightAddon: undefined, // {content: 'string', isPlain: false}
	color: 'blue', // String - 'blue'|'green'|'red'|'orange'|'purple'
	containerClasses: '', // String
	containerAttr: {}, // Object
	formAttr: {}, // Object
}


export function Textarea(props){
	const classes = `base-form ${props.type} ${props.color} ${props.size}` +
		(props.leftAddon !== undefined ? ` addon-left${props.leftAddon.isPlain ? ' plain-left' : ''}` : '') +
		(props.rightAddon !== undefined ? ` addon-right${props.rightAddon.isPlain ? ' plain-right' : ''}` : '') + 
		(props.containerClasses ? ` ${props.containerClasses}` : props.containerClasses)

	let formAttr = {...props.formAttr}
	if(props.formName){
		formAttr = {...formAttr,
			id: props.formName, name: props.formName, 
		}
	}		

	return (
		<span className={classes} {...props.containerAttr}>
			{
				props.label === undefined ? '' :
				<label className='form-label' htmlFor={props.formName}>{props.label}</label>
			}
			<span className='form-group'>
				<textarea className='form-control' {...formAttr}></textarea>
				{props.leftAddon !== undefined ? 
					<span className={`addon left`}>
						{props.leftAddon.content}
					</span> 
				: ''}
				{props.rightAddon !== undefined ? 
					<span className={`addon right`}>
						{props.rightAddon.content}
					</span> 
				: ''}					
			</span>
		</span>	
	);
}

Textarea.defaultProps = {
	formName: '', // String
	type: 'outline', // String - 'outline'|'solid'
	size: 'md', // String - 'sm'|'md'|'lg'
	label: undefined, // String|JSX
	leftAddon: undefined, // {content: 'string', isPlain: false}
	rightAddon: undefined, // {content: 'string', isPlain: false}
	color: 'blue', // String - 'blue'|'green'|'red'|'orange'|'purple'	
	containerClasses: '', // String
	containerAttr: {}, // Object
	formAttr: {}, // Object
}

export function Checkbox(props){
	const classes = `multi-choice checkbox ${props.size} ${props.type}` +
		(props.classes ? ` ${props.classes}` : props.classes)

	let formAttr = {...props.formAttr}
	if(props.formName){
		formAttr = {...formAttr,
			id: props.formName, name: props.formName, 
		}
	}		
	return (
		<label className={classes} {...props.containerAttr}>
			<span className="choice-name">{props.label ? props.label : props.value}</span>
			<input type="checkbox" {...formAttr}/>
			<span className="checkmark">
				<span></span>
			</span>
		</label>
	);
}

Checkbox.defaultProps = {
	formName: '', // String
	size: 'md', // String - 'sm'|'md'|'lg'
	type: 'outline', // String - 'outline'|'solid'
	label: undefined, // String|JSX
	value: '', // String
	classes: '', // String
	containerAttr: {}, // Object
	formAttr: {}, // Object
}

export function Radio(props){
	const classes = `multi-choice radio ${props.size} ${props.type}` + 
		(props.classes ? ` ${props.classes}` : props.classes)

	let formAttr = {...props.formAttr}
	if(props.formName){
		formAttr = {...formAttr,
			id: props.formName, name: props.formName, 
		}
	}		

	return (
		<label className={classes} {...props.containerAttr}>
			<span className="choice-name">{props.label ? props.label : props.value}</span>
			<input type="radio" {...formAttr}/>
			<span className="checkmark">
				<span></span>
			</span>
		</label>
	)//
}

Radio.defaultProps = {
	formName: '', // String
	type: 'outline', // String - 'outline'|'basic'
	size: 'md', // String - 'sm'|'md'|'lg'
	label: undefined, // String|JSX
	value: '', // String
	classes: '', // String
	containerAttr: {}, // Object
	formAttr: {}, // Object
}

export function Switch(props){
	const classes = `multi-choice switch ${props.size}` + 
		(props.classes ? ` ${props.classes}` : props.classes)

	let formAttr = {...props.formAttr}
	if(props.formName){
		formAttr = {...formAttr,
			id: props.formName, name: props.formName, 
		}
	}		

	return (
		<label className={classes} {...props.containerAttr}>
			<span className="choice-name">{props.label ? props.label : props.value}</span>
			<input type="checkbox" {...formAttr}/>
			<span className="checkmark">
				<span></span>
			</span>
		</label>
	)//
}

Switch.defaultProps = {
	formName: '', // String
	size: 'md', // String - 'sm'|'md'|'lg'
	label: undefined, // String|JSX
	value: '', // String
	classes: '', // String
	containerAttr: {}, // Object
	formAttr: {}, // Object
}
