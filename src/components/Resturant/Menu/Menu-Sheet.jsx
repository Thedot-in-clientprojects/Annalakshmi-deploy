
const MenuSheet = ({ menuList, mb }) => {
  return (
    <div className={`col-lg-6 ${mb ? 'md-mb40':''}`}>
      {
        menuList.map((item, idx) => (
          <div className={`menu-list ${idx !== menuList.length - 1 ? 'mb-40':''}`} key={idx}>
            <div className="item">
              <div className="flex mb-5">
                <h5 className="title fz-16 fw-600 text-u ls2">{ item.title }</h5>
                <div className="dots"></div>
                <h6 className="price">${ item.price }</h6>
              </div>
              <p>{ item.details }</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default MenuSheet;