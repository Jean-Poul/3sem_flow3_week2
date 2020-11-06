//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
  useRouteMatch,
  useLocation,
  Prompt
} from "react-router-dom";
import React, { useState, useEffect } from 'react';


function App(props) {
  return (
    <div className="App">
      <Router>
      <Header />
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/products">
      <Products bookFacade={props.bookFacade}/>
    </Route>
    <Route path="/add-book">
      <AddBook bookFacade={props.bookFacade}/>
    </Route>
    <Route path="/company">
      <Company />
    </Route>
    <Route path="paramsexample/:id" children={<Child />} />
    
    <Route path="/findbook">
      <FindBook bookFacade={props.bookFacade}/>
    </Route>
    <Route path="*">
      <NoMatch  />
    </Route>
  </Switch>
  </Router>
    </div>
  );
}

function Header() {
  return (
      <div>
        <ul className="header">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
      <li><NavLink activeClassName="active" to="/add-book">Add Book</NavLink></li>
      <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
      <li><NavLink activeClassName="active" to="/unknown">No Match</NavLink></li>
      <li><NavLink activeClassName="active" to="/findbook">Find book</NavLink></li>
    </ul>
        <hr />
        </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function Products(props) {
  let { path, url } = useRouteMatch();
  return (
    <div>
       <ul>{props.bookFacade.getBooks().map(element => <li key={element.id}>{element.title} <Link to={`${url}/${element.id}`}>details</Link></li>)}</ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a book.</h3>
        </Route>
        <Route path={`${path}/:bookId`}>
          <Details bookFacade={props.bookFacade} />
        </Route>
      </Switch>
      <FindBook bookFacade={props.bookFacade}/>
    </div>
  );
}


function Company() {
  return (
    <div>
      <h2>Company</h2>
    </div>
  );
}

const Child = () => {
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  )
}

function NoMatch() {
let location = useLocation();

  return (
    <div>
      <h2>No match for <code>{location.pathname}</code></h2>
    </div>
  );
}

function AddBook(props) {
  const [book, setBook] = useState();
  let [isBlocking, setIsBlocking] = useState(false);


  const handleChange = evt => {
    const { id, value } = evt.target;
    setBook({ ...book, [id]: value });
    setIsBlocking(true);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.bookFacade.addBook(book);
    setIsBlocking(false);
  };

  return (
    <div>
      <h1>Add Book</h1>
      <form>
        <input
          id="title"
          placeholder="Add title"
          onChange={handleChange}
        />
        <br />
        <input
          id="info"
          placeholder="Add info"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Save</button>
      </form>
      
      <Prompt
        when={isBlocking}
        message={location =>
          `Are you sure you want to go to ${location.pathname}`
        }
      />
    </div>
  )
}

function Details(props) {
  let { bookId } = useParams();
  
  return (
    <div>
      <fieldset><p>
      <legend>{JSON.stringify(bookId)}</legend>
      Title: {props.bookFacade.findBook(bookId).title} <br />
      ID: {props.bookFacade.findBook(bookId).id} <br />
      Info: {props.bookFacade.findBook(bookId).info} <br />
      </p></fieldset>
    </div>
  );
}

function FindBook(props) {
  const emptyBook = { id: "", title: "", info: ""};
  const [info, setInfo] = useState();
  const [bookId, setBookId] = useState(emptyBook);
  const [findBookId, setFindBookId] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFindBookId(bookId);
    setBookId(emptyBook);
  };

  const handleChange = evt => {
    const id = evt.target.value;
    setBookId(id);
  };

  const deleteBook = (evt) => {
    evt.preventDefault();
    const id = evt.target.value;
    console.log("delete: " + JSON.stringify(id));
    props.bookFacade.deleteBook(id);
    setInfo('Book with Id: ' + id + ' deleted');
  }

  return (
    <div>
      <h1>Find book</h1>
      <form>
        <input onSubmit={handleChange}
          id="book-id"
          placeholder="Seach title"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Find book</button>
      </form>

      <fieldset>
        <legend>Book detail:</legend>
       
          Id: {props.bookFacade.findBook(findBookId) && props.bookFacade.findBook(findBookId).id}
          <br />
          Title: {props.bookFacade.findBook(findBookId) && props.bookFacade.findBook(findBookId).title}
          <br />
          Info: {props.bookFacade.findBook(findBookId) && props.bookFacade.findBook(findBookId).info}
       <div>{info}</div>
      </fieldset>

      <form>
        <button onClick={deleteBook} value={findBookId}>Delete Book</button>
      </form>

    </div>
  )
}



export default App;
