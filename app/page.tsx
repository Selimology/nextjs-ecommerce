import Stripe from "stripe";
import Product from "./components/Product";

const getProducts = async () => {
  const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY as string,
    {
      apiVersion: "2022-11-15",
    }
  );

  const products = await stripe.products.list();

  //Promise all is used to make multiple requests at the same time
  const productWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({
        product: product.id,
      });
      return {
        id: product.id,
        name: product.name,
        price: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
      };
    })
  );
  return productWithPrices;
};

export default async function Home() {
  const products = await getProducts();

  console.log("🚀 ~ Home ~ products:", products);

  return (
    <main>
      {products.map((product) => (
        <Product key={product.name} {...product}/>
      ))}
    </main>
  );
}

