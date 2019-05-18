import React from 'react';
import {mount} from 'enzyme';
import { expect } from 'chai';
import Content from '../src/components/Content/Content';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Modal from '../src/components/Modal/Modal';

describe('Enzyme render', function () {
  let content = mount(<Content/>);
  let header = mount(<Header/>);
  let footer = mount(<Footer/>);
  let modal = mount(<Modal/>);
  
  it('Content has a button', function () {
    expect(content.find('.content__btn').length).to.equal(1);
  });

  it('Header has one logo', function () {
    expect(header.find('.header__logo').length).to.equal(1);
  });

  it('Footer\'s text should be Made with ♥ in Melborne  © 2019 Broccoli & Co. All rights reserved.', function () {
    expect(footer.find('.footer__content').text()).to.equal('Made with ♥ in Melborne  © 2019 Broccoli & Co. All rights reserved.');
  });

  it('Modal has 3 input fields.', function () {
    expect(modal.find('input').length).to.equal(3);
  });

  it('Modal has one button with text Send', function () {
    expect(modal.find('.modal__submit').text()).to.equal('Send');
  });
});