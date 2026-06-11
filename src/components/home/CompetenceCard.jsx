export default function CompetenceCard({ item, isActive, onToggle }) {
  return (
    <article
      className={`comp-card${isActive ? ' comp-card--active' : ''}`}
      style={{ '--card-color': item.couleur }}
    >
      {/* Zone image placeholder */}
      <div className="comp-card__img" aria-hidden="true" />

      <button
        className="comp-card__header"
        onClick={() => onToggle(item.id)}
        aria-expanded={isActive}
      >
        <h3 className="comp-card__label">{item.label}</h3>
        <span className="comp-card__arrow" aria-hidden="true">
          {isActive ? '↑' : '↓'}
        </span>
      </button>

      <div className="comp-card__outils">
        {item.outils.map(outil => (
          <span key={outil} className="chip comp-card__chip">{outil}</span>
        ))}
      </div>
    </article>
  );
}
