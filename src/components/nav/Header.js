import React, {useState} from 'react';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import {Menu} from 'antd';

const {SubMenu} = Menu;


const Header = () => {


    const [current, setCurrent] = useState("home")

    const handleClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    }

    return (

        <Menu
            mode="horizontal"
            defaultSelectedKeys={[current]}
            onClick={handleClick}
        >
            <Menu.Item key="home" icon={<MailOutlined/>}>
                Home
            </Menu.Item>
            <SubMenu key="SubMenu" title="Register" icon={<SettingOutlined/>}>
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
