import { v4 as uuid } from 'uuid';
import { Accordion as BootstrapAccordion } from 'react-bootstrap';

import { Styled } from './index.styled';

const Accordion = ({ defaultActiveKey = '0', items }) => {
	return (
		<BootstrapAccordion defaultActiveKey={defaultActiveKey}>
			{items.map((item, i) => (
				<BootstrapAccordion.Item eventKey={i.toString()} key={uuid()}>
					<Styled.Toggler>{item.title}</Styled.Toggler>
					<BootstrapAccordion.Body>{item.children}</BootstrapAccordion.Body>
				</BootstrapAccordion.Item>
			))}
		</BootstrapAccordion>
	);
};

export { Accordion };
