import React from 'react';

type HandleSubmit = {
  handleSubmit: (e: React.FormEvent) => void;
};

export class Form extends React.Component<HandleSubmit> {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" />
        </label>
        <br />
        <label>
          Weight: from
          <input name="minWeight" type="number" /> to
          <input name="maxWeight" type="number" />
        </label>
        <br />
        <label>
          Lifetime: from
          <input name="minLife" type="number" /> to
          <input name="maxLife" type="number" />
        </label>
        <br />
        <label>
          Length:
          <input name="length" type="text" />
        </label>
        <br />
        <input type="submit" />
      </form>
    );
  }
}
