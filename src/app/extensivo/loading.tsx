import { FC } from 'react';

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
	return <div className='h-screen w-full text-4xl'>Loading...</div>;
};

export default loading;
