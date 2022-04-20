import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import { isMobile } from 'lib/utils';

import { Link } from 'ui/atoms';

import { S } from './index.styled';
import { P } from './index.model';

import ArrowLeft from 'lib/icons/arrow-left.svg';

const Highlighted: React.FunctionComponent<P> = ({
	title,
	children,
	sidebarChildren,
	isSidebarFixed = false,
	backLink = null,
	...rest
}) => {
	const [isFixed, setIsFixed] = useState(false);

	const scrollHandler = () => {
		const windowScrollHeight = document.body.scrollTop || document.documentElement.scrollTop;

		if (windowScrollHeight > 0) {
			setIsFixed(true);
		} else {
			setIsFixed(false);
		}
	};

	useEffect(() => {
		if (isSidebarFixed && !isMobile()) {
			window.addEventListener('scroll', scrollHandler);

			return () => window.removeEventListener('scroll', scrollHandler);
		}
	}, []);

	return (
		<Container className='border-primary border-bottom' {...rest}>
			<Row style={{ height: '100%' }}>
				<S.Sidebar>
					<div
						id='sticky-sidebar'
						className={`px-3 py-425 px-md-4 px-lg-5 py-lg-6 ${isFixed ? 'fixed' : ''}`}
					>
						<S.Title>
							{backLink && (
								<Link href={backLink}>
									<ArrowLeft className='mb-1 me-1' />{' '}
								</Link>
							)}
							{title}
						</S.Title>
						{sidebarChildren}
					</div>
				</S.Sidebar>
				<S.Content>{children}</S.Content>
			</Row>
		</Container>
	);
};

export { Highlighted };
