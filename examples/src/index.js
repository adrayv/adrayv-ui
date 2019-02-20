import React from 'react';
import styled from 'styled-components'
import {render} from 'react-dom';
import {BasicText, BasicColors} from '../../src';

const Layout = styled.div`
	& > * {
		margin-top: 20px;
		margin-bottom: 20px;
	}
`

const App = () => (
	<Layout>
		<BasicText xs>xs</BasicText>
		<BasicText sm>sm</BasicText>
		<BasicText md>md</BasicText>
		<BasicText lg>lg</BasicText>
		<BasicText xl>xl</BasicText>
		<BasicText xxl>xxl</BasicText>
		<BasicText xl3>xl3</BasicText>
		<BasicText bold color='blue'>Bold Blue</BasicText>
		<BasicText bold color='grayD'>Bold GrayD</BasicText>
	</Layout>
);

render(<App />, document.getElementById("root"));