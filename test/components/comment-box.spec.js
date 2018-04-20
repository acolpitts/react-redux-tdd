import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment-box';
import App from "../../src/components/app";

describe('CommentBox Component', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('should have a main class of comment-box', () => {
    expect(component).to.have.class('comment-box');
  });

  it('should have a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('should have a submit button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('when entering a comment', () => {

    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('should show the entered text', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('shoud clear the text when submitted', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('')
    });
  });
});
