import { useState, useEffect } from 'react';

import { Menu } from 'ui/organisms';
import { Logo, Burger } from 'ui/molecules';

import { Styled } from './index.styled';

const Header = () => {
	const [isOpened, setIsOpened] = useState(false);

	useEffect(() => {
		const body = document.querySelector('body');

		if (body) {
			isOpened ? body.classList.add('no-scroll') : body.classList.remove('no-scroll');
		}
	}, [isOpened, setIsOpened]);

	return (
		<>
			<Styled.Container>
				<Logo />
				<Menu />
				<Burger onClick={() => setIsOpened(!isOpened)} isOpened={isOpened} />
			</Styled.Container>
			<Styled.OffsetMenu isOpened={isOpened}>
				<Menu
					withSpec={true}
					closeMenu={() => {
						console.log('close menu');
						setIsOpened(false);
					}}
				/>
			</Styled.OffsetMenu>
		</>
	);
};

export { Header };
