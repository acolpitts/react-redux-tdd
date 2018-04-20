import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment-list';

describe('CommentList Component', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentList, null, { comments: ['Lorem ipsum', 'Dolor sit amet'] });
  })

  it('should list all comments provided', () => {
    expect(component).to.contain('Lorem ipsum');
    expect(component).to.contain('Dolor sit amet');
  })

  it('should wrap each comment in an li tag', () => {
    expect(component.find('li').length).to.equal(2);
  })

});