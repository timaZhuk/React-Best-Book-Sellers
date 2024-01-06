import Title from "./Title";
import Image from "./Image";
import Author from "./Author";
import "../css/BookPro.css";

const Book = (props) => {
  const { title, url, author, index } = props;

  return (
    <>
      <article className="book">
        <Title title={title} />
        <Image url={url} />
        <Author author={author} />
        <div className="number">
          <h3>#{index + 1}</h3>
        </div>
      </article>
    </>
  );
};

export default Book;
