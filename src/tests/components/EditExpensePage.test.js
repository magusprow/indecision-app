import React from 'react';
import {shallow,configure} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';

import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';



import expenses from '../fixtures/expenses';


configure({adapter: new Adapter()});

let editExpense,removeExpense,history,wrapper;

beforeEach(()=>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history ={push:jest.fn()}
    wrapper = shallow(
    <EditExpensePage 
    editExpense={editExpense} 
    removeExpense={removeExpense} 
    history={history}
    expense={expenses[2]}
    
    />
    
    );
    

});

test('should render EditExpensePage',()=>{
    
    expect(wrapper).toMatchSnapshot();
});


test('should handle editExpense',()=>{
    
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);
});

test('should handle removeExpense',()=>{
    
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id:expenses[2].id
    });
});

