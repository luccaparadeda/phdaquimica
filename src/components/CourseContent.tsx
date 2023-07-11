'use client';
import { Key, LucideIcon, TreePine } from 'lucide-react';
import { FC, useState } from 'react';
import ContentCard from './ContentCard';
import useCardContent, { cardKeyType } from '@/hooks/cardContent';
import ContentQuote from './ContentQuote';

interface CourseContentProps {
	content: {
		text: cardKeyType;
		Icon: LucideIcon;
	}[];
}

const CourseContent: FC<CourseContentProps> = ({ content }) => {
	const { cardContent, handleCardInfo } = useCardContent();
	return (
		<>
			<section className='flex flex-wrap items-center w-full justify-evenly gap-16'>
				<h2 className='w-full text-center text-2xl font-semibold md:text-3xl lg:text-4xl'>
					Conteúdos abordados
				</h2>
				{content.map(({ Icon, text }) => (
					<ContentCard
						key={text}
						Icon={Icon}
						text={text}
						onClick={() => handleCardInfo(text)}
						isClicked={text === cardContent.infoKey}
					/>
				))}
			</section>
			<ContentQuote text={cardContent.infoValue} />
		</>
	);
};

export default CourseContent;
