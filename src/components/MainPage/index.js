import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import './index.css'

class MainPage extends Component {
  state = {textToBold: false, textToItalic: false, textToUnderline: false}

  bold = () => {
    this.setState(prevState => ({textToBold: !prevState.textToBold}))
  }

  italic = () => {
    this.setState(prevState => ({textToItalic: !prevState.textToItalic}))
  }

  underline = () => {
    this.setState(prevState => ({textToUnderline: !prevState.textToUnderline}))
  }

  render() {
    const {textToBold, textToItalic, textToUnderline} = this.state

    const color = textToBold ? '#faff00' : '#f1f5f9'
    const italicButtonColor = textToItalic ? '#faff00' : '#f1f5f9'
    const underlineButtonColor = textToUnderline ? '#faff00' : '#f1f5f9'

    const fontWeight = textToBold ? 'bold' : 'normal'
    const fontStyle = textToItalic ? 'italic' : 'normal'
    const textDecoration = textToUnderline ? 'underline' : 'normal'

    return (
      <div className="background-container">
        <div className="central-container">
          <div className="image-container">
            <div>
              <h1 className="heading">Text Editor</h1>
              <div className="image-element">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                  className="image"
                  alt="text editor"
                />
              </div>
            </div>
            <div className="editor-container">
              <ul className="button-container">
                <li>
                  <button
                    data-testid="bold"
                    type="button"
                    onClick={this.bold}
                    style={{
                      color,
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                    }}
                  >
                    <VscBold size={25} />
                  </button>
                </li>
                <li>
                  <button
                    data-testid="italic"
                    type="button"
                    onClick={this.italic}
                    style={{
                      color: italicButtonColor,
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                    }}
                  >
                    <GoItalic size={25} />
                  </button>
                </li>
                <li>
                  <button
                    data-testid="underline"
                    type="button"
                    onClick={this.underline}
                    style={{
                      color: underlineButtonColor,
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                    }}
                  >
                    <AiOutlineUnderline size={25} />
                  </button>
                </li>
              </ul>
              <hr className="hr-element" />
              <textarea
                className="textarea-element"
                style={{fontWeight, fontStyle, textDecoration}}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainPage
