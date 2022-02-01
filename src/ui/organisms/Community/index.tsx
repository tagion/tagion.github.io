import { Container, Row, Col } from 'react-bootstrap';

import { SocialItem } from 'ui/molecules';

import { Styled } from './index.styled';

import cnt from 'lib/content/index.json';
import TgIcon from 'lib/img/telegram.svg';
import FbIcon from 'lib/img/facebook.svg';

const content = cnt.community;

const Community = (props) => {
	return (
		<Container className='container border-primary border-end border-start p-0 px-lg-4 py-lg-6' {...props}>
			<Styled.Title>{content.title}</Styled.Title>
			<Row className='m-0 px-3 py-425 py-lg-0 px-lg-0'>
				<Col lg={6} className='px-lg-3'>
					<SocialItem
						url={content.children[0].url}
						title={content.children[0].title}
						label={content.children[0].label}
						description={content.children[0].content}
						icon={<FbIcon />}
						className='mb-2 mb-lg-4'
						style={{ height: 155 }}
					/>
					<SocialItem
						url={content.children[1].url}
						title={content.children[1].title}
						label={content.children[1].label}
						description={content.children[1].content}
						icon={<FbIcon />}
						className='mb-2'
						style={{ height: 155 }}
					/>
				</Col>
				<Col lg={6} className='px-lg-3'>
					<SocialItem
						url={content.children[2].url}
						title={content.children[2].title}
						label={content.children[2].label}
						description={content.children[2].content}
						icon={<FbIcon />}
						className='mb-2 mb-lg-4'
						style={{ height: 155 }}
					/>
					<SocialItem
						url={content.children[3].url}
						title={content.children[3].title}
						label={content.children[3].label}
						description={content.children[3].content}
						icon={<FbIcon />}
						style={{ height: 155 }}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export { Community };
