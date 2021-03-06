/* eslint camelcase:0 */
import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';
import { getMoveName, getFastMoveWithDPS, getLevel } from '../api/moves';

import {
  inject,
  observer,
} from 'mobx-react';
import autobind from 'autobind-decorator';

import styles from './PokemonEntry.css';

export type Props = {
  pokemon: Object;
};

@inject('authStore')
@autobind
@observer
export default class PokemonEntry extends Component {
  props: Props;

  render() {
    const {
      pokemon,
    } = this.props;

    const {
      currCP,
      minCP,
      maxCP,
      individual_attack,
      individual_defense,
      individual_stamina,
    } = pokemon;

    const percentMaxCp = Math.floor(((currCP - minCP) / (maxCP - minCP)) * 100);
    const percentMaxIv = parseFloat((((individual_attack || 0) + (individual_defense || 0) + (individual_stamina || 0)) / .45).toFixed(2));

		const move1 = getFastMoveWithDPS(pokemon.move_1, pokemon.meta.type);
		const move2 = getFastMoveWithDPS(pokemon.move_2, pokemon.meta.type);
		const level = getLevel(pokemon.cp_multiplier, pokemon.additional_cp_multiplier);
    return (
      <div className={styles.container}>
        <div>
          <span className={styles.label}>
            CP
          </span>
          <span>
            {pokemon.cp} ({percentMaxCp}%) {pokemon.favorite ? '\u2605' : ''}
          </span>
        </div>
        <Avatar
          backgroundColor="white"
          size={50}
          src={`./images/${pokemon.meta.num}${pokemon.pokemon_display.costume ? 'a' : ''}.png`}
        />
        <div>
          {pokemon.meta.name} {pokemon.nickname ? `(${pokemon.nickname})` : ''}{pokemon.pokemon_display.gender===1 ? '\u2642' : pokemon.pokemon_display.gender===2 ? '\u2640' : ''} Level: {level}
        </div>
        <div>
          <span className={styles.label}>
            IV
          </span>
          <span>
            {individual_attack || 0}/{individual_defense || 0}/{individual_stamina || 0}
            ({percentMaxIv}%)
          </span>
        </div>
				<div>
					<span className={styles.label}>
						Fast Move:
					</span>
					<span>
						{move1}
					</span>
				</div>
				<div>
					<span className={styles.label}>
						Charge Move:
					</span>
					<span>
						{move2}
					</span>
				</div>
				<div>
					<span className={styles.label}>{(pokemon.from_fort && pokemon.pokeball===1) ? 'Egg?' : ''}</span>
				</div>
      </div>
    );
  }
}
