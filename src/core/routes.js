export const toMovieList = () => "/movies";
export const toPeopleList = () => "/people";
export const toMoviePage = ({ id } = { id: ":id" }) => `/movies/${id}`;
export const toPersonPage = ({ id } = { id: ":id" }) => `/people/${id}`;
