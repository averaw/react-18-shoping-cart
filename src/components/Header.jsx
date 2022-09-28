const Header = (props) => {
  const { countCartItems } = props;
  return (
    <div className="row center block">
      <div>
        <a href="#/">
          <h2>Simple shoping cart</h2>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart
          {countCartItems ? (
            <button className=" badge">{countCartItems}</button>
          ) : (
            " "
          )}
        </a>
        <a href="#/SignIn">Sign in </a>
      </div>
    </div>
  );
};

export default Header;
