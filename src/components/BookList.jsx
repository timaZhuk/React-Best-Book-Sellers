import Book from "./Book";
import "../css/BookPro.css";

import { books } from "../book";

const BookList = () => {
  const NewBook = books.map((book, index) => {
    //const { title, url, author } = book;
    return (
      <Book {...book} key={book.id} index={index} />
      //title={title} url={img} author={author}
    );
  });
  console.log(NewBook);
  return (
    <>
      <h1 className="header">The Best Sellers of 2023</h1>
      <section className="booklist">{NewBook}</section>
    </>
  );
};

export default BookList;

/*


//events example
const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(`input name: ${e.target.name}`);
    console.log(`input value: ${e.target.value}`);
  };

  const handleButtonClick = () => {
    alert("handle click button");
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  //------------------------------------------
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typcal form</h2>
        <input
          type="text"
          name="example"
          style={{ margin: "1rem 1rem" }}
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
        <div></div>
        <button
          onClick={() => {
            alert("handleButtonClick");
          }}
          type="button"
        >
          Click me
        </button>
      </form>
    </section>
  );
};

*/
