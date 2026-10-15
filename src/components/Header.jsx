function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__brand">
          <span className="header__icon">🛒</span>
          <div>
            <h1>One Market</h1>
            <p>Todo lo que necesitás, en un solo lugar.</p>
          </div>
        </div>

        <div className="header__message">
          ¡Precios que te convienen todos los días!
        </div>
      </div>
    </header>
  );
}

export default Header;