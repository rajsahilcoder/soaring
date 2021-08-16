import React, { Component } from 'react';
import { Timeline, Icon } from 'antd';

export default class timeline extends Component {
	render() {
		return (
			<section id="timeline" style= {{ background: "#fafbff" }}>
				<div className="row">
					<div className="twelve columns collapsed">
						<h1>Timeline</h1>
						<Timeline mode="alternate" >
							{/* <Timeline.Item style={{ fontSize: '15px' }}>
								Create a services site 2019-01-01
							</Timeline.Item> */}

							<Timeline.Item color="green" style={{ fontSize: '13px' }}>
								Hi this is Sahil Raj
							</Timeline.Item >

							{/* <Timeline.Item style={{ fontSize: '15px' }} dot={<Icon type="clock-circle-o" style={{ fontSize: '15px' }} />}>
								Buy a cow. 
							</Timeline.Item> */}

							<Timeline.Item color="red" style={{ fontSize: '13px' }}>
								I am from AI and Ds
							</Timeline.Item>

							<Timeline.Item style={{ fontSize: '13px' }}>
								I am member of Soaring eagles team
							</Timeline.Item>

							<Timeline.Item style={{ fontSize: '13px' }} dot={<Icon type="clock-circle-o" style={{ fontSize: '13px' }} />}>
								Currently we are working on Nidhi Prayas Yojana!
							</Timeline.Item>
						</Timeline>
					</div>
				</div>
			</section>
		);
	}
}