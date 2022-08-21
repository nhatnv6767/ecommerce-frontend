import React, {useState} from 'react';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import {Menu} from 'antd';

const {SubMenu} = Menu;

const items = [
    {
        label: 'Home',
        key: 'mail',
        icon: <MailOutlined/>,
    },
    {
        label: 'Register',
        key: 'SubMenu',
        icon: <SettingOutlined/>,
        children: [
            {
                type: 'group',
                label: '',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },

        ],
    }
];

const Header = () => {


    const [current, setCurrent] = useState("mail")

    const handleClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    }

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" items={items}/>
    );
};

export default Header;
