/* @jsx createElement */
import createElement from 'react-stylematic';

export function Form({onSubmit, children}) {
  return <form onSubmit={onSubmit} style={styles.form}>{children}</form>;
}

export function FormItem({children}) {
  return <div style={styles.formItem}>{children}</div>;
}

export function Text({label, subLabel, ...props}) {
  const id = createId(label);
  const subl = subLabel ? <small style={styles.subLabel}><br/>{subLabel}</small> : null;
  return (
    <div>
      <label style={styles.label} htmlFor={id}>{label}{subl}</label>
      <input type="text" id={id} style={styles.text} {...props}/>
    </div>
  );
}

export function TextArea({label, subLabel, ...props}) {
  const id = createId(label);
  const subl = subLabel ? <small style={styles.subLabel}><br/>{subLabel}</small> : null;
  return (
    <div>
      <label style={styles.label} htmlFor={id}>{label}{subl}</label>
      <textarea id={id} style={styles.text} {...props}/>
    </div>
  );
}

export function Number({label, ...props}) {
  const id = createId(label);
  return (
    <div>
      <input type="number" id={id} style={styles.numberText} {...props}/>
      <label style={styles.numberLabel} htmlFor={id}>{label}</label>
    </div>
  );
}

export function Choice({title, name, values, checked, onChange}) {
  const radios = Object.keys(values).map(function (value, i) {
    const label = values[value];
    return (
      <Radio
        key={i}
        name={name}
        label={label}
        value={value}
        checked={checked === value}
        onChange={onChange}
      />
    );
  });
  return (
    <div>
      <span style={styles.label}>{title}</span>
      {radios}
    </div>
  );
}

export function Radio({label, ...props}) {
  const id = createId(label);
  return (
    <div style={{lineHeight: '1.3'}}>
      <input type="radio" id={id} {...props}/>
      <label style={styles.radioLabel} htmlFor={id}>{label}</label>
    </div>
  );
}

export function Button({...props}) {
  return <button style={styles.button} {...props}>{props.children}</button>
}

export function Submit({...props}) {
  return <input type="submit" style={styles.submit} {...props}/>;
}

function createId(label) {
  return `form-${label.toLowerCase().replace(/\W+/g, '')}`;
}

const shared = {
  input: {
    borderRadius: '0px',
    appearance: 'none'
  },
  inputText: {
    fontSize: '18px',
    lineHeight: '2.3',
    padding: '0px 8px',
    border: '1px solid #ddd',

    ':focus': {
      outline: 'none',
      borderColor: '#A4C89A'
    }
  },
  baseLabel: {
    fontSize: '11px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#777',
    letterSpacing: '2px'
  },
  button: {
    display: 'inline-block',
    fontSize: '18px',
    padding: '0px 14px',
    lineHeight: '2.5',
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

const styles = {
  form: {
    display: 'block',
    width: '100%',
    margin: '0px',
    padding: '0px'
  },
  formItem: {
    marginBottom: '20px'
  },
  numberLabel: {
    ...shared.baseLabel,
    paddingLeft: '10px'
  },
  numberText: {
    ...shared.input,
    ...shared.inputText,
    width: '50px'
  },
  radioLabel: {
    fontSize: '15px',
    paddingLeft: '10px',
    lineHeight: '1'
  },
  label: {
    ...shared.baseLabel,
    display: 'block',
    marginBottom: '3px',
    paddingLeft: '3px'
  },
  subLabel: {
    fontSize: '70%'
  },
  'text': {
    ...shared.input,
    ...shared.inputText,
    width: '100%'
  },
  button: {
    ...shared.button
  },
  submit: {
    ...shared.input,
    ...shared.button,
    fontSize: '12px',
    padding: '0px 10px',
    lineHeight: '2.5',
  }
};
