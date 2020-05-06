import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  &:hover {
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 1.6rem 3rem;
  width: 100%;

  ${media.lessThan("large")`
    padding: 1rem 1.5rem;
  `}
`

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props =>
    props.background ? props.background : "var(--highlight)"};
  border-radius: 50%;
  color: var(--white);
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  min-height: 80px !important;
  min-width: 80px !important;
  text-transform: uppercase;

  ${media.lessThan("large")`
    font-size: 0.8rem;
    margin-bottom: .7rem;
  `}
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;

  span {
    opacity: 0.5;
    padding-left: 10px;
  }
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.1rem;
`
