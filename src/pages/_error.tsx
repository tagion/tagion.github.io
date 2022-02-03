import { NextPageContext } from 'next';

type ErrorPageProps = { statusCode: number };

function ErrorPage({ statusCode }: ErrorPageProps) {
	return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;
}

interface Context extends NextPageContext {
	// any modifications to the default context, e.g. query types
	response: ErrorPageProps;
	error: ErrorPageProps;
}

ErrorPage.getInitialProps = async ({ response, error }: Context) => {
	const statusCode = response ? response.statusCode : error ? error.statusCode : 404;

	return { statusCode };
};

export default ErrorPage;
