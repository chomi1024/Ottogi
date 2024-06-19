import * as P from "./index.styles";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../src/firebaseConfig";
import Link from "next/link";

export default function ProductWrapper(props) {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    async function fetchAllDocuments() {
      try {
        const querySnapshot = await getDocs(collection(db, "product"));

        const docsArray = [];

        querySnapshot.forEach((doc) => {
          docsArray.push({ id: doc.id, ...doc.data() });
        });

        setDocuments(docsArray);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    }

    fetchAllDocuments();
  }, []);

  console.log(documents);

  return (
    <P.Contents margin={props.margin}>
      {documents.map((product, index) => (
        <P.Item key={index}>
          <Link href="/main">
            <a>
              <P.Image_Wrapper>
                {product.best && <P.Number>{index + 1}</P.Number>}

                <figure>
                  <img
                    src={product.imgSrc && product.imgSrc[0].thumbnail} //이미지가 없어도 로딩되게끔
                    alt={product.name}
                  />
                  {product.inventory == 0 ? (
                    <P.Soldout>일시품절</P.Soldout>
                  ) : (
                    ""
                  )}
                  {product ? <P.Icon_cart /> : <P.Icon_alarm />}
                </figure>
                <P.Detail_Wrapper>
                  <p>{product.name}</p>

                  <p>
                    <strong>{product.price?.toLocaleString()}</strong>원
                  </p>

                  <p>{product.grade}</p>

                  <P.Tags>
                    {product.tag?.new && <P.Tags_new></P.Tags_new>}
                    {product.tag?.roomTemperature && (
                      <P.Tags_roomTemperature>실온</P.Tags_roomTemperature>
                    )}
                    {product.tag?.frozen && (
                      <P.Tags_Frozen>냉장 & 냉동</P.Tags_Frozen>
                    )}
                    {product.tag?.coupon && <P.Tags_Coupon></P.Tags_Coupon>}
                    {product.tag?.best && (
                      <P.Tags_Best>
                        <img src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/tag_best.png?alt=media&token=f75a565b-297e-4501-8b10-542f9ba9bbf2" />
                      </P.Tags_Best>
                    )}
                    {product.tag?.freeShipping && (
                      <P.Tags_FreeShipping>
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/tag_freeShipping.svg?alt=media&token=a106a249-d76b-44a5-a26a-ee4ff4b8cf5e"
                          alt=""
                        />
                      </P.Tags_FreeShipping>
                    )}
                    {product.tag?.recommand && (
                      <P.Tags_Recommend>
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/tag_recommend.svg?alt=media&token=c5e0440f-628f-40af-9c41-14a44fc94cd9"
                          alt=""
                        />
                      </P.Tags_Recommend>
                    )}
                  </P.Tags>
                </P.Detail_Wrapper>
              </P.Image_Wrapper>
            </a>
          </Link>
        </P.Item>
      ))}
    </P.Contents>
  );
}
