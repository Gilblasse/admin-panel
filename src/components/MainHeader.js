import { SlidersOutlined } from "@ant-design/icons"
import { Badge, Input } from "antd"
import React from "react"

export default function MainHeader() {
    return (
        <div id='MainHeader' className='flex items-center justify-between'>
            <div>
                <h1>USERS</h1>
            </div>
            <div className='flex items-center'>
                <Input.Search className='search rounded-3xl w-admin:search mr-3' />
                <a href='/#'>
                    <Badge count={5} color='#7da0da'>
                        <SlidersOutlined className='filter-svg text-admin:faded' />
                    </Badge>
                </a>
            </div>
        </div>
    )
}
