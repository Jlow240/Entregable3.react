import React from 'react'
import "./Styles/ResidentForm.css"

const ResidentForm = ({handleSubmit}) => {
    return (
        <section className='residentForm'>
            <h1 className='residentForm__title'>
                <img className='residentForm__title-img' src="src\assets\Rick_and_Morty2.png" alt="TITULO RICK Y MORTY" />
            </h1>
        <form className='residentForm__form' onSubmit={handleSubmit}>
            <input className='residentForm__input ' type="text" id='idLocation' placeholder='Look for a universe (1 to 126)'/>
            <label className='residentForm__lbl'>
                <span className='residentForm__lbl-txt'></span>
            </label>
            <button className='residentForm__btn'>Go!</button>
        </form>
        </section>
    )
}

export default ResidentForm