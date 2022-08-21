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
                Navigation One
            </Menu.Item>
            <SubMenu title="Navigation Two - Submenu" icon={<SettingOutlined/>}>
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1" icon={<AppstoreOutlined/>}>
                        Navigation Four
                    </Menu.Item>
                    <Menu.Item key="setting:2" icon={<AppstoreOutlined/>}>
                        Navigation Five
                    </Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
        </Menu>
    );
};

export default Header;
