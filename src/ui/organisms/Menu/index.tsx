import React, { useState } from 'react';

import { Link } from 'ui/atoms';

import { Props } from './index.model';
import { Styled } from './index.styled';

const Menu: React.FunctionComponent<Props> = ({ withSpec = false, closeMenu }) => {
	const ControllerLink = (props) => <Styled.Link {...props} onClick={closeMenu} />;

	return (
		<>
			<Styled.Nav>
				<ControllerLink href='#about'>About</ControllerLink>
				<ControllerLink href='#how-it-works'>How It Works</ControllerLink>
				<ControllerLink href='#features'>Features</ControllerLink>
				<ControllerLink href='#faq'>FAQ</ControllerLink>
				<ControllerLink href='#community'>Community</ControllerLink>
			</Styled.Nav>
			{withSpec && (
				<Styled.SpecContainer>
					<Link href='https://github.com' className='mb-2' isExternal withIcon target='_blank'>
						GitHub
					</Link>
					<Link href='https://github.com' isExternal withIcon target='_blank'>
						TechPaper
					</Link>
				</Styled.SpecContainer>
			)}
		</>
	);
};

export { Menu };
