import {useCallback, useEffect, useRef, useState} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import SVGIcons from './SVGIcons.js';

function Navigations(props){
    const location = useLocation()
	const toggleSidebar = props.toggleSidebar
	const subItemRefs = useRef({}) 
	const [subItemsHeights, setSubItemsHeights] = useState(() => {
		const heights = {}
		props.sidebarItems.forEach((item, itemKey) => {
			if(item.subItems !== undefined){ heights[`${itemKey}`] = 0 }
		})
		return heights
	})
	// Expand the target sub items and collapse the rest
	const expandSubItems = useCallback((itemKey) => {
		setSubItemsHeights(state => {
			const newHeights = {}
			for (const key in state) {
				if(key === itemKey){
					newHeights[key] = (state[key] === 0 ? subItemRefs.current[key].scrollHeight + 'px' : 0)
				}
				else{
					newHeights[key] = 0
				}
			}
			return newHeights
		})
	}, []) 	
	// Collapse all sub items
	const collapedAllSubItems = useCallback(() => {
		setSubItemsHeights(state => {
			const newHeights = {}
			for (const key in state) { newHeights[key] = 0 }
			return newHeights
		})
	}, [])

	// Expand the sidebar when sub items is expanded
	useEffect(() => {
		let expandSidebar = false
		for (const key in subItemsHeights) {
			if(subItemsHeights[key] !== 0){
				expandSidebar = true
			}
		}
		if(expandSidebar){
			toggleSidebar(expandSidebar)
		}
	}, [subItemsHeights])

	// Hide the sidebar when the route is changed
    useEffect(() => {
		toggleSidebar(false)
    }, [location, toggleSidebar])  	

	useEffect(() => {
		if(props.sidebarShown === false){
			collapedAllSubItems()
		}
	}, [props.sidebarShown])

	return (
		<nav>
			<section className="topbar">
				<a href={props.appUrl}
				className="topbar-item app-brand flex-row content-center items-center">
					{props.appLogoUrl ? <img src={props.appLogoUrl} alt={'User avatar'} /> : ''}
				</a>
				<div className="left-widgets">
					<button type="button" 
					className="topbar-item show-sidebar-btn"
					onClick={() => {props.toggleSidebar(state => !state)}}>
						<SVGIcons
							name={'article'} color={'blue'}
							attr={{style: {width: '3rem'}}}
						/>
					</button>
					<ul>
						{props.leftWidgets.map((item, key) => (
							<li key={key}>{item}</li>
						))}
					</ul>				
				</div>
				<ul className="right-widgets">
					{props.rightWidgets.map((item, key) => (
						<li key={key} className='topbar-item'>{item}</li>
					))}
				</ul>
			</section>

			<section className={'sidebar'+(props.sidebarShown ? ' shown' : '')}>
				<button type="button" className="sidebar-item toggle-sidebar-btn"
				onClick={() => {props.toggleSidebar(state => !state)}}>
					<SVGIcons
						name={'angle_double_right'} color={'blue'}
						attr={{style: {width: '3rem'}}}
					/>
				</button>								
				<ul className="sidebar-items-container">
				{props.sidebarItems.map((item, itemKey) => {
					if(item.subItems !== undefined){
						return (
							<li key={itemKey}>
								<button type='button' className='sidebar-item' onClick={() => {expandSubItems(`${itemKey}`)}}>
									<SVGIcons classes={'menu-icon'} name='layers' color={''} />
									<span className="text">{item.text}</span> 
									<SVGIcons classes={'expand-icon'} name='angle_down' attr={{style: {
										transform: `rotate(${subItemsHeights[`${itemKey}`] ? '0deg' : '-90deg'})`
									}}}/>
								</button>			
								<ul className='sub-items' ref={el => (subItemRefs.current[`${itemKey}`] = el)} 
								style={{maxHeight: subItemsHeights[`${itemKey}`]}}>
									{item.subItems.map((subItem, subItemKey) => (
										<li key={subItemKey}>
											<NavLink to={`${subItem.link ? subItem.link : ''}`} exact="true"
											className={({isActive}) => (`sidebar-item`+(isActive ? ' active': ''))}> 
												<span className="text">{subItem.text ? subItem.text : 'Menu'}</span> 
											</NavLink> 																		
										</li>										
									))}
								</ul>											
							</li>							
						)
					}
					return (
						<li key={itemKey}>
							<NavLink to={`${item.link ? item.link : ''}`} exact="true"
							className={({isActive}) => (`sidebar-item`+(isActive ? ' active': ''))}> 
								<SVGIcons classes={'menu-icon'} name={item.icon ? item.icon : 'layers'} color={''} />
								<span className="text">{item.text ? item.text : 'Menu'}</span> 
							</NavLink> 						
						</li>							
					)					
				})}	
				</ul>		
			</section>
		</nav>	
	)	
}

Navigations.defaultProps = {
	appUrl: 'Test App', // String
	appLogoUrl: '', // String
	leftWidgets: [], // Array of string or JSX
	rightWidgets: [], // Array of string or JSX
	sidebarItems: [] // Array of objects
}

export default Navigations