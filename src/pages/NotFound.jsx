import {
  NotFoundBox,
  NotFoundJoke,
  NotFoundLink,
  NotFoundMsg,
  NotFoundProposal,
  NotFoundTitle,
} from 'modules/components/others/NotFound.styled';

export default function NotFound() {
  return (
    <NotFoundBox>
      <NotFoundTitle>Whoops!</NotFoundTitle>
      <NotFoundMsg>404 Page Not Found</NotFoundMsg>
      <NotFoundJoke>
        Looks like directors haven't made a movie about it yet!
      </NotFoundJoke>
      <NotFoundProposal>
        Try our <NotFoundLink to="/">homepage</NotFoundLink> or{' '}
        <NotFoundLink to="/movies">movie search</NotFoundLink> instead
      </NotFoundProposal>
    </NotFoundBox>
  );
}
