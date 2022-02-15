import './index.css'

const Password = props => {
  const {item, deleteItem} = props
  const {password, username, website, status, id} = item

  const removeItemsFunction = () => {
    deleteItem(id)
  }
  console.log('okay')

  const showImage = status ? (
    password
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )

  return (
    <li className="list-container">
      <div className="get-line">
        <div className="first-name-con">
          <h1 className="first-name">{website[0].toUpperCase()}</h1>
        </div>
        <div className="second-name">
          <p className="add-name">{website}</p>
          <p className="add-name">{username}</p>
          <p className="add-name">{showImage}</p>
        </div>
      </div>

      <button className="third-name" type="button" testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete"
          onClick={removeItemsFunction}
        />
      </button>
    </li>
  )
}

export default Password
