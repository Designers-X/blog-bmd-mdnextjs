import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from '../Nav/Nav.module.scss';
import useSite from 'hooks/use-site';
import { findSideMenuByLocation, LEFT_MENU_LOCATION_NAVIGATION } from 'lib/leftsidemenu';
import LeftbarItem from 'components/Leftsidebaritem';
import { FaSearch } from 'react-icons/fa';
import { postPathBySlug } from 'lib/posts';
import useSearch, { SEARCH_STATE_LOADED } from 'hooks/use-search';
import Link from 'next/link';

const SEARCH_VISIBLE = 'visible';
const SEARCH_HIDDEN = 'hidden';

function Leftsidebar() {
  // const [sidebarVisibility, setSidebarVisibility] = useState(false);

  // const openSideNavbar = () => {
  //     setSidebarVisibility(true);
  // }
  // const closeSideNavbar = () => {
  //     setSidebarVisibility(false);
  // }
  function openSideNavbar() {
    document.getElementById('mySidepanel').style.width = '300px';
  }

  function closeSideNavbar() {
    document.getElementById('mySidepanel').style.width = '0';
  }

  const { menus } = useSite();
  const navigationLocation = LEFT_MENU_LOCATION_NAVIGATION;
  const navigation = findSideMenuByLocation(menus, navigationLocation);

  const formRef = useRef();
  const [searchVisibility, setSearchVisibility] = useState(SEARCH_HIDDEN);
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
    <>
      <div id="mySidepanel" className={styles.sidepanel}>
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
        <a href="javascript:void(0)" className={styles.closebtn} onClick={() => closeSideNavbar()}>
          ×
        </a>
        <hr />
        <div className={styles.listContainer}>
          {navigation?.map((listItem) => {
            return <LeftbarItem key={listItem.id} item={listItem} />;
          })}
        </div>
      </div>
      <nav>
        <div>
          <button className={styles.openbtn} onClick={() => openSideNavbar()}>
            <svg viewBox="0 0 70 60" width="40" height="30">
              <rect width="80" height="6"></rect>
              <rect y="25" width="80" height="6"></rect>
              <rect y="50" width="80" height="6"></rect>
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
export default Leftsidebar;
