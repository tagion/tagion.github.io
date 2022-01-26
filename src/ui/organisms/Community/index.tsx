import { Container, Row, Col } from 'react-bootstrap';

import { SocialItem } from 'ui/molecules';

import cnt from 'lib/content/index.json';
import TgIcon from 'lib/img/telegram.svg';
import FbIcon from 'lib/img/facebook.svg';

const content = cnt.community;

const Community = (props) => {
	return (
		<Container className='container border-primary border-end border-start px-5 py-6' {...props}>
			<h2 className='text-center mb-5'>{content.title}</h2>
			<Row>
				<Col md={4} className='px-3'>
					<SocialItem
						url={content.children[0].url}
						title={content.children[0].title}
						label={content.children[0].label}
						description={content.children[0].content}
						icon={<TgIcon />}
						className='h-100'
					/>
				</Col>
				<Col md={4} className='px-3'>
					<SocialItem
						url={content.children[1].url}
						title={content.children[1].title}
						label={content.children[1].label}
						description={content.children[1].content}
						icon={<FbIcon />}
						className='mb-4'
					/>
					<SocialItem
						url={content.children[2].url}
						title={content.children[2].title}
						label={content.children[2].label}
						description={content.children[2].content}
						icon={<FbIcon />}
					/>
				</Col>
				<Col md={4} className='px-3'>
					<SocialItem
						url={content.children[3].url}
						title={content.children[3].title}
						label={content.children[3].label}
						description={content.children[3].content}
						icon={<FbIcon />}
						className='mb-4'
					/>
					<SocialItem
						url={content.children[4].url}
						title={content.children[4].title}
						label={content.children[4].label}
						description={content.children[4].content}
						icon={<FbIcon />}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export { Community };
