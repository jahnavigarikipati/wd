import React from 'react'

export default function BlogPage(props) {
    return (
        <div>
            <div className="py-5 my-5">
            <h1>Blogs {props.match.params.id}</h1>
        </div>
        </div>
    )
}
