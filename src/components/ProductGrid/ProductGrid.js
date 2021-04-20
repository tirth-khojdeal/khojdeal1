import {Container,Small} from './styles';
function ProductGrid() {
    let data = {
      products: [
        {
          id: "#1 IN 2021",
          img:
            "https://images-na.ssl-images-amazon.com/images/I/41FVKtwS6QL.jpg",
          title: "On Call Plus Glucometer",
          desc_line1: "Our #1 Most Popular Choice",
          desc_line2: "Get Upto 51% Off with 10 Free Strips",
          desc_line3: "CE Certified from ACON USA",
          desc_line4: "Short measuring time of 10 seconds",
          desc_line5: "Compact &amp; easy to carry",
          desc_line6: "WARRANTY : 5 years on Product",
          desc_line7: "Pay On Delivery Available",
          rating_val: "9.9",
          rating_icon: "https://www.khojdeal.com/sales/assets/star.svg",
          rating_text: '"Excellent"',
          product_link: "Check Price",
          product_review: "Check Customer reviews",
        },
        {
          id: "#2",
          img:
            "https://images-na.ssl-images-amazon.com/images/I/61eMOFgr-0L._SL1500_.jpg",
          title: "DR. MOREPEN BG-03 Glucometer",
          desc_line1: "Our #1 Most Popular Choice",
          desc_line2: "Get Upto 51% Off with 10 Free Strips",
          desc_line3: "CE Certified from ACON USA",
          desc_line4: "Short measuring time of 10 seconds",
          desc_line5: "Compact &amp; easy to carry",
          desc_line6: "WARRANTY : 5 years on Product",
          desc_line7: "Pay On Delivery Available",
          rating_val: "9.6",
          rating_icon: "https://www.khojdeal.com/sales/assets/star.svg",
          rating_text: '"Great"',
          product_link: "Check Price",
          product_review: "Check Customer reviews",
        },
        {
          id: "#3",
          img:
            "https://images-na.ssl-images-amazon.com/images/I/61jrCXlZZmL._SL1000_.jpg",
          title: "BeatO CURV Glucometer Kit",
          desc_line1: "Our #1 Most Popular Choice",
          desc_line2: "Get Upto 51% Off with 10 Free Strips",
          desc_line3: "CE Certified from ACON USA",
          desc_line4: "Short measuring time of 10 seconds",
          desc_line5: "Compact &amp; easy to carry",
          desc_line6: "WARRANTY : 5 years on Product",
          desc_line7: "Pay On Delivery Available",
          rating_val: "9.2",
          rating_icon: "https://www.khojdeal.com/sales/assets/star.svg",
          rating_text: '"Good"',
          product_link: "Check Price",
          product_review: "Check Customer reviews",
        },
      ],
    };

  return (
    <Container>
      <p className="trp-title">
        Our team of experts have spent countless hours researching and testing
        the Best Glucometer In India.
      </p>
      {data.products.map((data) => (
        <div>
          <Small>
            <div className="tr-grid-sm-container" key={data.id}>
              <div className="tr-col-1">
                <div className="tr-data-id tr-main">{data.id}</div>
                <div className="tr-data-img">
                  <img className="tr-img-fluid" src={data.img} alt="" />
                </div>
              </div>
              <div className="tr-col-3 tr-textcenter tr-c3">
                <div className="tr-rating-val">{data.rating_val}</div>
                <div className="tr-rating-icon">
                  <img
                    src={data.rating_icon}
                    alt=""
                    height="20px"
                    width="20px"
                  />
                  <img
                    src={data.rating_icon}
                    alt=""
                    height="20px"
                    width="20px"
                  />
                  <img
                    src={data.rating_icon}
                    alt=""
                    height="20px"
                    width="20px"
                  />
                  <img
                    src={data.rating_icon}
                    alt=""
                    height="20px"
                    width="20px"
                  />
                  <img
                    src={data.rating_icon}
                    alt=""
                    height="20px"
                    width="20px"
                  />
                </div>
                <div className="tr-rating-text">{data.rating_text}</div>
                <a className="tr-product-link" href="/">
                  <button className="tr-product-btn">
                    <span className="tr-product-text">{data.product_link}</span>
                  </button>
                </a>
                <div className="tr-product-review">
                  <a href="/">{data.product_review}</a>
                </div>
              </div>
            </div>
            <div className="tr-grid-sm-container" key={data.id}>
              <div className="tr-col-2 tr-pr-30 tick">
                <ul className="desc-details">
                  <h2 className="tr-title">{data.title}</h2>
                  <hr />
                  <li className="desc-line tr-red">{data.desc_line1}</li>
                  <li className="desc-line">{data.desc_line2}</li>
                  <li className="desc-line">{data.desc_line3}</li>
                  <li className="desc-line">{data.desc_line4}</li>
                  <li className="desc-line">{data.desc_line5}</li>
                  <li className="desc-line">{data.desc_line6}</li>
                  <li className="desc-line">{data.desc_line7}</li>
                  <div className="tr-blue tr-decoration">
                    <a className="tr-decoration" href="/">
                      Detailed Product Info
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </Small>
          <div className="tr-grid-lg-container" key={data.id}>
            <div className="tr-col-1">
              <div className="tr-data-id tr-main">{data.id}</div>
              <div className="tr-data-img">
                <img className="tr-img-fluid" src={data.img} alt="" />
              </div>
            </div>
            <div className="tr-col-2 tr-pl-10 tr-pr-30 tick">
              <ul className="desc-details">
                <h2 className="tr-title">{data.title}</h2>
                <hr />
                <li className="desc-line tr-red">{data.desc_line1}</li>
                <li className="desc-line">{data.desc_line2}</li>
                <li className="desc-line">{data.desc_line3}</li>
                <li className="desc-line">{data.desc_line4}</li>
                <li className="desc-line">{data.desc_line5}</li>
                <li className="desc-line">{data.desc_line6}</li>
                <li className="desc-line">{data.desc_line7}</li>
                <div className="tr-blue tr-decoration">
                  <a className="tr-decoration" href="/">
                    Detailed Product Info
                  </a>
                </div>
              </ul>
            </div>
            <div className="tr-col-3 tr-textcenter tr-c3">
              <div className="tr-rating-val">{data.rating_val}</div>
              <div className="tr-rating-icon">
                <img src={data.rating_icon} alt="" height="20px" width="20px" />
                <img src={data.rating_icon} alt="" height="20px" width="20px" />
                <img src={data.rating_icon} alt="" height="20px" width="20px" />
                <img src={data.rating_icon} alt="" height="20px" width="20px" />
                <img src={data.rating_icon} alt="" height="20px" width="20px" />
              </div>
              <div className="tr-rating-text">{data.rating_text}</div>
              <a className="tr-product-link" href="/">
                <button className="tr-product-btn">
                  <span className="tr-product-text">{data.product_link}</span>
                </button>
              </a>
              <div className="tr-product-review">
                <a href="/">{data.product_review}</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}
export default ProductGrid;
