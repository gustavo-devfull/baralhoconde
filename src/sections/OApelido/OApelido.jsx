import './OApelido.css'

export function OApelido() {
  return (
    <section className="s-apelido" id="o-apelido">
      <div className="apelido-c">
        <span className="tag rv" style={{ textAlign: 'center' }}>III · O Apelido</span>
        <p className="rv d1">
          Entre famílias de imigrantes ítalo-brasileiros, essa carta ganhou um apelido curioso.
        </p>
        <p className="rv d2">
          Ninguém sabe exatamente quando começou. Talvez em uma mesa de madeira gasta.
          Talvez em um jogo interrompido por uma jogada improvável. Talvez apenas
          como uma brincadeira que atravessou gerações.
        </p>
        <span className="apelido-big rv d2">O Conde.</span>
        <p className="rv d3">Mas o nome permaneceu.</p>
        <div className="rule c rv d3"></div>
        <p className="apelido-note rv d4">Tradição oral · Colônias Ítalo-Brasileiras · Séc. XIX</p>
      </div>
    </section>
  )
}
