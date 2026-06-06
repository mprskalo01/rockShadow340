/**
 * Static technical-drawing frame: two faint vertical edge rules aligned to the
 * content column, plus corner registration ticks. Purely decorative structure —
 * fixed behind all content, never interactive.
 */
export default function Frame() {
  return (
    <div className="frame" aria-hidden="true">
      <div className="frame__col">
        <span className="tick tick--tl" />
        <span className="tick tick--tr" />
      </div>
    </div>
  )
}
