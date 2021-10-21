import NoResults from "../icons/no-results.svg";

function EmptyState() {
  return (
    <div className="empty-state">
      <img src={NoResults} alt="sad-smiley-icon"></img>
      <p>No recipes found :(</p>
    </div>
  );
}

export default EmptyState;
