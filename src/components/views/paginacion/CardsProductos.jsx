import React from 'react'
import MostrarProductosLg from './MostrarProductosLg'
import MostrarProductosMd from './MostrarProductosMd'
import MostrarProductosSm from './MostrarProductosSm'

const CardsProductos = ({ currentPosts, totalPosts, page,currentPostsMd,currentPostsSm}) => {
    return (
        <>
            {currentPosts.length > 0 &&
                <div>
                    <MostrarProductosLg currentPosts={currentPosts} totalPosts={totalPosts} page={page}/>
                </div>}
                {currentPostsMd.length > 0 &&
            <div>
                    <MostrarProductosMd currentPostsMd={currentPostsMd} totalPosts={totalPosts} page={page - 3}/>
                </div>
                }
                {currentPostsSm.length > 0 &&
                <div>
                    <MostrarProductosSm currentPostsSm={currentPostsSm} totalPosts={totalPosts} page={page - 5}/>
                </div>
                }
        </>
    )
}

export default CardsProductos