import { Styled } from './index.styled';
import { IFeatureCard } from './index.model';

const FeatureCard: React.FunctionComponent<IFeatureCard> = ({
	title = '',
	content = '',
	className = '',
	icon = null,
}) => {
	return (
		<Styled.FeatureCard className={className}>
			<h4 className='mb-2'>{title}</h4>
			<Styled.Content className=''>{content}</Styled.Content>
			{icon && icon}
		</Styled.FeatureCard>
	);
};

export { FeatureCard };
export type { IFeatureCard };
