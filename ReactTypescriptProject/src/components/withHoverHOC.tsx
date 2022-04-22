import React, { useState } from 'react';

const withHoverHOC = (WrappedComponent: any) => {
    const WithHover = () => {
        const [textHover, setHover] = useState(false);
        return <WrappedComponent
            textHover={textHover}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)} />
    }
    return WithHover;
}

export default withHoverHOC;