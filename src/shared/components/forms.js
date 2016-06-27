/* @jsx createElement */
import createElement from 'react-stylematic';

export function Form({children}) {
  return <form style={styles.form}>{children}</form>;
}

export function FormItem({children}) {
  return <div style={styles.formItem}>{children}</div>;
}

export function Text({label, ...props}) {
  const id = `text-input-${label.toLowerCase().replace(/\W+/g, '')}`;
  return (
    <div>
      <label style={styles.label} htmlFor={id}>{label}</label>
      <input type="text" id={id} style={styles.text} {...props}/>
    </div>
  );
}

export function Submit({...props}) {
  return <input type="submit" style={styles.submit} {...props}/>;
}

const styles = {
  form: {
    display: 'block',
    width: '100%',
    margin: '0px',
    padding: '0px'
  },
  formItem: {
    marginBottom: '15px'
  },
  label: {
    display: 'block',
    fontSize: '11px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#777',
    marginBottom: '3px',
    paddingLeft: '3px',
    letterSpacing: '2px'
  },
  'text': {
    width: '100%',
    fontSize: '18px',
    lineHeight: '1',
    padding: '8px',
    border: '1px solid #ddd',

    ':focus': {
      outline: 'none',
      borderColor: '#A4C89A'
    }
  },
  submit: {
    display: 'inline-block',
    fontSize: '12px',
    padding: '5px 10px',
    border: '2px solid #A4C89A',
    background: 'none',
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#777',
    letterSpacing: '2px',

    ':hover': {
      backgroundColor: '#A4C89A',
      color: '#fff'
    }
  }
};
