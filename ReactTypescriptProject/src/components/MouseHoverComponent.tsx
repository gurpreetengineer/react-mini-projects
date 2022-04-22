import React, { useRef } from 'react';
import withHoverHOC from './withHoverHOC';
import useHover from '../javascriptFiles/mouseActivity';

function MouseHoverComponent(props: any) {
    const hoverRef = useRef(null);
    const isHover = useHover(hoverRef);
    const { ...divProps } = props;
    return (
        <div style={{width: '100%', justifyContent: 'center', display: 'flex'}}>
            <h2 ref={hoverRef} {...divProps} style={{ color: isHover ? 'red' : 'green', width: '141px'}}>Mouse {props.textHover ? 'Over' : 'Out'}</h2>
        </div>
    )
}

export default withHoverHOC(MouseHoverComponent);