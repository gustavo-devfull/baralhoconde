import './AMesa.css'

export function AMesa() {
  return (
    <section className="s-mesa" id="a-mesa">
      <div className="wrap">
        <div className="mesa-grid">
          <div className="rv">
            <div className="card-frame">
              <div className="cf-corner tl">C<br />♣</div>
              <div className="cf-corner br">C<br />♣</div>
              <div className="cf-body">
                <div className="cf-suit">♣</div>
                <p className="cf-label">Solte aqui a ilustração<br />do Conde</p>
              </div>
              <div className="cf-foot"><span>O Conde</span></div>
            </div>
          </div>
          <div>
            <span className="tag rv">I · A Mesa</span>
            <div className="mesa-text">
              <h2 className="rv d1">Dizem que toda mesa de cartas<br />guarda uma história.</h2>
              <p className="rv d2">
                Entre copos de vinho, fumaça de cigarros e noites longas nas colônias
                italianas do interior do Brasil, existia sempre uma carta diferente das outras.
              </p>
              <p className="rv d3">
                Ninguém a comandava. Ninguém a temia.<br />
                Ela apenas aparecia — e mudava tudo.
              </p>
              <div className="rule l rv d4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
