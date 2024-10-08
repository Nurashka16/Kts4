import { useState } from "react";
import style from "./Header.module.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { ABOUT_US, CATEGORIES, HOME } from "../../../utils/const";

const Header = (props: any) => {
  const [activePage, setActivePage] = useState("Products");

  const listPageTitles = [
    {
      title: "Products",
      link: HOME,
    },
    {
      title: "Categories",
      link: CATEGORIES,
    },
    {
      title: "About us",
      link: ABOUT_US,
    },
  ];

  const pages = listPageTitles.map((page) => (
    <Link
      onClick={() => setActivePage(page.title)}
      to={page.link}
      className={activePage == page.title ? style.active_item : style.menu_item}
    >
      {page.title}
      {activePage == page.title && <div className={style.menu_line}></div>}
    </Link>
  ));
  return (
    <div className={style.header}>
      <Logo />
      {props.isAuth && (
        <>
          <div className={style.menu_wrap}>
            <ul className={style.menu}>{pages}</ul>
          </div>
          <div className={style.right}>
            <button className={style.bag}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.375 9.58751V8.37501C9.375 5.56251 11.6375 2.80001 14.45 2.53751C17.8 2.21251 20.625 4.85001 20.625 8.13751V9.86251"
                  stroke="#151411"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.25 27.5H18.75C23.775 27.5 24.675 25.4875 24.9375 23.0375L25.875 15.5375C26.2125 12.4875 25.3375 10 20 10H10C4.66253 10 3.78753 12.4875 4.12503 15.5375L5.06253 23.0375C5.32503 25.4875 6.22503 27.5 11.25 27.5Z"
                  stroke="#151411"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.3694 15H19.3806"
                  stroke="#151411"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6181 15H10.6294"
                  stroke="#151411"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className={style.auth}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 15C18.4518 15 21.25 12.2018 21.25 8.75C21.25 5.29822 18.4518 2.5 15 2.5C11.5482 2.5 8.75 5.29822 8.75 8.75C8.75 12.2018 11.5482 15 15 15Z"
                  stroke="#151411"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25.7374 27.5C25.7374 22.6625 20.9249 18.75 14.9999 18.75C9.07495 18.75 4.26245 22.6625 4.26245 27.5"
                  stroke="#151411"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
