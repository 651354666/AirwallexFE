import React from 'react';
import {render} from 'enzyme';
import { expect } from 'chai';
import Content from '../src/components/Content/Content';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Modal from '../src/components/Modal/Modal';

describe('Enzyme render', function () {
  let content = render(<Content/>);
  let header = render(<Header/>);
  let footer = render(<Footer/>);
  let modal = render(<Modal/>);

  it('Content\'s subtitle should be Be the first to know when we launch.', function () {
    expect(content.find('h2').text()).to.equal('Be the first to know when we launch.');
  });

  it('Header has one logo', function () {
    expect(header.find('.header__logo').length).to.equal(1);
  });

  it('Footer\'s text should be Made with ♥ in Melborne  © 2019 Broccoli & Co. All rights reserved.', function () {
    expect(footer.find('.footer__content').text()).to.equal('Made with ♥ in Melborne  © 2019 Broccoli & Co. All rights reserved.');
  });
  
  it('Modal has one button with text Send', function () {
    expect(modal.find('.modal__submit').text()).to.equal('Send');
  });
});