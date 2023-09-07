/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Form from 'react-jsonschema-form';

const schema = {
  type: 'object',
  properties: {
    firstName: { type: 'string', default: 'Dan' },
    lastName: { type: 'string', default: 'Abramov' },
  },
};

// function JSONSchemaForm() {
//   return <Form schema={schema} />;
// }

class JSONSchemaForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit({ formData }) {
    console.log(formData);
  }

  render() {
    return (
      <Form schema={schema} onSubmit={this.handleSubmit} />
    );
  }
}

export default JSONSchemaForm;
