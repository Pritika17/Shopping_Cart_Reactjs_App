import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/about.css"

const Contact = () => {
    return (
        <section className='about'>
            <Link to="/"><button>Back to Shopping</button></Link>
            <div>
                <h2 className='header'>Email: </h2><p className='contact'>makeOverStudios@abcemail.com</p>
                <h2 className='header'>Phone: </h2><p className='contact'>+123 44 5678 92</p>
            </div>

        </section>
    )
}

export default Contact