// import React, { Component } from 'react';
// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';


// class MyCarousel extends React.Component {
//   constructor() {
//     super()
//     this.state = { value: 0, trendingProducts: [] };
//     this.onChange = this.onChange.bind(this);
//   }

//   onChange(value) {
//     this.setState({ value });
//   }

//   componentDidMount = () => {
//     API.handleTrending()
//       .then(res => {
//         console.log(res.data.results)
//         let prod = res.data.results.filter(elem => elem.Images !== undefined )
//             console.log(prod)
//         this.setState({ trendingProducts: prod })
//       })
//   }

//   render() {
//     return ([]
//     <div>
//       <input
//         type="number"
//         value={this.state.value}
//         onChange={e => this.onChange(parseInt(e.target.value || 0))}
//       />
//       <Carousel {...settings}
//         value={this.state.value}
//         onChange={this.onChange}
//         slides={[
//           (<img src="https://www.cozadzien.pl/img/zajawki/_max/1376059845000-mona-lisa-2.jpg" />),
//           (<img src="https://www.cozadzien.pl/img/zajawki/_max/1376059845000-mona-lisa-2.jpg" />),
//           (<img src="https://www.cozadzien.pl/img/zajawki/_max/1376059845000-mona-lisa-2.jpg" />),
//         ]}
//         arrows
//         clickToChange
//       />
//     </div>
//     );
//   }
// }

// export default MyCarousel;
