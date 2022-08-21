import React, {useState} from 'react';
import {Menu} from 'antd';
import {MailOutlined, SettingOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;

const Header = () => {

    const [current, setCurrent] = useState("")

    const handleClick = () => {

    }

    return (
        <Menu
            mode="horizontal"
            defaultSelectedKeys={[current]}
            onClick={handleClick}
        >
            <Menu.Item key="mail">
                Home
            </Menu.Item>
            <SubMenu key="SubMenu" title="Register">
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
