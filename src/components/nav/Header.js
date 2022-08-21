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
            defaultSelectedKeys={['mail']}
            onClick={handleClick}
        >
            <Menu.Item key="mail" icon={<MailOutlined/>}>
                Navigation One
            </Menu.Item>
            <Menu.SubMenu key="SubMenu" title="Navigation Two - Submenu" icon={<SettingOutlined/>}>
                <Menu.Item key="two" icon={<AppstoreOutlined/>}>
                    Navigation Two
                </Menu.Item>
                <Menu.Item key="three" icon={<AppstoreOutlined/>}>
                    Navigation Three
                </Menu.Item>
                <Menu.ItemGroup title="Item Group">
                    <Menu.Item key="four" icon={<AppstoreOutlined/>}>
                        Navigation Four
                    </Menu.Item>
                    <Menu.Item key="five" icon={<AppstoreOutlined/>}>
                        Navigation Five
                    </Menu.Item>
                </Menu.ItemGroup>
            </Menu.SubMenu>
        </Menu>
    );
};

export default Header;
