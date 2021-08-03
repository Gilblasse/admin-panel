import React from "react"
import { Button } from "antd"
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons"
import style from "../styles/TableHeaderStyles"

export default function TableHeader() {
    return (
        <div className='flex justify-between items-center '>
            <div className='flex gap-5'>
                <Button
                    icon={<DeleteOutlined />}
                    size='large'
                    className={style.deleteBtn}
                >
                    Delete User
                </Button>

                <Button
                    icon={<PlusOutlined />}
                    size='large'
                    className={style.addUserBtn}
                >
                    Add User
                </Button>
            </div>
            <div>
                <h2 className='font-bold text-xl text-admin:bold'>
                    150 users registered
                </h2>
            </div>
        </div>
    )
}
