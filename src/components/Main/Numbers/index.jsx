import numbers from '../../../data/main/numbers.json';

const Numbers = () => {
  return (
    <section className="numbers">
      <div className="container">
        <div className="row">
          {
            numbers.map((number, idx) => (
              <div className="col-lg-3" key={idx}>
                <div className="bloc text-center">
                  <div className="numb valign mb-20">
                    <h3 className="fz-40 fw-700 full-width">{ number.value }{ number.operator ? <i className="fz-30">{ number.operator }</i> : null }</h3>
                  </div>
                  <div className="cont">
                    <h6 className="fw-500 text-u ls1 fz-14">{ number.title }</h6>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Numbers