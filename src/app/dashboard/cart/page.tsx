import { ItemCard } from '@/app/shopping-cart';
import { Product, products } from '@/products/data/products';
import { cookies } from "next/headers";

export const metadata = {
  title: "Carrito",
  descripcion: "Carrito de compras",
}
interface ProductInCart {
  product: Product,
  quantity: number,
}


const getProductsInCart = (card: { [id: string]: number }) => {

  const productsInCart: ProductInCart[] = [];
  for (const id of Object.keys(card)) {
    const product = products.find((product) => product.id === id);
    if (product) {
      productsInCart.push({
        product,
        quantity: card[id],
      });
    }
  }
  return productsInCart;

}

export default async function CartPage() {

  const cookieStore = cookies();
  const cart = JSON.parse((await cookieStore).get("cart")?.value || "{}");
  const productsInCart = getProductsInCart(cart);

  return (
    <div>
      <h1 className="text-2xl">Productos en el carrito</h1>
      <hr className="mb-2" />
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2  w-full sm:w-8/12">
          {
            productsInCart.map(({product,quantity}) => (
              <ItemCard key={product.id} product={product} quantity={quantity}/>
            ))
            
          }
        </div>


      </div>
    </div>
  );
}