import styled from 'styled-components';

type title = string;

const PageTitle = (props: title) => {
  return (
    <>
      <PageTitleWrapper>
        <PageTitleContent>{props.title}</PageTitleContent>
      </PageTitleWrapper>
    </>
  );
};

export default PageTitle;

const PageTitleWrapper = styled.div`
  width: 100%;
  height: 5rem;
  padding: 1rem 0;
`;

const PageTitleContent = styled.p`
  font-size: 2rem;
`;
