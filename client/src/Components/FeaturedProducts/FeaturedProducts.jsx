import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          At <strong>Wave & Thread</strong>, we take pride in offering a diverse
          range of clothing that cater to your every need. Some of our
          highlighted categories include:
          <br />
          <strong>Men's Fashion: </strong>
          From casual tees to sharp suits, our men's clothing collection is
          designed to make every man look and feel his best.
          <br />
          <strong>Women's Fashion: </strong>
          Stay ahead in the fashion game with our women's clothing range. Find
          dresses, tops, and accessories to express your unique style.
          <br />
          <strong>Kids' Fashion: </strong>
          Dress your little ones in style with our adorable and comfortable
          children's clothing. We have options for all ages, from infants to
          teenagers.
          <br />
          No matter what you're searching for, <strong>Wave & Thread</strong> is
          your go-to destination for quality products and exceptional customer
          service. Start exploring our collection today!
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
