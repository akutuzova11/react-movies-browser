import { Header, Wrapper } from "./styled";

export const Article = ({ articleHeader, body }) => (
    <Wrapper>
        <Header>
            {articleHeader}
        </Header>
        {body}
    </Wrapper>
);