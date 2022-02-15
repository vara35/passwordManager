import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import Password from '../Password'

import './index.css'

class HomePage extends Component {
  state = {
    itemList: [],
    website: '',
    username: '',
    password: '',
    search: '',
  }

  updateSearch = event => {
    this.setState({search: event.target.value})
  }

  changeStatus = () => {
    this.setState(prevState => ({
      itemList: prevState.itemList.map(eachOne => ({
        ...eachOne,
        status: !eachOne.status,
      })),
    }))
  }

  deleteItem = id => {
    const {itemList} = this.state
    const filterData = itemList.filter(eachOne => eachOne.id !== id)
    this.setState({itemList: filterData})
  }

  updateWebsite = event => {
    this.setState({website: event.target.value})
  }

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  submit = event => {
    const {username, website, password} = this.state
    event.preventDefault()

    const newItem = {
      id: uuidv4(),
      website,
      username,
      password,
      status: false,
    }
    this.setState(prevState => ({
      itemList: [...prevState.itemList, newItem],
      username: '',
      password: '',
      website: '',
    }))
  }

  getPasswordView = () => {
    const {itemList, search} = this.state
    const filterSearchResult = itemList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <ul className="ul-container">
        {filterSearchResult.map(eachOne => (
          <Password
            item={eachOne}
            key={eachOne.id}
            deleteItem={this.deleteItem}
          />
        ))}
      </ul>
    )
  }

  getNoPasswordView = () => (
    <div className="password-manager-lock-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-image"
      />
      <p className="add-new-heading">No Passwords</p>
    </div>
  )

  render() {
    const {website, username, password, itemList, search} = this.state

    const filterSearchResult1 = itemList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="password-manager"
        />
        <div className="add-password-container">
          <div className="password-manager-lock-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="password-manager-lock-image"
            />
          </div>
          <form className="update-names-container" onSubmit={this.submit}>
            <h1 className="add-new-heading">Add New Password</h1>
            <div className="browser-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website"
              />
              <input
                type="text"
                className="input-text"
                placeholder="Enter Website"
                onChange={this.updateWebsite}
                value={website}
              />
            </div>
            <div className="browser-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="website"
              />
              <input
                type="text"
                className="input-text"
                placeholder="Enter Username"
                onChange={this.updateUsername}
                value={username}
              />
            </div>
            <div className="browser-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="website"
              />
              <input
                type="password"
                className="input-text"
                placeholder="Enter Password"
                onChange={this.updatePassword}
                value={password}
              />
            </div>
            <div className="submit-button-container">
              <button type="submit" className="submit-button">
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="second-bg-container">
          <div className="your-passwords-search-container">
            <h1 className="add-new-heading">
              Your Passwords
              <p className="password-count">{itemList.length}</p>
            </h1>
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                className="input-search"
                placeholder="Search"
                onChange={this.updateSearch}
              />
            </div>
          </div>
          <hr className="hr" />
          <div>
            <div className="search-icon-container">
              <input type="checkbox" id="checkbox2" className="checkbox1" />
              <label
                htmlFor="checkbox2"
                className="label-text"
                onClick={this.changeStatus}
              >
                Show passwords
              </label>
            </div>
            {filterSearchResult1.length > 0
              ? this.getPasswordView()
              : this.getNoPasswordView()}
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
