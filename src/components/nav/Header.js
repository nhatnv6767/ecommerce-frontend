import React, {useState} from 'react';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';

const {SubMenu} = Menu;

const Header = () => {

    const [current, setCurrent] = useState("")

    const handleClick = () => {

    }

    return (
        <Menu
            mode="horizontal"
            selectedKeys={[current]}
            onClick={handleClick}
        >
            <Menu.Item key="mail" icon={<MailOutlined/>}>
                Home
            </Menu.Item>
            <SubMenu title="Register" icon={<SettingOutlined/>}>

                <Menu.Item key="setting:1">
                    Option 1
                </Menu.Item>
                <Menu.Item key="setting:2">
                    Option 2
                </Menu.Item>

            </SubMenu>
        </Menu>
    );
};

export default Header;
