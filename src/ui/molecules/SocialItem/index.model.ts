import React from 'react';

export interface Props {
	label?: string;
	title: string;
	url: string;
	description?: string;
	icon: React.ReactElement;
	className?: string;
}
