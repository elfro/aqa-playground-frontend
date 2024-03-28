import { getProductById } from '@/app/api/products/products';
import Hero from '@/components/ui/Hero';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

async function ProductPage({ params }: { params: { productId: number } }) {
  const product = await getProductById(params.productId);

  return (
    <MaxWidthWrapper>
      <Hero>
        <h1>{product.title}</h1>
      </Hero>
      <section>
        <p>{product.description}</p>
      </section>
    </MaxWidthWrapper>
  );
}

export default ProductPage;
