import axios from "axios";
import OrderNow2 from "../components/UI/OrderNow2";
import { Helmet } from "react-helmet";
import Link from "next/link";
import { BACKEND_URL } from "./api/config";
import Image from "next/image";
const Reviews = (data) => {
  const items = data.items;

  return (
    <div>
      <OrderNow2 />
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <div class="header_background"></div>
      <div class="reviews-container">
        <div class="reviews-wrapper">
          <div class="reviews-heading">
            <h1 itemProp="name">
              Отзывы{" "}
              <span class="nowrap">
                <b>о ВЕЛСОН</b>
              </span>
            </h1>
          </div>

          {items.map((r) => (
            <div
              key={r.id}
              class="review-item-wrapper"
              itemScope
              itemtype="https://schema.org/Review"
            >
              <meta
                itemProp="name"
                content="ВЕЛСОН - таблетки для нормализации сна"
              />
              <div
                class="review-item-author"
                itemProp="author"
                itemScope
                itemtype="https://schema.org/Person"
              >
                <div class="review-item-author-pic"></div>
                <div class="review-item-author-text">
                  Автор отзыва: {r.author}
                </div>
                <meta itemProp="name" content={r.author} />
              </div>
              <div class="review-item-date">
                <div class="review-item-date-pic"></div>
                <div class="review-item-date-text">Дата отзыва: {r.date}</div>
                <meta itemProp="datePublished" content={r.date} />
              </div>
              <div class="review-item-description">
                <div class="review-item-description-pic"></div>
                <div
                  class="review-item-description-text"
                  itemProp={r.previewText}
                >
                  {r.previewText}
                </div>
              </div>
              <div
                class="review-item-source"
                itemProp="itemReviewed"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <meta itemProp="name" content="ООО «НПО Петровакс Фарм»" />
                <link itemProp="url" href="https://velson24.ru" />
                <meta itemProp="telephone" content="+74957307545" />
                <meta itemProp="email" content="info@petrovax.ru" />
                <div
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                />
                <meta itemProp="postalCode" content="142143" />
                <meta itemProp="addressCountry" content="Россия" />
                <meta
                  itemProp="addressLocality"
                  content="Московская область, Подольск"
                />
                <meta
                  itemProp="streetAddress"
                  content="село Покров, ул. Сосновая, д. 1"
                />
                <div class="review-item-source-pic review-item-source-pic-uteka">
                  {r.image !== null && (
                    <Link href="https://uteka.ru/lekarstvennye-sredstva/nervnaya-sistema/velson/reviews/">
                      <Image src={r.image} width={112} height={35} />
                    </Link>
                  )}
                </div>
                <div class="review-item-source-url"></div>
              </div>
              <div class="review-item-divider"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get(`${BACKEND_URL}/reviews/`);
  const data = res.data;

  return {
    props: data,
  };
}
export default Reviews;
