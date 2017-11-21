import React from 'react';
import {ASSETS} from './api-links';

const smile54Logo = `${ASSETS}logo-smile54.png`;
export default class Author extends React.Component {
	render(){
		return (
			<div className="authorInfo">
			<span>Created by</span>
			<img src={smile54Logo} />
		</div>
		)
	}
}