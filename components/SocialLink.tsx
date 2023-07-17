import styled from "styled-components";

function SocialLink({ link, image }) {
  return (
    <Link
      href="https://media.licdn.com/dms/image/C4D12AQHvsQDOEwyQQA/article-cover_image-shrink_423_752/0/1520139977251?e=1695254400&v=beta&t=Quzz-AVtuZnU35iNNs7yarEyjSQAcVy88F_7CZtegjE"
      target="blank"
      image={image}
    >
      <span />
    </Link>
  );
}

export default SocialLink;

const Link = styled.a`
  transition: background-color 350ms;

  :hover > span {
    background-color: #ccc;
  }

  > span {
    display: block;
    background-color: #999;
    height: 21px;
    width: 21px;

    // For styling svg images
    mask: ${(props) =>
      props.image && "url(" + props.image + ") no-repeat 50% 50%"};
    transition: background-color 350ms;
  }
`;
