import { useState } from 'react';
import { Toast as BootstrapToast, ToastContainer } from 'react-bootstrap';

import { Button } from 'ui/atoms';

const Toast = ({ title, content, isShown = true, buttonHandler, buttonTitle }) => {
	const [show, setShow] = useState(isShown);

	return (
		<ToastContainer position='bottom-end'>
			<BootstrapToast onClose={() => setShow(false)} show={show}>
				<BootstrapToast.Header>
					<strong className='me-auto'>{title}</strong>
				</BootstrapToast.Header>
				<BootstrapToast.Body>
					{content}
					{buttonHandler && (
						<Button
							onClick={() => {
								buttonHandler();
								setShow(false);
							}}
						>
							{buttonTitle}
						</Button>
					)}
				</BootstrapToast.Body>
			</BootstrapToast>
		</ToastContainer>
	);
};

export { Toast };
