import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import App from './App';

test('renders learn react link', () => {
  const mock = jest.fn()
  render(<App />);
  const nameInput = screen.getByRole('textbox', { name: /name/i })
  const emailInput = screen.getByRole('textbox', {name: /email/i})
  user.click(nameInput);
  user.keyboard('jane')

  user.click(emailInput);
  user.keyboard('jane@jane.com')

  const button = screen.getByRole('button');
 

  user.click(button)
  screen.debug()

  // const name = screen.getByRole('cell',{name:"jane"})
  // const email = screen.getByRole('cell',{name:"jane@jane.com"})

  // expect(name).toBeInTheDocument();
  // expect(email).toBeInTheDocument()

});
