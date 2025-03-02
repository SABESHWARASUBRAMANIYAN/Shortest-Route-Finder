import React from 'react';
import ReactDOM from 'react-dom';
import ShortestPathFinder from './ShortestPathFinder'; // Import the ShortestPathFinder component
import './index.css'

const dist = [
  "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore",
  "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram",
  "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam",
  "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram",
  "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni",
  "Thiruvallur", "Thiruvarur", "Thoothukudi", "Tiruchirappalli",
  "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvannamalai", "Vellore",
  "Viluppuram", "Virudhunagar", "Mayiladuthurai"
];

const kms = [
  [1, 18, 30], [1, 25, 44], [1, 30, 74], [1, 5, 127], [5, 38, 84],
  [5, 18, 130], [5, 9, 100], [5, 36, 45], [2, 36, 105], [27, 3, 45],
  [27, 10, 53], [27, 21, 95], [3, 10, 75], [3, 2, 63], [10, 21, 49],
  [10, 2, 40], [10, 34, 117], [2, 34, 134], [2, 36, 105], [21, 34, 97],
  [21, 35, 30], [35, 34, 87], [35, 32, 90], [32, 34, 94], [32, 13, 46],
  [13, 6, 50], [34, 36, 61], [34, 6, 119], [34, 9, 69], [36, 9, 77],
  [9, 22, 101], [9, 6, 172], [6, 22, 66], [22, 16, 52], [22, 8, 68],
  [22, 18, 116], [8, 16, 60], [8, 33, 54], [8, 17, 165], [8, 4, 100],
  [8, 12, 65], [17, 4, 101], [16, 12, 33], [16, 30, 90], [18, 30, 59],
  [38, 25, 76], [38, 28, 41], [15, 28, 27], [28, 25, 60], [25, 30, 59],
  [25, 19, 62], [30, 19, 56], [30, 12, 82], [12, 7, 78], [12, 33, 88],
  [33, 4, 55], [33, 7, 117], [19, 23, 82], [7, 26, 74], [7, 14, 62],
  [26, 14, 76], [14, 23, 47], [14, 37, 58], [23, 37, 99], [23, 20, 84],
  [20, 37, 118], [20, 29, 135], [37, 29, 113], [37, 24, 127], [24, 29, 104],
  [24, 31, 59], [29, 31, 45], [11, 31, 82]
];

ReactDOM.render(
  <React.StrictMode>
    <ShortestPathFinder dist={dist} kms={kms} />
  </React.StrictMode>,
  document.getElementById('root')
);
