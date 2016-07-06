/* @jsx createElement */
import {Component} from 'react';
import createElement from 'react-stylematic';
import assetUrl from '../../../lib/asset-url';

import {Form, FormItem, Text, Submit} from '../forms';
import {Layout, LayoutItem, TextAlign, Padded} from '../../../lib/react-layout';
import {H3} from '../typography';

export default function YourInfo({didSucceed, ...props}) {
  const main = didSucceed ? <Thanks/> : <YourInfoForm {...props}/>
  return (
    <Padded id="section-your-info" style={styles.wrapper}>
      <Layout center>
        <LayoutItem max="600px">
          <div style={styles.box}>
            <div style={styles.content}>
              {main}
            </div>
          </div>
        </LayoutItem>
      </Layout>
    </Padded>
  );
}

class YourInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      street: '',
      city: ''
    };
  }

  render() {
    const {saveAddress, isSaving, hasFailure} = this.props;
    const error = hasFailure ? <p style={styles.error}>{hasFailure}. Please try again. If you're still having
      issues, email us at <a href="mailto:rachplusmatt@gmail.com">rachplusmatt@gmail.com</a>.</p> : null;

    return (
      <div>
        <TextAlign center>
          <img src={assetUrl('avocado.png')} style={styles.image} />
          <H3>Your Info</H3>
        </TextAlign>
        <p>
          We're excited for you to join us in Calistoga, CA for our wedding!
          Please save your address in this form so that we can send you
          a formal invitation. We hope to see you in May!
        </p>
        <Form onSubmit={(evt) => {
          evt.preventDefault();
          saveAddress(this.state);
        }}>
          {error}
          <FormItem>
            <Text
              name="name"
              label="Name(s)"
              placeholder="John and Jane Doe"
              value={this.state.name}
              onChange={(evt) => this.setState({name: evt.target.value})}
            />
          </FormItem>
          <FormItem>
            <Text
              name="street"
              label="Street Address"
              placeholder="1234 Wedding Road"
              value={this.state.street}
              onChange={(evt) => this.setState({street: evt.target.value})}
            />
          </FormItem>
          <FormItem>
            <Text
              name="city"
              label="City & Country"
              placeholder="Calistoga, CA 91101 USA"
              value={this.state.city}
              onChange={(evt) => this.setState({city: evt.target.value})}
            />
          </FormItem>
          <Submit value={isSaving ? 'Saving...' : 'Save'}/>
        </Form>
      </div>
    );
  }
}

function Thanks() {
  return (
    <div>
      <TextAlign center>
        <img src={assetUrl('avocado.png')} style={styles.image} />
        <H3>Thanks!</H3>
      </TextAlign>
      <p>
        We've got your address! Expect a formal invitation in the next few
        months. If you have any questions, don't hesitate to reach out to us
        at <a href="mailto:rachplusmatt@gmail.com">rachplusmatt@gmail.com</a>.
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
  }
};
