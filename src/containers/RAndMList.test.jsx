import React from 'react';
import { render, screen } from '@testing-library/react';
import RAndMListContainer from './RAndMListContainer';
import { MemoryRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import listData from '../fixtures/ListData.json';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(listData));
  })
);

describe('RAndMListContainer', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of Rick and Morty Characters', async () => {
    const { container } = render(
      <MemoryRouter>
        <RAndMListContainer />
      </MemoryRouter>
    );

    screen.getAllByAltText('loading spinner');

    const ul = await screen.findByRole('list', { name: 'character-list' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });
});
