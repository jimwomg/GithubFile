import React from 'react';
import styles from '../styles/index.scss';
import classNames from "classnames/bind";
import { Layout, Menu, Badge, Avatar } from "antd";

const { Header, Content, Footer } = Layout;
const CB = classNames.bind(styles);

export default class Home extends React.Component {
	componentDidMount() {
		let windowHeight = document.body.offsetHeight;
		let layoutHeight = document.querySelector('#js-layout').offsetHeight;
		if (layoutHeight < windowHeight) {
			document.querySelector('#js-layout').style.height = `${windowHeight}px`;
		}
	}

	render() {
		return (
			<Layout className="layout" id='js-layout'>
				<Header className={CB('header')}>
					<div className={CB("logo")}>
						<svg style={{marginTop: '10px'}} t="1564901462180" className="icon" viewBox="0 0 1168 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2014" width="48" height="48"><path d="M313.214 407.417c1.31-121.283 79.049-199.663 199.768-200.703 100.996-0.87 202.037-1.715 302.974 0.605 36.165 0.835 43.174-12.723 38.56-44.484C842.102 77.102 769.402 13.366 676.66 12.706c-164.128-1.18-328.25-1.135-492.378-0.09C76.552 13.311 4.077 84.286 1.372 191.412c-1.87 73.9-1.795 147.915 0.02 221.815 2.215 90.483 52.763 153.664 140.956 173.411 27.596 6.174 32.001 13.073 21.132 38.045-19.812 45.514-36.86 92.237-55.057 138.451 3.674 2.91 7.364 5.824 11.033 8.724 51.698-32.141 102.526-65.806 155.464-95.777 28.486-16.123 40.25-35.115 38.92-68.521C311.184 540.949 312.499 474.138 313.214 407.417L313.214 407.417zM1009.954 244.019c-167.722-3.545-335.614-3.375-503.336-0.055-91.637 1.81-152.019 63.436-155.649 154.699-3.575 90.073-3.77 180.52 0.095 270.563 4.119 95.767 68.981 153.429 166.647 154.909 54.113 0.81 108.35 2.185 162.353-0.51 41.644-2.085 76.255 9.014 111.065 31.836 79.964 52.428 162.228 101.321 256.515 159.653-17.068-43.344-28.201-71.405-39.16-99.531-11.033-28.291-21.897-56.652-33.685-87.203 10.174-1.71 16.968-3.435 23.837-3.934 112.21-8.119 166.427-64.716 167.537-176.736 0.78-79.384 1.485-158.798-0.23-238.147C1163.808 310.915 1106.086 246.049 1009.954 244.019L1009.954 244.019z" p-id="2015" fill="#ffffff"></path></svg>
					</div>
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={['1']}
						className={CB('menu')}
					>
						<Menu.Item key="1">所有聊天室</Menu.Item>
						<Menu.Item key="2">我的聊天室</Menu.Item>
					</Menu>
					<div className={CB("avatar")}>
						<Badge count={1}>
							<Avatar shape="circle" size='large' icon="user" />
						</Badge>
					</div>
				</Header>
				<Content style={{ padding: '50px 50px 0' }}>
					<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>Created by Abiz FE-GROUP</Footer>
			</Layout>
		);
	}
}