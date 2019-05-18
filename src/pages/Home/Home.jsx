import React, { lazy, Suspense } from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Content from "components/Content/Content";

const LazyModal = lazy(() => import('components/Modal/Modal')); // eslint-disable-line

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  openModal = () => {
    this.setState({
      showModal: true,
    });
  }

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    const { showModal } = this.state;

    return (
      <div className="home">
        <Header />
        <Footer />
        <Content
          openModal={this.openModal}
        />
        { showModal && (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyModal closeModal={this.closeModal} />
          </Suspense>
        ) }
      </div>
    );
  }
}

export default Home;
