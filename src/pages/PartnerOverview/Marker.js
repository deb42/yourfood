import React, { useState, useEffect } from 'react';

const Marker = (props) => {
    const [iconSize, setIconSize] = useState(30)
    const [iconDataSuffix, setIconDataSuffix] = useState(".svg")

    useEffect(() => {
        setIconSize(props.$hover || props.hoveredAtTable || props.selectedAtTable ? 50 : 30)
    }, [props.$hover, props.hoveredAtTable, props.selectedAtTable])

    useEffect(() => {
        setIconDataSuffix(props.selectedAtTable ? "Selected.svg" : ".svg")
    }, [props.selectedAtTable])

    return (
        // Important! Always set the container height explicitly
        <div style={{
            position: 'absolute',
            left: -iconSize/2,
            top: -iconSize/2
        }}>

            <object key={props.partner.partnerId}
                data={"/mapIcons/" + props.partner.type[0] + iconDataSuffix}
                type="image/svg+xml"
                width={iconSize} height={iconSize} />
        </div>
    );
}

export default Marker;
