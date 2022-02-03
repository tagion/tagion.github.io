import { v4 as uuid } from 'uuid';
import { Accordion as BootstrapAccordion } from 'react-bootstrap';

import { Props } from './index.model';
import { Styled } from './index.styled';

const Accordion: React.FunctionComponent<Props> = ({ defaultActiveKey = '0', items }) => {
	return (
		<BootstrapAccordion defaultActiveKey={defaultActiveKey}>
			{items.map(({ title, content = '' }, i) => (
				<BootstrapAccordion.Item eventKey={i.toString()} key={uuid()}>
					<Styled.Toggler>{title}</Styled.Toggler>
					<BootstrapAccordion.Body>{content}</BootstrapAccordion.Body>
				</BootstrapAccordion.Item>
			))}
		</BootstrapAccordion>
	);
};

export { Accordion };
