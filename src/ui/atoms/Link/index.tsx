import Link from 'next/link';

import ArrowIcon from 'lib/icons/arrow.svg';

import { Styled } from './index.styled';
import { Props } from './index.model';

const Lnk: React.FunctionComponent<Props> = (
	{ isExternal = false, children, withIcon = false, className = '', href = '', target = '', onClick },
	...rest
) => {
	const renderIcon = () => <ArrowIcon className='position-relative ms-1' style={{ top: '-2px' }} />;

	return (
		<Link {...rest} href={href} passHref={isExternal}>
			<Styled.Link className={className || ''} withIcon={withIcon} target={target} onClick={onClick}>
				{children}
				{withIcon && renderIcon()}
			</Styled.Link>
		</Link>
	);
};

export { Lnk as Link };
