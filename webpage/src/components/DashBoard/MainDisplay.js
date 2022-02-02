import React, { useState, useEffect } from 'react';


const MainDisplay = () => {

    useEffect(() => {
        (async () => {
            const data = await fetch(`https://gov.uk/bank-holidays.json`, { mode: 'no-cors' });
            console.log(data);
        })();
    })

    return <div>

    </div>


}

export default MainDisplay;