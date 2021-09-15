import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import RAndMDetailContainer from './RAndMDetailContainer';
import DetailData from '../fixtures/DetailData.json';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/:id', (req, res, ctx) => {
    return res(ctx.json(DetailData));
  })
);

describe('RAndMDetailContainer', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  // eslint-disable-next-line max-len
  it('displays a detail view of a single Rick and Morty Character', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/2']}>
        <RAndMDetailContainer />
      </MemoryRouter>
    );

    screen.getAllByAltText('loading spinner');

    await screen.getAllByAltText('Morty Smith');

    const ul = await screen.findByRole('list', { name: 'character-details' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });
});
