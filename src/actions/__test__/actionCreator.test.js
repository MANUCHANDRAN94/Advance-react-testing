import { SAVE_COMMENT } from 'actions/types';
import { saveComment } from 'actions/index';

describe('saveComment' , ()=>{
    it('has the correct type' , () => {
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT)
    })

    it (' has the correct payload' , ()=>{
        const action = saveComment('NEW Comment');

        expect(action.payload).toEqual('NEW Comment')
    })
})
