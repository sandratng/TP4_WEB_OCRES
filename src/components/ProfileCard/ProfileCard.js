import React, { useState } from 'react'
import './ProfileCard.css'

export default function ProfileCard({
    user
}) {

    const [colorStyle, setColorStyle] = useState('white')
    return (
        <div className="profileCardContainer" style={{
            backgroundColor: colorStyle
        }}>
            <img id="profile-picture" src={`${process.env.PUBLIC_URL}/${user.profilePicture}`} alt='profile' />
            <div id="firstName">{user.firstName}</div>
            <div id="lastName">{user.lastName}</div>
            <div id="birthDate">{user.birthDate}</div>
            <button onClick={() => colorStyle === 'white' ? setColorStyle('#DBB3B1') : setColorStyle('white')} id="change-button">Change style</button>
        </div>
    )
}
