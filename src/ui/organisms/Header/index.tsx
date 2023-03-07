import { useState, useEffect } from 'react';

import { Menu } from 'ui/organisms';
import { Logo, Burger } from 'ui/molecules';
import { POSITION_SIZES } from 'lib/constants';

import { Styled } from './index.styled';

const Header = () => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const [isMenuScrolling, setIsMenuScrolling] = useState<boolean>(false);

	useEffect(() => {
		const body = document.querySelector('body');

		if (body) {
			isOpened ? body.classList.add('no-scroll') : body.classList.remove('no-scroll');
		}
	}, [isOpened, setIsOpened]);

	const setIsMenuScrollingHandler = (menuOffsetHeight: number) => {
		setIsMenuScrolling(window?.innerHeight <= menuOffsetHeight + POSITION_SIZES.TOP_FIXED_MENU);
	};

	useEffect(() => {
		const menuOffsetHeight = document.getElementById('menu')?.offsetHeight || 0;
		setIsMenuScrollingHandler(menuOffsetHeight);

		window.addEventListener(
			'resize',
			() => {
				setIsMenuScrollingHandler(menuOffsetHeight);
			},
			false,
		);
		return () => window.removeEventListener('resize', () => {});
	}, []);

	return (
		<>
			<Styled.Container>
				<Logo />
				<Menu />
				<Burger onClick={() => setIsOpened(!isOpened)} isOpened={isOpened} />
			</Styled.Container>
			<Styled.OffsetMenu $isOpened={isOpened} $isMenuScrolling={isMenuScrolling}>
				<Styled.MenuWrapper id='menu'>
					<Menu withSpec={true} closeMenu={() => setIsOpened(false)} />
				</Styled.MenuWrapper>
			</Styled.OffsetMenu>
		</>
	);
};

export { Header };
