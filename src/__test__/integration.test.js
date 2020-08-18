import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(()=>{
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
        status:200,
        response: [{name:'Fetched1'},{name:'Fetched2'}]
    })
})

afterEach(()=>{
    moxios.uninstall();
})

it('it can fetch a list of comments and display them' , (done)=>{
//Attempt to render the entire app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )

//Find fetch button and click it
wrapped.find('.fetch-button').simulate('click');

//Expect to find a list of comments!
moxios.wait(()=>{
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    wrapped.unmount();
    done();
})
})

// done is possed in the test so that the test will complete execution only when done is called