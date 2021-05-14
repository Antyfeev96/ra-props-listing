import React from 'react'
import PropTypes from 'prop-types'
// import shortid from 'shortid'

export default function Listing(props) {
  const { items } = props;
  return (
    <div className="item-list">
      {items.map(item =>
        item.state === 'active'
        ? <div key={item.listing_id} className="item">
            <div className="item-image">
                <a href={item.url}>
                  <img src={item.MainImage.url_570xN} alt={item.materials[0]} />
                </a>
            </div>
          <div className="item-details">
            <p className="item-title">{item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title}</p>
            <p className="item-price">{item.currency_code}{item.price}</p>
            <p className="item-quantity level-medium">{item.quantity} left</p>
          </div>
          </div>
        : <div key={item.listing_id}>{item.error_messages[0]}</div>
      )}
    </div>
  )
}

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    listing_id: PropTypes.number.isRequired,
    url: PropTypes.string,
    state: PropTypes.string.isRequired,
    MainImage: PropTypes.shape({
      url_570xN: PropTypes.string.isRequired
    }),
    materials: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string
  }))
}


