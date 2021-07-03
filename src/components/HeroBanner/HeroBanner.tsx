import React from 'react';

interface Props {
    url: string
}

export const HeroBanner: React.FC<Props> = ({url}: Props) => {
    return (
        <div>
            <img className='HeroBanner' srcSet={url}></img>
        </div>
    )
}

export default HeroBanner

