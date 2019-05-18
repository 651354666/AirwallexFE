import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';
import Content from '../src/components/Content/Content';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Modal from '../src/components/Modal/Modal';

describe('Enzyme Shallow', function () {
  let content = shallow(<Content/>);
  let header = shallow(<Header/>);
  let footer = shallow(<Footer/>);
  let modal = shallow(<Modal/>);

  it('Content\'s title should be A better wayto enjoy every day.', function () {
    expect(content.find('h1').text()).to.equal('A better wayto enjoy every day.');
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
});