import { render, screen, within} from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
    const users = [
        {name: 'jane', email:'jan@jan.com'},
        {name: 'say', email:'say@say.com'},
        {name:'rev', email:'rev@rev.com'}
    ] 
    render (<UserList users={users}/>)

    return {
        users
    }
}

test("render one row per user",() => {
    // const users = [
    //     {name: 'jane', email:'jan@jan.com'},
    //     {name: 'say', email:'say@say.com'},
    //     {name:'rev', email:'rev@rev.com'}
    // ]
    renderComponent()

    // we can write by getting the container i.e ., entire section (div > table) table inside div here div defines entire container.
    // const {container} = render(<UserList users={users} />)
    // const rows = container.querySelectorAll('tbody tr');
    // expect(rows).toHaveLength(3)
    // render (<UserList users={users}/>)
    // screen.logTestingPlaygroundURL() // this will open fake UI Based on the data we are passing.
    // const rev = screen.getByRole('cell',{name:'rev'})
    // expect(rev).toBeInTheDocument()
    // const tableLength = screen.getAllByRole("row");
    // expect(tableLength).toHaveLength(2)
    

    const tableLength = within(screen.getByTestId("table-rows")).getAllByRole('row')
    expect(tableLength).toHaveLength(3)
})

test ('render the name and email of the each user',() => {
    // const users = [
    //     {name: 'jane', email:'jan@jan.com'},
    //     {name: 'say', email:'say@say.com'},
    //     {name:'rev', email:'rev@rev.com'}
    // ]

    // render(<UserList users={users}/>)
    // screen.logTestingPlaygroundURL()
    const {users} = renderComponent()

    for (let user of users) {
        const name =  screen.getByRole('cell',{name:user.name});
        const email =  screen.getByRole('cell', {name:user.email})

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
})