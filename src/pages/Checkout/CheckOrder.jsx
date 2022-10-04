import React from "react"
import { AiFillTag, AiOutlineStock } from "react-icons/ai"
import ProductPrev from "../../containers/ProductsList/List/ProductPrev/ProductPrev"
import { Title2 } from "../../utils/style/Atoms"
import { Categories, ContentFooter, ContentHeader, ProductFullContent, ProductFullImage, ProductStatus, ProductWrapper } from "../Product/style"
import { CheckOrderWrapper, OrderItem } from "./style"

const CheckOrder = ({ toCheckout, name, category, image, price, cartList }) => {
  if(toCheckout === "product") {
    return (
      <ProductWrapper>
      <ProductFullImage src={`/images/product${image}.webp`} alt="" />
      <ProductFullContent>
        <ContentHeader>
          <Title2>{name}</Title2>
          <Categories>
            <div className="cat gradient__bg">category {category}</div>
            <div className="linker" />
            <div className="sub-cat">sous-cat</div>
          </Categories>
          <ProductStatus>
            <div className='gradient__text'>En Stock <AiOutlineStock /> </div>
            <div className='gradient__text'>En Solde <AiFillTag /> </div>
          </ProductStatus>
        </ContentHeader>
      </ProductFullContent>
      <ContentFooter>
        <div className='product__price'>{price} {process.env.CURRENCY || "Fcfa"}</div>
      </ContentFooter>
    </ProductWrapper>)
  }
  return <CheckOrderWrapper className="section__padding">
    {cartList.map((cartItem, index) => (
    <OrderItem key={index}>
      <ProductPrev product={cartItem.product} />
      <div className="product-quantity">{cartItem.occ} unité{cartItem.occ > 1 && "s"}</div>
      <div className="product-price">{cartItem.occ * (cartItem.product.price - (cartItem.product.price*cartItem.product.discount))} Fcfa</div>
    </OrderItem>
    ))}
  </CheckOrderWrapper>
}

export default CheckOrder;