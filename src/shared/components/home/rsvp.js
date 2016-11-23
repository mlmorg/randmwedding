/* @jsx createElement */
import {Component} from 'react';
import createElement from 'react-stylematic';
import assetUrl from '../../../lib/asset-url';

import {Button, Form, FormItem, Text, TextArea, Choice, Number, Submit} from '../forms';
import {Layout, LayoutItem, TextAlign, Padded} from '../../../lib/react-layout';
import {H3} from '../typography';

export default function RSVP({didSucceed, ...props}) {
  const main = didSucceed ? <Thanks/> : <RSVPFormWrapper {...props}/>
  return (
    <Padded id="section-rsvp" style={styles.wrapper}>
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

function RSVPFormWrapper({shouldShowForm, ...props}) {
  const main = shouldShowForm ? <RSVPForm {...props}/> : <RSVPButton {...props}/>;
  return (
    <div>
      <TextAlign center>
        <img src={assetUrl('avocado.png')} style={styles.image} />
        <H3>RSVP</H3>
      </TextAlign>
      <p>
        We're excited for you to join us in Calistoga, CA for our wedding!
        Please RSVP by filling out the form below by <strong>March 31<sup styles={styles.superscript}>st</sup> 2017</strong>.
        We hope to see you in May!
      </p>
      {main}
    </div>
  );
}

function RSVPButton({showForm}) {
  return (
    <TextAlign center>
      <Button onClick={showForm}>RSVP Now</Button>
    </TextAlign>
  );
}

class RSVPForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numAdults: '',
      numChildren: '',
      name: '',
      friday: '',
      saturday: '',
      sunday: '',
      diet: '',
      wordsRachel: '',
      wordsMatt: '',
      wordsAdvice: ''
    };
  }

  render() {
    const {saveForm, isSaving, hasFailure} = this.props;
    const error = hasFailure ? <p style={styles.error}>{hasFailure}. Please try again. If you're still having
      issues, email us at <a href="mailto:rachplusmatt@randmwedding.com">rachplusmatt@randmwedding.com</a>.</p> : null;

    return (
      <Form onSubmit={(evt) => {
        evt.preventDefault();
        saveForm(this.state);
      }}>
        {error}
        <Layout>
          <LayoutItem size="6">
            <FormItem>
              <Number
                name="numAdults"
                label="# of Adults"
                value={this.state.numAdults}
                onChange={(evt) => this.setState({numAdults: evt.target.value})}
              />
            </FormItem>
          </LayoutItem>
          <LayoutItem size="6">
            <FormItem>
              <Number
                name="numChildren"
                label="# of Children"
                value={this.state.numChildren}
                onChange={(evt) => this.setState({numChildren: evt.target.value})}
              />
            </FormItem>
          </LayoutItem>
        </Layout>
        <FormItem>
          <Text
            name="name"
            label="Name(s)"
            placeholder="John and Jane Doe"
            value={this.state.name}
            onChange={(evt) => this.setState({name: evt.target.value})}
          />
        </FormItem>

        <hr style={styles.hr}/>

        <FormItem>
          <Choice
            title="Will you attend the Friday Evening Pizza Party?"
            name="friday"
            values={{
              y: 'Yes, can\'t wait!',
              n: 'No, but thanks for the invite!'}}
            checked={this.state.friday}
            onChange={(evt) => this.setState({friday: evt.target.value})}
          />
        </FormItem>
        <FormItem>
          <Choice
            title="Will you attend the Ceremony & Reception?"
            name="saturday"
            values={{
              y: 'Yes, I wouldn\'t miss it!',
              n: 'No, but sending love your way!'}}
            checked={this.state.saturday}
            onChange={(evt) => this.setState({saturday: evt.target.value})}
          />
        </FormItem>
        <FormItem>
          <Choice
            title="Will you attend the Sunday Texas Breakfast Taco Brunch / Pool Party?"
            name="sunday"
            values={{
              y: 'Yes, let\'s party!',
              n: 'No, but I\'ll be there in spirit!'}}
            checked={this.state.sunday}
            onChange={(evt) => this.setState({sunday: evt.target.value})}
          />
        </FormItem>
        <FormItem>
          <Text
            name="diet"
            label="Dietary Restrictions or Allergies?"
            subLabel="(Optional)"
            placeholder="None!"
            value={this.state.diet}
            onChange={(evt) => this.setState({diet: evt.target.value})}
          />
        </FormItem>

        <hr style={styles.hr}/>

        <FormItem>
          <TextArea
            name="wordsRachel"
            label="Words to Describe Rachel"
            subLabel="(Optional, May be used in ceremony or toasts)"
            placeholder="..."
            value={this.state.wordsRachel}
            onChange={(evt) => this.setState({wordsRachel: evt.target.value})}
          />
        </FormItem>
        <FormItem>
          <TextArea
            name="wordsMatt"
            label="Words to Describe Matt"
            subLabel="(Optional, May be used in ceremony or toasts)"
            placeholder="..."
            value={this.state.wordsMatt}
            onChange={(evt) => this.setState({wordsMatt: evt.target.value})}
          />
        </FormItem>
        <FormItem>
          <TextArea
            name="wordsAdvice"
            label="Marriage Advice, Wit or Wisdom"
            subLabel="(Optional, May be used in ceremony or toasts)"
            placeholder="..."
            value={this.state.wordsAdvice}
            onChange={(evt) => this.setState({wordsAdvice: evt.target.value})}
          />
        </FormItem>
        <Submit value={isSaving ? 'Saving...' : 'Save'}/>
      </Form>
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
        We've got your information! If you have any questions, don't hesitate to reach out to us
        at <a href="mailto:rachplusmatt@randmwedding.com">rachplusmatt@randmwedding.com</a>.
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
