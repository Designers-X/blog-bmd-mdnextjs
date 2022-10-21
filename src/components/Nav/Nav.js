import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

import useSite from 'hooks/use-site';
import useSearch, { SEARCH_STATE_LOADED } from 'hooks/use-search';
import { postPathBySlug } from 'lib/posts';
import { findMenuByLocation, MENU_LOCATION_NAVIGATION_DEFAULT } from 'lib/menus';

import Section from 'components/Section';

import styles from './Nav.module.scss';
import NavListItem from 'components/NavListItem';

const SEARCH_VISIBLE = 'visible';
const SEARCH_HIDDEN = 'hidden';

const Nav = () => {
  const formRef = useRef();
  const [searchVisibility, setSearchVisibility] = useState(SEARCH_HIDDEN);

  const { metadata = {}, menus } = useSite();
  const { title } = metadata;

  const navigationLocation = process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || MENU_LOCATION_NAVIGATION_DEFAULT;
  const navigation = findMenuByLocation(menus, navigationLocation);

  const { query, results, search, clearSearch, state } = useSearch({
    maxResults: 5,
  });

  const searchIsLoaded = state === SEARCH_STATE_LOADED;

  // When the search visibility changes, we want to add an event listener that allows us to
  // detect when someone clicks outside of the search box, allowing us to close the results
  // when focus is drawn away from search

  useEffect(() => {
    // If we don't have a query, don't need to bother adding an event listener
    // but run the cleanup in case the previous state instance exists

    if (searchVisibility === SEARCH_HIDDEN) {
      removeDocumentOnClick();
      return;
    }

    addDocumentOnClick();
    addResultsRoving();

    // When the search box opens up, additionall find the search input and focus
    // on the element so someone can start typing right away

    const searchInput = Array.from(formRef.current.elements).find((input) => input.type === 'search');

    searchInput.focus();

    return () => {
      removeResultsRoving();
      removeDocumentOnClick();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchVisibility]);

  /**
   * addDocumentOnClick
   */

  function addDocumentOnClick() {
    document.body.addEventListener('click', handleOnDocumentClick, true);
  }

  /**
   * removeDocumentOnClick
   */

  function removeDocumentOnClick() {
    document.body.removeEventListener('click', handleOnDocumentClick, true);
  }

  /**
   * handleOnDocumentClick
   */

  function handleOnDocumentClick(e) {
    if (!e.composedPath().includes(formRef.current)) {
      setSearchVisibility(SEARCH_HIDDEN);
      clearSearch();
    }
  }

  /**
   * handleOnSearch
   */

  function handleOnSearch({ currentTarget }) {
    search({
      query: currentTarget.value,
    });
  }

  /**
   * handleOnToggleSearch
   */

  function handleOnToggleSearch() {
    setSearchVisibility(SEARCH_VISIBLE);
  }

  /**
   * addResultsRoving
   */

  function addResultsRoving() {
    document.body.addEventListener('keydown', handleResultsRoving);
  }

  /**
   * removeResultsRoving
   */

  function removeResultsRoving() {
    document.body.removeEventListener('keydown', handleResultsRoving);
  }

  /**
   * handleResultsRoving
   */

  function handleResultsRoving(e) {
    const focusElement = document.activeElement;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (focusElement.nodeName === 'INPUT' && focusElement.nextSibling.children[0].nodeName !== 'P') {
        focusElement.nextSibling.children[0].firstChild.firstChild.focus();
      } else if (focusElement.parentElement.nextSibling) {
        focusElement.parentElement.nextSibling.firstChild.focus();
      } else {
        focusElement.parentElement.parentElement.firstChild.firstChild.focus();
      }
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (focusElement.nodeName === 'A' && focusElement.parentElement.previousSibling) {
        focusElement.parentElement.previousSibling.firstChild.focus();
      } else {
        focusElement.parentElement.parentElement.lastChild.firstChild.focus();
      }
    }
  }

  /**
   * escFunction
   */

  // pressing esc while search is focused will close it

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      clearSearch();
      setSearchVisibility(SEARCH_HIDDEN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className={styles.nav}>
      <Section className={styles.navSection}>
        <div id="mySidepanel" className="sidepanel" >
          <a href="/search/" className="css-3uwsu9 epl65fo4" ><span className=" eqt11jm0 css-f7rgu6 e1s64tyo0"><svg height="15px" width="15px" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" role="img" title="Search"><path d="M492.5 457.5 380 345c27.5-35 45-82.5 45-132.5C425 95 330 0 212.5 0S0 95 0 212.5 95 425 212.5 425c50 0 95-17.5 132.5-45l112.5 112.5c5 5 12.5 7.5 17.5 7.5s12.5-2.5 17.5-7.5c10-10 10-25 0-35zM50 212.5C50 122.5 122.5 50 212.5 50S375 122.5 375 212.5c0 45-17.5 85-47.5 115s-70 47.5-115 47.5C122.5 375 50 302.5 50 212.5z"></path></svg></span><span className="css-14mkolt eqt11jm14">Search</span></a>
          <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</a>
          <hr />
          <a href="#">State of Black Beauty</a>
          <a href="#">Subscribe</a>
          <a href="#">Fashion</a>
          <a href="#">Beauty</a>
          <a href="#">Features</a>
          <a href="#">Life & Love</a>
          <a href="#">Horoscopes</a>
          <a href="#">In the Magazine</a>
          <a href="#">Newsletter</a>
        </div>
        <nav>
          <div className="container">
            <button className="openbtn" onclick="openNav()">☰</button>
          </div>
        </nav>
        <section>
          <div className="container">
            <h2>Collapsed Sidepanel</h2>
          </div>
        </section>
        <div id="mySidepanel" className="sidepanel">
          <a href="/search/" className="css-3uwsu9 epl65fo4"><span className=" eqt11jm0 css-f7rgu6 e1s64tyo0"><svg height="15px" width="15px" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" role="img" title="Search"><path d="M492.5 457.5 380 345c27.5-35 45-82.5 45-132.5C425 95 330 0 212.5 0S0 95 0 212.5 95 425 212.5 425c50 0 95-17.5 132.5-45l112.5 112.5c5 5 12.5 7.5 17.5 7.5s12.5-2.5 17.5-7.5c10-10 10-25 0-35zM50 212.5C50 122.5 122.5 50 212.5 50S375 122.5 375 212.5c0 45-17.5 85-47.5 115s-70 47.5-115 47.5C122.5 375 50 302.5 50 212.5z"></path></svg></span><span className="css-14mkolt eqt11jm14">Search</span></a>
          <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</a>
          <hr />
          <a href="#">State of Black Beauty</a>
          <a href="#">Subscribe</a>
          <a href="#">Fashion</a>
          <a href="#">Beauty</a>
          <a href="#">Features</a>
          <a href="#">Life & Love</a>
          <a href="#">Horoscopes</a>
          <a href="#">In the Magazine</a>
          <a href="#">Newsletter</a>
        </div>
        <nav>
          <div className="container">
            <button className="openbtn" onclick="openNav()">☰</button>
          </div>
        </nav>
        <section>
          <div className="container">
            <h2>Collapsed Sidepanel</h2>
          </div>
        </section>
        <p className={styles.navName}>
          <Link href="/">
            <a>{title}</a>
          </Link>
        </p>
        <ul className={styles.navMenu}>
          {navigation?.map((listItem) => {
            return <NavListItem key={listItem.id} className={styles.navSubMenu} item={listItem} />;
          })}
        </ul>
        <ul>
          <li>Subscribe</li>
          <li>Sign In/ Sign Up</li>
        </ul>
        <div className={styles.navSearch}>
          {searchVisibility === SEARCH_HIDDEN && (
            <button onClick={handleOnToggleSearch} disabled={!searchIsLoaded}>
              <span className="sr-only">Toggle Search</span>
              <FaSearch />
            </button>
          )}
          {searchVisibility === SEARCH_VISIBLE && (
            <form ref={formRef} action="/search" data-search-is-active={!!query}>
              <input
                type="search"
                name="q"
                value={query || ''}
                onChange={handleOnSearch}
                autoComplete="off"
                placeholder="Search..."
                required
              />
              <div className={styles.navSearchResults}>
                {results.length > 0 && (
                  <ul>
                    {results.map(({ slug, title }, index) => {
                      return (
                        <li key={slug}>
                          <Link tabIndex={index} href={postPathBySlug(slug)}>
                            <a>{title}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {results.length === 0 && (
                  <p>
                    Sorry, not finding anything for <strong>{query}</strong>
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </Section>
    </nav>
  );
};

export default Nav;
