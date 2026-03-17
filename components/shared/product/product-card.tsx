import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";
import { Product } from "@/types/index";
const ProductCard = ({ product }: { product: Product }) => {
  //   const stars = `\u2605`;
  //or &#9733; for stars in html entity!
  return (
    <>
      <Card>
        <CardHeader>
          <Link
            href={`/product/${product.slug}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              height={300}
              width={300}
              priority={true}
            />
          </Link>
          <CardContent className="grid p-4 gap-4">
            <div className="text-xs h-5">{product.brand}</div>
            <Link href={`/product/${product.slug}`}>
              <h2 className="text-sm font-medium h-10">{product.name}</h2>
            </Link>
            <div className="flex-between gap-2 h-10 overflow-hidden">
              <span className="select-none">{product.rating} &#10024;</span>
              {product.stock > 0 ? (
                <span>
                  <ProductPrice value={Number(product.price)} />
                </span>
              ) : (
                <span className="text-destructive">Unavailable</span>
              )}
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </>
  );
};

export default ProductCard;
