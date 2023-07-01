import { Loader2 } from 'lucide-react';
import { FC } from 'react';

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
	return (
		<div className='w-full h-screen items-center justify-center'>
			<Loader2 className='animate-spin h-1/2 h-1/2 text-indigo-800/75' />
		</div>
	);
};

export default loading;
