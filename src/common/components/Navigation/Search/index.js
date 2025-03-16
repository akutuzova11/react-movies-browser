import { useEffect, useState } from "react";
import { useQueryParameter, useUpdateQueryParameter } from "./queryParameters";
import { Input, SearchContainer, SearchIcon } from "./styled";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { searchQueryParamName } from "../../../QueryParamName";

export const Search = () => {
    const location = useLocation();
    const query = useQueryParameter(searchQueryParamName) || "";
    const [searchQuery, setSearchQuery] = useState(query);

    useEffect(() => {
        setSearchQuery(query);
    }, [query]);

    const updateQueryParameter = useUpdateQueryParameter(setSearchQuery);

    const onInputChange = (e) => {
        updateQueryParameter(e.target.value);
    };

    return (
        <SearchContainer>
            <SearchIcon />
            <Input
                type="text"
                placeholder={`Search for ${location.pathname.includes("/people") ? "people..." : "movies..."}`}
                value={searchQuery}
                onChange={onInputChange}
            />
        </SearchContainer>
    );
};