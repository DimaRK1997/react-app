import classes from './form.module.css';
import React from 'react';
import { Card } from 'pages/pageHome/card/card';

type Cat = {
  id: string;
  length: string;
  image_link: string;
  min_weight: number;
  max_weight: number;
  min_life_expectancy: number;
  max_life_expectancy: number;
  name: string;
};

type Props = Record<string, never>;
type State = {
  cats: Cat[];
};

export class Form extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { cats: [] };
  }

  refForm = React.createRef<HTMLFormElement>();

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const elements = this.refForm.current as HTMLElement;
    const newCats = this.state.cats || [];
    const cat: Cat = {
      id: '',
      length: '',
      image_link: '',
      min_weight: 0,
      max_weight: 0,
      min_life_expectancy: 0,
      max_life_expectancy: 0,
      name: '',
    };

    cat.id = String(Math.random());
    cat.length = (elements.childNodes[6].childNodes as NodeListOf<HTMLInputElement>)[1].value;
    cat.image_link = (elements.childNodes[8].childNodes as NodeListOf<HTMLInputElement>)[1].value;
    cat.min_weight = +(elements.childNodes[2].childNodes as NodeListOf<HTMLInputElement>)[1].value;
    cat.max_weight = +(elements.childNodes[2].childNodes as NodeListOf<HTMLInputElement>)[3].value;
    cat.min_life_expectancy = +(elements.childNodes[4].childNodes as NodeListOf<HTMLInputElement>)[1].value;
    cat.max_life_expectancy = +(elements.childNodes[4].childNodes as NodeListOf<HTMLInputElement>)[3].value;
    cat.name = (elements.childNodes[0].childNodes as NodeListOf<HTMLInputElement>)[1].value;

    newCats.push(cat);
    this.setState({ cats: newCats });
  };
  render() {
    return (
      <div>
        <form ref={this.refForm} onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" />
          </label>
          <br />
          <label>
            Weight: from
            <input type="number" /> to
            <input type="number" />
          </label>
          <br />
          <label>
            Lifetime: from
            <input type="number" /> to
            <input type="number" />
          </label>
          <br />
          <label>
            Length:
            <input type="text" />
          </label>
          <br />
          <label>
            file:
            <input type="file" />
          </label>
          <br />
          <input type="submit" />
        </form>
        {this.state.cats.map((e) => {
          return <Card key={e.id} cat={e} />;
        })}
      </div>
    );
  }
}
