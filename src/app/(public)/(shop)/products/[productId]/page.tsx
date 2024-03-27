import { getProductById } from '@/app/api/products/products';

async function ProductPage({ params }: { params: { productId: number } }) {
  const product = await getProductById(params.productId);

  return (
    <section>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </section>
  );
}

export default ProductPage;
