/* @jsx createElement */
import createElement from 'react-stylematic';

import {Form, FormItem, Text, Submit} from '../forms';
import {Layout, LayoutItem, TextAlign, Padded} from '../../../lib/react-layout';

export default function YourInfo() {
  return (
    <Padded id="your-info">
      <Layout center>
        <LayoutItem max="600px">
          <div style={styles.box}>
            <div style={styles.content}>
              <TextAlign center>
                <img src="/assets/static/avocado.png" style={styles.image} />
                <h3>Your Info</h3>
              </TextAlign>
              <p>
                We're excited for you to join us in Calistoga, CA for our wedding!
                Please save your address in this form so that we can send you
                a formal invitation. We hope to see you in May!
              </p>
              <Form>
                <FormItem>
                  <Text label="Street Address" placeholder="1234 Wedding Road"/>
                </FormItem>
                <FormItem>
                  <Text label="City & Country" placeholder="Calistoga, CA 91101 USA"/>
                </FormItem>
                <Submit value="Save"/>
              </Form>
            </div>
          </div>
        </LayoutItem>
      </Layout>
    </Padded>
  );
}

const styles = {
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
    height: '130px'
  }
};
