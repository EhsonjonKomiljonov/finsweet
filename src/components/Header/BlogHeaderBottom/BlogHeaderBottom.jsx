import React from 'react';
import BlogHeaderBottomImg from '../../../assets/images/blog-header-img.png';
import { Container } from '../../../Container';
import {
  BlogHeaderBottomBlogTime,
  BlogHeaderBottomContent,
  BlogHeaderBottomInner,
  BlogHeaderBottomLink,
  BlogHeaderBottomStyle,
  BlogHeaderBottomText,
  BlogHeaderBottomTitle,
} from './blogHeaderBottom.styles';

export const BlogHeaderBottom = () => {
  return (
    <BlogHeaderBottomStyle>
      <Container>
        <BlogHeaderBottomInner>
          <BlogHeaderBottomContent>
            <BlogHeaderBottomBlogTime>29 May 2021</BlogHeaderBottomBlogTime>
            <BlogHeaderBottomTitle>
              Brand Positioning that you can't ignore in 2021
            </BlogHeaderBottomTitle>
            <BlogHeaderBottomText>
              Lorem ipsum dolor sit amet, consectetur dipiscing elit. Vestibulum
              vitae nunc vitae neque .
            </BlogHeaderBottomText>
            <BlogHeaderBottomLink to="/blog">
              Learn More
            </BlogHeaderBottomLink>
          </BlogHeaderBottomContent>
          <img src={BlogHeaderBottomImg} alt="Img" />
        </BlogHeaderBottomInner>
      </Container>
    </BlogHeaderBottomStyle>
  );
};
