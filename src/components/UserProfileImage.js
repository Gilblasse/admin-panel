import Avatar from "antd/lib/avatar/avatar"
import React from "react"

export default function UserProfileImage({ imgSrc, name, email }) {
    return (
        <div className='grid grid-flow-col auto-cols-max items-center gap-4'>
            <Avatar src={imgSrc} size={60} />
            <div className=' leading-5'>
                <p className='m-0 text-admin:bold font-bold'>{name}</p>
                <p className='m-0 text-admin:norm'>{email}</p>
            </div>
        </div>
    )
}
