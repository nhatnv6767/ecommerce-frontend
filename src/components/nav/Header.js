import React, {useState} from 'react';
import {AppstoreOutlined, SettingOutlined, UserAddOutlined, UserOutlined} from '@ant-design/icons';
import {Menu} from 'antd';

const {SubMenu, Item} = Menu;


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
            <Item key="home" icon={<AppstoreOutlined/>}>
                Home
            </Item>

            <Item
                key="register"
                icon={<UserAddOutlined/>}
                className="float-end"
            >
                Register
            </Item>

            <Item
                key="login"
                icon={<UserOutlined/>}
                className="float-end"
            >
                Login
            </Item>

            <SubMenu key="SubMenu" title="Username" icon={<SettingOutlined/>}>
                <Item key="setting:1">
                    Option 1
                </Item>
                <Item key="setting:2">
                    Option 2
                </Item>
            </SubMenu>
        </Menu>
    );
};

export default Header;
