import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

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
	breadcrumbs,
	contentWithPaddings = true,
	className,
	...rest
}) => {
	const [isFixed, setIsFixed] = useState(false);
	const [sidebarWidth, setSidebarWidth] = useState<number>(0);

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

	useEffect(() => {
		const sidebarDOM = document.getElementById('sidebar');

		if (isSidebarFixed && !isMobile()) {
			sidebarDOM && setSidebarWidth(sidebarDOM.offsetWidth || 0);
			window.addEventListener('resize', () => {
				sidebarDOM && setSidebarWidth(sidebarDOM.offsetWidth || 0);
			});

			return () => window.removeEventListener('resize', () => {});
		}
	}, []);

	return (
		<Container className={`overflow-hidden border-primary border-bottom border-start border-end ${className}`} {...rest}>
			<Row style={{ height: '100%' }}>
				<S.Sidebar id='sidebar' $sidebarWidth={sidebarWidth}>
					<div
						id='sticky-sidebar'
						className={`px-3 py-425 px-md-4 px-lg-5 py-lg-6 ${isFixed ? 'fixed' : ''}`}
					>
						<S.Title>
							{!backLink &&
								breadcrumbs?.length &&
								breadcrumbs.map((href, i) =>
									i !== breadcrumbs.length - 1 ? (
										<span key={uuid()}>
											<Link href={href}>
												{href === '/' && 'Home'}
												{href === '/blog' && 'Blog'}
											</Link>
											{' / '}
										</span>
									) : (
										<span key={uuid()}>{href}</span>
									),
								)}
							{!breadcrumbs && backLink && (
								<Link href={backLink}>
									<ArrowLeft width='24px' height='24px' className='mb-1 me-1' />{' '}
								</Link>
							)}
							{!breadcrumbs && title}
						</S.Title>
						{sidebarChildren}
					</div>
				</S.Sidebar>
				<S.Content $withPaddings={contentWithPaddings}>{children}</S.Content>
			</Row>
		</Container>
	);
};

export { Highlighted };
