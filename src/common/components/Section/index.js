import { Header, Wrapper } from "./styled";

export const Section = ({ sectionHeader, body }) => (
    <Wrapper>
        <Header>
            {sectionHeader}
        </Header>
        {body}
    </Wrapper>
);