import { getProductById } from '@/app/api/products/products';
import Hero from '@/components/ui/Hero';
import MaxWidthWrapper from '@/components/layout-wrappers/MaxWidthWrapper';
import {
  METADATA_PAGE_DESCRIPTION,
  METADATA_PAGE_TITLE,
} from '@/constants/pages-data.contants';

interface ProductPageProps {
  params: {
    productId: number;
  };
}
export async function generateMetadata({ params }: ProductPageProps) {
  const product = await getProductById(params.productId);

  return {
    title: `${product.title} | ${METADATA_PAGE_TITLE}`,
    description: METADATA_PAGE_DESCRIPTION,
  };
}

async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.productId);

  return (
    <>
      <Hero>
        <h1>{product.title}</h1>
      </Hero>
      <MaxWidthWrapper>
        <p>{product.description}</p>
      </MaxWidthWrapper>
    </>
  );
}

export default ProductPage;
