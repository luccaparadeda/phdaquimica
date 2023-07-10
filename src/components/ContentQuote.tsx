'use client';
import useCardContent from '@/hooks/cardContent';
import { ChevronDown } from 'lucide-react';
import { FC } from 'react';

interface ContentQuoteProps {
	text: string;
}

const ContentQuote: FC<ContentQuoteProps> = ({}) => {
	return (
		<blockquote className='text-white text-center border-white border-2 p-10 relative rounded-lg'>
			<ChevronDown
				color='white'
				className='absolute top-0 left-1/2  translate-x-[-50%] -translate-y-12 w-10 h-10	'
			/>
			<p className='font-sans md:text-lg'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
				voluptatum, quibusdam, quia, voluptate quod quos voluptatibus voluptas
				quas doloribus quidem natus. Quisquam voluptatum, quibusdam, quia,
				voluptate quod quos voluptatibus voluptas quas
			</p>
		</blockquote>
	);
};

export default ContentQuote;
