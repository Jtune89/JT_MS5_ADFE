import React from 'react';
import Container from "react-bootstrap/Container";

class UserNotifications extends React.Component{
	
	render(){ 
		
		return (
		<Container style={{paddingTop: '10%', zIndex:'-1'}}>
		<h1>No new notifications</h1>
		</Container>
		)
		
	}
}

export default UserNotifications