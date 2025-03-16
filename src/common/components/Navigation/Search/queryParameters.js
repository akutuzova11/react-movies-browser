import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import {
  pageQueryParamName,
  searchQueryParamName,
} from "../../../QueryParamName";
import { toMovieList, toPeopleList } from "../../../../core/routes";

export const useQueryParameter = (key) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

export const useUpdateQueryParameter = (setSearchQuery) => {
  const history = useHistory();
  const location = useLocation();
  let path = location.pathname;

  const params = new URLSearchParams(location.search);

  return (newQuery) => {
    setSearchQuery(newQuery);
    const trimmedQuery = newQuery.trim();

    if (trimmedQuery) {
      params.set(searchQueryParamName, trimmedQuery);
    } else {
      params.delete(searchQueryParamName);
    }
    params.delete(pageQueryParamName);

    if (path.startsWith(`${toMovieList()}/`) && path !== toMovieList()) {
      path = toMovieList();
    } else if (
      path.startsWith(`${toPeopleList()}/`) &&
      path !== toPeopleList()
    ) {
      path = toPeopleList();
    }
    const currentHistory = `${history.location.pathname}${history.location.search}`;
    const newHistory = params.toString()
      ? `${path}?${params.toString()}`
      : `${path}`;

    if (currentHistory !== newHistory) {
      history.push(newHistory);
    }
  };
};
