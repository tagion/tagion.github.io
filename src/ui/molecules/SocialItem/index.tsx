import { Icon } from 'ui/atoms';

import { Styled } from './index.styled';
import { Props } from './index.model';

const SocialItem: React.FunctionComponent<Props> = ({
	url,
	title,
	label,
	icon,
	description = '',
	className = '',
	...rest
}) => {
	return (
		<Styled.Link href={url} isExternal target='_blank'>
			<Styled.Card className={className} {...rest}>
				<Styled.Badge title={label} />
				<Icon className='me-2'>{icon}</Icon>
				<Styled.TextContainer>
					<h4>{title}</h4>
					<p className='m-0'>{description}</p>
				</Styled.TextContainer>
			</Styled.Card>
		</Styled.Link>
	);
};

export { SocialItem };
