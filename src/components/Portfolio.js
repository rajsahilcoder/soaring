import React, { Component } from 'react';
import { List, Icon } from 'antd';

export default class Porfolio extends Component {
	render() {
		let webData = this.props.webData;

		const listData = [];
		for (let i = 0; i < webData.portfolio.length; i++) {
			listData.push({
				href: `${webData.portfolio[i].url}`,
				title: `${webData.portfolio[i].name}`,
				description: `${webData.portfolio[i].description}`,
				content: `${webData.portfolio[i].content}`,
				imgurl: `${webData.portfolio[i].imgurl}`,
				
			});
		}

		return (
			<section id="portfolio" style={{ background: '#fafbff'}}>
				<div className="row">
					<div className="twelve columns" >
						<h1>Current Work</h1>
							<List
								itemLayout="vertical"
								size="default"
								pagination={{
									onChange: (page) => {
											console.log(page);
									},
									pageSize: 3,
								}}
								dataSource={listData}
								
								renderItem={item => (
									<List.Item
										key={item.title}
										
										extra={<img id='newportfolio_' width={400} alt="logo" src={item.imgurl} />}
										style={{ textAlign: "justify" }}
									>
									<List.Item.Meta
										
										title={<a href={item.href}>{item.title}</a>}
										description={item.description}
									/>
										{item.content}
									</List.Item>
								)}
							/>
					</div>
				</div>
			</section>
		);
	}
}
