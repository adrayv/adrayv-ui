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

const Div = styled.div`
	width: 400px;
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
		<Div>
		<BasicText xs>Here is a long ass sentence dbkjb sldjfsld
		fs
		 dfsopdfsidfisjdfsdjfksjbdfkjbsdkjfbsdfs jdfljsdoi fjosidjfo ijsdoifj oisdj foijsoid fois jdoif os dof sod jfoij soidj fiosjoidfj ois jdoifj soidj foi soidfjsd
		 jfs
		 difosdhfois dfoi sjd</BasicText>
		</Div>
	</Layout>
);

render(<App />, document.getElementById("root"));