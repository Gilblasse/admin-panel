import React, { useState } from "react"
import { Divider, Popover, Modal } from "antd"
import {
    CloseCircleFilled,
    EditOutlined,
    DeleteOutlined,
    ExclamationCircleOutlined,
} from "@ant-design/icons"
import Avatar from "antd/lib/avatar/avatar"

export default function ActionEllipsis() {
    const [visible, setVisible] = useState(false)

    const handleClose = () => setVisible(false)
    const handleVisibleChange = () => setVisible(true)

    return (
        <Popover
            placement='bottomRight'
            content={<PopupContext handleClose={handleClose} />}
            trigger='click'
            visible={visible}
            onVisibleChange={handleVisibleChange}
        >
            <div className='grid grid-cols-3 gap-2 px-3 cursor-pointer'>
                <Avatar className=' h-2 w-2' />
                <Avatar className=' h-2 w-2' />
                <Avatar className=' h-2 w-2' />
            </div>
        </Popover>
    )
}

const PopupContext = ({ handleClose }) => {
    const showDeleteConfirm = () => {
        handleClose()
        Modal.confirm({
            title: "Are you sure delete this task?",
            icon: <ExclamationCircleOutlined />,
            content: "Some descriptions",
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk() {
                alert("OK")
            },
            onCancel() {
                alert("Cancel")
            },
        })
    }

    return (
        <div className='relative'>
            <button
                type='button'
                onClick={handleClose}
                className='absolute -right-1 -top-9 text-xl text-admin:secondary'
            >
                <CloseCircleFilled />
            </button>
            <div>
                <div className='grid grid-flow-col grid-cols-2 gap-1 items-center hover:text-gray-500 cursor-pointer'>
                    <EditOutlined />
                    <p>Edit</p>
                </div>

                <Divider className='my-2' />

                <div
                    className='grid grid-flow-col grid-cols-2 gap-1 items-center hover:text-gray-500 cursor-pointer'
                    onClick={showDeleteConfirm}
                >
                    <DeleteOutlined />
                    <p>Delete</p>
                </div>
            </div>
        </div>
    )
}
