import { useMatches } from 'react-router-dom';

function Breadcrumbs() {
  const matches = useMatches();

  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => ({ crumb: match.handle.crumb(match.data), id: match.id }));

  return (
    <div>
      {crumbs.map((crumb) => (
        <span key={crumb.id}>
          {crumb.crumb}
          &gt;
        </span>
      ))}
    </div>
  );
}

export default Breadcrumbs;
