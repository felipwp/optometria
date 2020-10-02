import React from 'react'
import './styles.css';

export default function Loader() {
    return (
        <div className="loader">
            <svg className="circular-loader"viewBox="25 25 50 50" >
                <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#70c542" stroke-width="2" />
            </svg>
        </div>
    )
}
