import numbers from '../../../data/architecture/numbers.json';

const Numbers = () => {
  return (
    <section className="numbers">
      <div className="container pt-0">
        <div className="row justify-content-center">
          {
            numbers.map((item, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="item">
                  <div className="numb valign">
                    <h4>{ item.number }</h4>
                  </div>
                  <div className="cont">
                    <h5 className="fw-200 fz-14 text-u ls1 opacity-7">{ item.title.text1 } <br /> { item.title.text2 }</h5>
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