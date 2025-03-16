import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  ErrorWrapper,
  ErrorIcon,
  ErrorMessage,
  ErrorDescription,
  Button,
} from "./styled";

export const Error = () => {
  const history = useHistory();

  const reloadPage = () => {
    history.push("/");
    window.location.reload();
  };

  return (
    <ErrorWrapper>
      <ErrorIcon />
      <ErrorMessage>Oops! Something went wrong...</ErrorMessage>
      <ErrorDescription>
        Please check your network connection <br /> and try again
      </ErrorDescription>
      <Button onClick={reloadPage}>Back to home page</Button>
    </ErrorWrapper>
  );
};
