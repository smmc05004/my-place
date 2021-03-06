import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import KakaoButton from '../../components/KakaoLoginBtn';
import axiosRequest from '../api/api';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	background-color: black;

	p {
		font-size: 16px;
		color: #fff;
	}
`;

interface Props {
	word: string;
}

const Test = () => {
	const [data, setData] = useState<Props>({ word: '' });

	const getData = async () => {
		const result = await axios({
			method: 'get',
			url: '/api/test',
		});
		setData(result?.data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<Wrapper>
			<p>test 페이지</p>

			<p>{data?.word}</p>

			<KakaoButton />
		</Wrapper>
	);
};

export default Test;
