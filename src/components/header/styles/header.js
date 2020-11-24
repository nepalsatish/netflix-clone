import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
    top left / cover no-repeat;
  @media (max-width: 992px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background:none`}
  }
`;

// export const Frame = styled.div``;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media: (max-width:1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1448px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(Link)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  border: 0;
  color: #fff;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 3px;
  padding: 8px 17px;

  &:hover {
    background-color: #f40612;
  }
`;
export const Feature = styled(Container)`
  display: flex;
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 992px) {
    display: none;
  }
`;
export const Text = styled.p`
  color: #fff;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
`;

export const TextLink = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  text-align: right;
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  &:before {
    display: block;
    content: attr(title);
    font-weight: bold;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const FeatureCallOut = styled.h2`
  color: #fff;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
  margin-bottom: 20px;
`;
export const Group = styled.div`
  display: flex;
  align-items: center;
`;
export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
export const Dropdown = styled.div`
  display: none;
  background-color: #000;
  position: absolute;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${TextLink} {
    cursor: pointer;
  }
  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }
    ${TextLink},${Picture} {
      cursor: default;
    }
  }
  button {
    margin-right: 10px;
  }
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;
export const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #fff;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: #44444459;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 18px;
  }
`;

export const SearchInput = styled.input`
  background-color: #44444459;
  color: #fff;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border: 0;
  margin-left: ${({ active }) => (active === true ? "10px" : "0")};
  padding: ${({ active }) => (active === true ? "0 10px" : "0")};
  opacity: ${({ active }) => (active === true ? "1" : "0")};
  width: ${({ active }) => (active === true ? "200px" : "0")};
`;
export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-size: 20px;
  margin-top: 30px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ff1e1e;
    color: #fff;
  }
`;
