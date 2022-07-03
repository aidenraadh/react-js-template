import { useState } from 'react'
import { Button } from '../Buttons'
import {SimpleCard} from '../Cards'
import {Modal, ConfirmPopup} from '../Windows'

function WindowsPage(props){
    const [smModalShown, setSmModalShown] = useState(false)
    const [mdModalShown, setMdModalShown] = useState(false)
    const [popupShown, setPopupShown] = useState(false)
    return (<>  
        <SimpleCard
            heading={'Modal'}
            body={<>
                <Button text={'Small modal'} attr={{
                    onClick: () => {setSmModalShown(true)},
                    style: {marginRight: '1.4rem'}
                }}/>
                <Button text={'Default modal'} attr={{
                    onClick: () => {setMdModalShown(true)},
                    style: {marginRight: '1.4rem'}
                }}/>
                <Button text={'Popup'} attr={{
                    onClick: () => {setPopupShown(true)},
                    style: {marginRight: '1.4rem'}
                }}/>
            </>}
        />
        <Modal
            shown={smModalShown}
            toggleModal={() => {setSmModalShown(state => !state)}}
            heading={'Small Modal'}
            size={'sm'}
            body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        />
        <Modal
            shown={mdModalShown}
            toggleModal={() => {setMdModalShown(state => !state)}}
            heading={'Default Modal'}
            body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        />              
        <ConfirmPopup
            shown={popupShown}
            togglePopup={() => {setPopupShown(state => !state)}}
        />
    </>)
}

export default WindowsPage