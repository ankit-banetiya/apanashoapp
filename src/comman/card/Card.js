import React from 'react'

export default function Card(props) {

    return (
        <>
            {props.categories.map((ob) => {
                return (
                    <> 
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={ob.category.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">{ob.category.name}</p>
                            </div>
                        </div>
                    </>
                )
            })}

        </>
    )
}
