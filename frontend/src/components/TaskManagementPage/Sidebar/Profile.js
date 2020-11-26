import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/asanatransparent.png'

const Container = styled.div`
    margin-top: 2rem;
`

const ProfileImg = styled.img`
    height: 2rem;
`



const Profile = () => {
    return (
        <Container>
            <ProfileImg src={Image} />
        </Container>
    )
}

export default Profile
