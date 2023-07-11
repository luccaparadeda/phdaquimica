import { cardKeyType } from '@/hooks/cardContent';
import { LucideIcon, TreePine } from 'lucide-react';
import { FC } from 'react';

interface ContentCardProps {
	text: cardKeyType;
	Icon: LucideIcon;
	onClick: () => void;
	isClicked: boolean;
}

const ContentCard: FC<ContentCardProps> = ({
	Icon,
	text,
	onClick,
	isClicked
}) => {
	return (
		<div
			onClick={onClick}
			className={`${
				isClicked
					? 'shadow-inner shadow-white border-2'
					: 'hover:cursor-pointer hover:scale-110 ease-in-out duration-200 transition-all'
			} h-36 w-36 flex flex-col justify-center items-center shadow-2xl border-t-2 shadow-blue-950 rounded-3xl px-2 md:h-48 md:w-48`}>
			<Icon
				color='white'
				className='flex-1 md:h-10 md:w-10'
			/>
			<p className='flex-1 text-center md:text-lg'>{text}</p>
		</div>
	);
};

export default ContentCard;
