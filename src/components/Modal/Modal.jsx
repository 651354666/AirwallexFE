import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.defaultState = {
      fullName: "",
      email: "",
      cEmail: "",
      fullNameError: false,
      emailError: false,
      cEmailError: false,
      sending: false,
      error: null,
      sent: false,
    };

    this.validations = {
      vFullName: /.+/,
      vEmail: /^[A-Za-z0-9]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    };

    this.state = Object.assign({}, this.defaultState);
  }

  fieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submit = () => {
    let fullNameError = false;
    let emailError = false;
    let cEmailError = false;
    const { fullName, email, cEmail } = this.state;
    const { vFullName, vEmail } = this.validations;
    if (!vFullName.test(fullName)) {
      fullNameError = true;
    }

    if (!vEmail.test(email)) {
      emailError = true;
    }

    if (!vEmail.test(cEmail) || (email !== cEmail)) {
      cEmailError = true;
    }

    if (!fullNameError && !emailError && !cEmailError) {
      this.sendRequest();
    }
    this.setState({
      fullNameError,
      emailError,
      cEmailError,
    });
  };

  sendRequest = () => {
    const self = this;
    const { fullName, email } = this.state;
    this.setState({
      sending: true,
      error: false,
    });

    axios.post("https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth", {
      name: fullName,
      email,
    })
      .then(() => {
        self.setState({
          sending: false,
          sent: true,
          error: false,
        });
      })
      .catch((error) => {
        self.setState({
          sending: false,
          error: error.response.data.errorMessage || "Somethinkg went wrong, please try again later",
        });
      });
  };

  clickCloseModal = (e) => {
    const { className } = e.target;
    if (className === "modal" || className === "modal__close") {
      const { closeModal } = this.props;
      this.setState(Object.assign({}, this.defaultState));
      closeModal();
    }
  }

  render() {
    const {
      sent,
      fullNameError,
      fullName,
      emailError,
      email,
      cEmailError,
      cEmail,
      sending,
      error,
    } = this.state;

    return (
      <div
        role="button"
        tabIndex={-2}
        className="modal"
        onClick={this.clickCloseModal}
        onKeyDown={() => {}}
      >
        <div className="modal__content">
          <div className="modal__title">Request an invite</div>
          <div className="modal__dividor" />
          { sent ? (
            <div className="modal__finish">
              <div className="modal__subtitle">You will be one of the first to experience Broccoli & Co. when we launch.</div>
              <div
                role="button"
                tabIndex={-1}
                className="modal__close"
                onClick={this.clickCloseModal}
                onKeyDown={() => {}}
              >
                OK
              </div>
            </div>
          ) : (
            <div className="modal__form">
              <input
                className={fullNameError ? "modal__input modal__input--error" : "modal__input"}
                type="text"
                name="fullName"
                value={fullName}
                placeholder="Full name"
                onChange={this.fieldChange}
              />
              <input
                className={emailError ? "modal__input modal__input--error" : "modal__input"}
                type="text"
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.fieldChange}
              />
              <input
                className={cEmailError ? "modal__input modal__input--error" : "modal__input"}
                type="text"
                name="cEmail"
                value={cEmail}
                placeholder="Confirm email"
                onChange={this.fieldChange}
              />
              <div
                role="button"
                tabIndex={0}
                className={sending ? "modal__submit modal__submit--sending" : "modal__submit"}
                onClick={this.submit}
                onKeyDown={() => {}}
              >
                {sending ? "Sending" : "Send"}
              </div>
              { error && <div className="modal__error">{ error }</div> }
            </div>
          ) }
        </div>
      </div>
    );
  }
}

Modal.defaultProps = {
  closeModal: () => {},
};

Modal.propTypes = {
  closeModal: PropTypes.func,
};

export default Modal;
