/* @jsx createElement */
import {Component} from 'react';
import createElement from 'react-stylematic';
import assetUrl from '../../../lib/asset-url';

import {Button, Form, FormItem, Text, TextArea, Choice, Number, Submit} from '../forms';
import {Layout, LayoutItem, TextAlign, Padded} from '../../../lib/react-layout';
import {H3} from '../typography';

export default function RSVP({didSucceed, ...props}) {
  return (
    <Padded id="section-rsvp" style={styles.wrapper}>
      <Layout center>
        <LayoutItem max="600px">
          <div style={styles.box}>
            <div style={styles.content}>
              <RSVPFormWrapper {...props}/>
            </div>
          </div>
        </LayoutItem>
      </Layout>
    </Padded>
  );
}

function RSVPFormWrapper({shouldShowForm, ...props}) {
  return (
    <div>
      <TextAlign center>
        <img src={assetUrl('avocado.png')} style={styles.image} />
        <H3>See You Soon!</H3>
      </TextAlign>
      <p>
        We're looking forward to seeing you all very soon! Most of the information
        you should need is below (in the <a href="#schedule">Schedule</a> and <a href="#faq-and-details">FAQ</a> sections). If you have
        any questions, feel free to <a href="mailto:rachplusmatt@randmwedding.com">email us</a>.
      </p>
    </div>
  );
}

const styles = {
  wrapper: {
    paddingTop: '50px'
  },
  box: {
    border: '1px solid #ccc',
    backgroundColor: '#F3F4EE',
    padding: '30px',
    marginTop: '75px'
  },
  content: {
    marginTop: -(30 + 65) + 'px'
  },
  image: {
    width: '180px',
    height: '130px'
  },
  error: {
    padding: '8px',
    backgroundColor: '#C74F41',
    color: '#fff',
    fontSize: '16px',
    lineHeight: '1.2'
  },
  superscript: {
    fontSize: '60%'
  },
  hr: {
    margin: '0',
    padding: '0',
    marginBottom: '20px',
    border: 'none',
    borderBottom: '1px solid #ddd',
  }
};
