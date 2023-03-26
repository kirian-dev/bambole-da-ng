import { productsData } from '@/common/data/products.data';
import { ProductInfo } from 'module/productInfo';
import { GetStaticPaths, NextPage, GetStaticProps } from 'next';

import { useRouter } from 'next/router';

const ProductPage: NextPage<any> = ({ product }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<ProductInfo product={product} />
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const paths = productsData.map(product => ({
			params: { slug: String(product.id) },
		}));

		return { paths: paths || [], fallback: 'blocking' };
	} catch {
		return {
			paths: [],
			fallback: false,
		};
	}
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const id = params?.slug as string;

		const product = productsData.find(product => product.id === Number(id));

		return {
			props: { product },
		};
	} catch (e) {
		throw e;
	}
};
export default ProductPage;
