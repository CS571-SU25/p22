import "./Activity.css";

export default function Activity({ desc, img, keywords, name }) {
  return (
    <div className="activity-container">
      <img
        src={`/p22/activities/activityImages/${img.src}`}
        alt={img.alt || name}
        className="activity-image"
      />
      <div className="activity-text">
        <h3 className="activity-title">{name}</h3>
        <p className="activity-desc">{desc}</p>
        {keywords?.length > 0 && (
          <div className="activity-keywords">
            {keywords.map((kw, index) => (
              <span key={index} className="activity-keyword">
                {kw}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
