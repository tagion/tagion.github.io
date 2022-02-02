import { Styled } from './index.styled';
import { IFeatureCard } from './index.model';

const FeatureCard: React.FunctionComponent<IFeatureCard> = ({
	title = '',
	label = '',
	content = '',
	className = '',
	icon = null,
}) => {
	return (
		<Styled.FeatureCard className={className}>
			<Styled.TextContainer>
				<h4 className='mb-0'>{title}</h4>
				<mark>{label}</mark>
			</Styled.TextContainer>
			<Styled.Content className=''>{content}</Styled.Content>
			{icon && icon}
		</Styled.FeatureCard>
	);
};

export { FeatureCard };
export type { IFeatureCard };
