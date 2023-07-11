'use client';
import useCardContent from '@/hooks/cardContent';
import { ChevronDown } from 'lucide-react';
import { FC, useEffect, useState } from 'react';

interface ContentQuoteProps {
	text: string;
}

const ContentQuote: FC<ContentQuoteProps> = ({ text }) => {
	const [infoText, setInfoText] = useState<string>(text);
	useEffect(() => {
		setInfoText('');
		let counter = -1;
		const intervalId = setInterval(() => {
			if (counter <= text.length - 2) {
				setInfoText((prevString) => prevString + text[counter]);
				counter++;
			} else {
				clearInterval(intervalId);
			}
		}, 100);
		console.log({ text });

		return () => {
			clearInterval(intervalId);
		};
	}, [text]);
	return (
		<blockquote className='text-white text-center border-white border-2 p-10 relative rounded-lg'>
			<ChevronDown
				color='white'
				className='absolute top-0 left-1/2  translate-x-[-50%] -translate-y-12 w-10 h-10	'
			/>
			<p className='font-sans md:text-lg after:content-["\_\_"] after:animate-ping after:duration-1000 after:ml-0.5 after:text-white-500'>
				{infoText}
			</p>
		</blockquote>
	);
};

export default ContentQuote;
