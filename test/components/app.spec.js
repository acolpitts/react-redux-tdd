import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App Component', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  })

  it('should render a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  })

  it('should render a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  })

})

