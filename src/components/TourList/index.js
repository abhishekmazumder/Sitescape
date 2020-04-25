import React, { Component } from 'react';
import Tour from '../Tour';
import './tourlist.scss';
import { tourData } from '../../tourData';

export default class TourList extends Component {
	state = {
		tours: tourData,
	};

	removeTour = (id) => {
        const sortedTours = this.state.tours.filter((item) => item.id !== id);
        this.setState({
            tours:sortedTours
        })
	};

	render() {
		// console.log(this.state.tours);
		return (
			<section className="tourlist">
				{this.state.tours.map((item) => (
					<Tour
						key={item.id}
						tour={item}
						removeTour={this.removeTour}
					/>
				))}
			</section>
		);
	}
}
