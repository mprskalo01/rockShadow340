export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__name">
          <strong>Mario Prskalo</strong>
        </span>
        <span className="footer__year">© {year}</span>
      </div>
    </footer>
  )
}
