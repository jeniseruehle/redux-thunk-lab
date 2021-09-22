import React from 'react'

const CatList = props => {
    const allCats = props.catPics.map(cat => 
        <img key={cat.id} {...cat} src={cat.url} alt={cat.id}/>)

    return (
        <div>
        {allCats}
        </div>
    )
}

export default CatList