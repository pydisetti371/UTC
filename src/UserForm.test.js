import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
    render(<UserForm />);

    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();

})

test("it calls onUserAdd when form was submitted", () => {
    // Not the best implementation
    const mock = jest.fn()
    // const argList = [];
    // const callback = (...args) => {
    //   argList.push(args);
    // }
    render(<UserForm  onUserAdd={mock}/>);

    // const nameInput = screen.getAllByRole("textbox");
    // const emailInput = screen.getAllByRole("textbox");
    // const [nameInput, emailInput] = screen.getAllByRole("textbox");
    const nameInput = screen.getByRole('textbox',{name:/name/i});
    const emailInput = screen.getByRole('textbox',{name:/email/i})
    
    // Simulate typing in a name
    user.click(nameInput);
    user.keyboard('jane');

    // writing text to input elements;
    user.click(emailInput);
    user.keyboard('jane@jane.com');

    //get the button;
    const button = screen.getByRole('button');
    user.click(button)

    // Assertion to make sure onUserAdd call with name/email args
    // expect(argList).toHaveLength(1);
    // console.log(argList,"ArgList");
    // expect(argList[0][0]).toEqual({name:'jane', email:'jane@jane.com'});

    expect(mock).toHaveBeenCalled();
    // console.log(argList,"ArgList");
    expect(mock).toHaveBeenCalledWith({name:'jane', email:'jane@jane.com'});


})

test("empties two inputs when form is submitted",() => {
  
    render(<UserForm onUserAdd={() => {}} />)

    const nameInput = screen.getByRole('textbox',{name:/name/i});
    const emailInput = screen.getByRole('textbox',{name:/email/i})

    user.click(nameInput);
    user.keyboard('jane');
    user.click(emailInput);
    user.keyboard('jane@jane.com')
     
    const button = screen.getByRole('button');
    user.click(button)

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
})

