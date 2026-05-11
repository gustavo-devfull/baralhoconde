import './OCoringa.css'

export function OCoringa() {
  return (
    <section className="s-coringa" id="o-coringa">
      <div className="wrap-s">
        <span className="tag rv" style={{ textAlign: 'center' }}>II · O Coringa</span>
        <div className="coringa-lines">
          <span className="cl rv">Uma carta sem reino.</span>
          <span className="cl rv d1">Sem exército.</span>
          <span className="cl rv d2">Sem regras.</span>
          <span className="cg"></span>
          <span className="crev rv d3">O Coringa.</span>
        </div>
        <div className="rule c rv d4"></div>
        <p className="coringa-body rv d4">
          Enquanto reis comandavam, damas influenciavam e valetes serviam,<br />
          ele atravessava o jogo livremente — mudando destinos sem pedir permissão.
        </p>
      </div>
    </section>
  )
}
