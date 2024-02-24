import style from './Header.module.css';

function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.header__title}>
        Learn to code by watching others
      </h1>
      <p className={style.header__desc}>
        See how experienced developers solve problems in real-time.
        Watching scripted tutorials is great,
        but understanding how developers think is invaluable.
      </p>
    </header>
  );
}

export default Header;
