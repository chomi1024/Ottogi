import * as P from "./index.styles";
import { product } from "../../../DB/index";
import Link from "next/link";
import { useState } from "react";

export default function ProductWrapper(props) {
  const price = product.map((item) => item.price); // 가격만 다 가져오기
  const result = price.map((itme) => itme.toLocaleString()); //3자리 마다 끊어주기

  return (
    <P.Contents margin={props.margin}>
      {product.map((item, index) => (
        <P.Item key={product.id}>
          <Link href={`/front/product/${item.id}`}>
            <a>
              <P.Image_Wrapper>
                {props.best && <P.Number>{index + 1}</P.Number>}

                <figure>
                  <img src={item.imgsrc} alt={item.name} />
                  {item.inventory ? "" : <P.Soldout>일시품절</P.Soldout>}
                  {item.inventory ? <P.Icon_cart /> : <P.Icon_alarm />}
                </figure>
              </P.Image_Wrapper>

              <P.Detail_Wrapper>
                <p>{item.name}</p>

                <p>
                  <strong>{result[index]}</strong>원
                </p>

                <p>{item.grade}</p>

                <P.Tags>
                  {item.tag.new && <P.Tags_new></P.Tags_new>}
                  {item.tag.roomTemperature && (
                    <P.Tags_roomTemperature>실온</P.Tags_roomTemperature>
                  )}
                  {item.tag.frozen && (
                    <P.Tags_Frozen>냉장 & 냉동</P.Tags_Frozen>
                  )}
                  {item.tag.coupon && <P.Tags_Coupon></P.Tags_Coupon>}
                  {item.tag.best && (
                    <P.Tags_Best>
                      <img src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/tag_best.png?alt=media&token=f75a565b-297e-4501-8b10-542f9ba9bbf2" />
                    </P.Tags_Best>
                  )}
                  {item.tag.freeShipping && (
                    <P.Tags_FreeShipping>
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/tag_freeShipping.svg?alt=media&token=a106a249-d76b-44a5-a26a-ee4ff4b8cf5e"
                        alt=""
                      />
                    </P.Tags_FreeShipping>
                  )}
                  {item.tag.recommand && (
                    <P.Tags_Recommend>
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/tag_recommend.svg?alt=media&token=c5e0440f-628f-40af-9c41-14a44fc94cd9"
                        alt=""
                      />
                    </P.Tags_Recommend>
                  )}
                </P.Tags>
              </P.Detail_Wrapper>
            </a>
          </Link>
        </P.Item>
      ))}
    </P.Contents>
  );
}
