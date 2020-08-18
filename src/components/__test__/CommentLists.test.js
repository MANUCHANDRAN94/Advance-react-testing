import React from 'react';
import { mount } from 'enzyme';
import CommentLists from 'components/CommentLIsts';
import Root from 'Root';
let wrapped;

beforeEach(() => {
   const initialState = {
       comments: ['comment1' , 'comment2']
   };
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentLists />
        </Root>
    );
});


it('creates one LI per comment' , ()=>{
    expect(wrapped.find('li').length).toEqual(2);
})

it('show the test for each comment' , ()=>{
    expect(wrapped.render().text()).toContain('comment1')
    expect(wrapped.render().text()).toContain('comment2')

})

