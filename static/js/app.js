angular.module('app', ['angular.filter'])
.controller('PatientListController', function ($scope) {
  $scope.search = '';
  $scope.data = [
      {name: 'Jaleshwar & Neeta', table: 33},
      {name: 'Mukesh Shrestha & Family', table: 33},
      {name: 'Uttam Shrestha', table: 33},
      {name: 'Laxmi Joshi', table: 33},

      {name: 'Roshan Shrestha  & Family', table: 44},
      {name: 'Binod Shrestha & Family', table: 44},
      {name: 'Shrawan Shrestha ', table: 44},
      {name: 'Purna T, Ukar', table: 44},

      {name: 'Nirakar Shrestha', table: 49},
      {name: 'Naiza Agrawal', table: 49},
      {name: 'Pramod Shrestha', table: 49},
      {name: 'Kamala Lama', table: 49},
      {name: 'Dwarika Joshi', table: 49},

      {name: 'Santi Shrestha, Family', table: 34},

      {name: 'Ram P. Shrestha', table: 42},
      {name: 'Yp Shrestha', table: 42},
      {name: 'Manish, Pritma Shrestha', table: 42},
      {name: 'Navaraj Shrestha ', table: 42},

      {name: 'Mithila Bajracharya & Family', table: 50},
      {name: 'Shyam Shrestha & Family', table: 50},
      {name: 'Suresh Shrestha, Family', table: 50},

      {name: 'Samjhana Joshi & Party', table: 35},
      {name: 'Sanam', table: 35},
      {name: 'Alina,Samindra', table: 35},
      {name: 'Mausam Shrestha', table: 35},

      {name: 'David, Tinsley Giese', table: 36},
      {name: 'Andrew Mark, Katherine', table: 36},
      {name: 'Dr. Mitch Davis, Dr. Athra Kaviani', table: 36},
      {name: 'Dr. Todd Wilson', table: 36},
      {name: 'Derek Norman', table: 36},

      {name: 'Fritz, Yvonne Norman', table: 43},
      {name: 'Jerry Tecker', table: 43},
      {name: 'Franchi & Family', table: 43},




      {name: 'Nirmal Shrestha  & Family', table: 57},
      {name: 'Reema Shrestha', table: 57},
      {name: 'Asha Amatya & Family', table: 57},

      {name: 'Hem Pathak ', table: 44},
      {name: 'Rajeshwar Niraula ', table: 44},
      {name: 'Rachana ', table: 44},
      {name: 'Himesh Oli', table: 44},

      {name: 'Sanskriti Shrestha', table: 52},
      {name: 'Nabin Bhanja ', table: 52},
      {name: 'Anjan Shrestha', table: 52},

      {name: 'Devaraj Neupane', table: 29},
      {name: 'Suresh Pokherel ', table: 29},
      {name: 'Gehendra Kc', table: 29},
      {name: 'Prabhu Paudel ', table: 29},
      {name: 'Prem Pandey', table: 29},

      {name: 'Dr Surendra Rajbhandari', table: 37},
      {name: 'Suman Shrestha ', table: 37},
      {name: 'Puskar Shaili Pradhan', table: 37},

      {name: 'Mani Pradhan ', table: 45},
      {name: 'Manila Shrestha ', table: 45},
      {name: 'Subash Puri', table: 45},

      {name: 'Saru Adhikari & Group', table: 53},

      {name: 'Puja Shrestha ', table: 30},
      {name: 'Anil Pyakurel ', table: 30},
      {name: 'Balbhai ', table: 30},

      {name: 'Bisnu Pahadi', table: 38},
      {name: 'Kala Di ', table: 38},
      {name: 'Piya Rabin', table: 38},

      {name: 'Sita Samu Shrestha', table: 46},
      {name: 'Arina Bhadel', table: 46},

      {name: 'Sudarshan Dhital & Barsha', table: 54},
      {name: 'Tirtha & Indu ', table: 54},

      {name: 'Sharmila Subedi ', table: 31},
      {name: 'Kamal & Reema Adhikari', table: 31},
      {name: 'Binod Shrestha & Family', table: 31},

      {name: 'Manmohan Singh', table: 39},
      {name: 'Anil & Sima ', table: 39},
      {name: 'Rupak Rauniyar ', table: 39},
      {name: 'John Bhai & Nasrin', table: 39},


      {name: 'Keshab Bhusal', table: 47},
      {name: 'Balkrishna Baniya ', table: 47},
      {name: 'Sanjaya Shrestha', table: 47},

      {name: 'Bishnu & Yagya ', table: 55},

      {name: 'Dr Ravikanta Parmar & Daughter', table: 32},
      {name: 'Aarik Dessaso  ', table: 32},

      {name: 'Shailesh Bhai ', table: 40},
      {name: 'Grace', table: 40},
      {name: 'Dr David Worley', table: 40},
      {name: 'Jeff & Angela Knauss', table: 40},

      {name: 'Deepak ', table: 48},
      {name: 'Tara Baral', table: 48},
      {name: 'Shesh ', table: 48},
      {name: 'Iroj Ghimire', table: 48},
      {name: 'Puru Kasaju', table: 48},

      {name: 'Amra ', table: 56},
      {name: 'Imran Bhai', table: 56},

      {name: 'Dhanen Shrestha & Friends', table: 56},
      {name: 'Rabindra Shrestha & Family', table: 56},

      {name: 'Anju Shrestha', table: 28},
      {name: 'Suja &  Anita Basu ', table: 28},
      {name: 'Punam', table: 28},

      {name: 'Kumar', table: 57},
      {name: 'Billy ', table: 57},
      {name: 'Suchitra,Nisha', table: 57},

      {name: 'Rev. Saju Mathew &  Family', table: 19},
      {name: 'Rev. Johnson Unnithan & Family', table: 19},
      {name: 'Rev. Mathew Joseph & Valsamma', table: 19},

      {name: 'Bobby, Amy & Family', table: 1},
      {name: 'Tommy, Susan & Family', table: 1},
      {name: 'P.T. Chacko & Mary Kutty', table: 1},

      {name: 'Binu, Manimol & Family', table: 9},
      {name: 'Babychan & Alicekutty', table: 9},
      {name: 'Tommy Abraham & Family', table: 9},

      {name: 'Thomas Pallikunnel', table: 17},
      {name: 'Phillip Abraham (Shibu) & Family', table: 17},
      {name: 'Mathew Eapen, Salamma & Family', table: 17},
      {name: 'Kunjumon & Kunjumol', table: 17},
      {name: 'Scaria Chandi & Family', table: 17},

      {name: 'Aby, Nancy & Family', table: 2},
      {name: 'Binoy, Amy & Family', table: 2},

      {name: 'Samji & Shirley', table: 10},
      {name: 'Akash & Shilpa', table: 10},
      {name: 'Renji & Shanty', table: 10},
      {name: 'Shaji & Elson', table: 10},
      {name: 'Susan Kanjirappallil & Raina', table: 10},

      {name: 'Sabu, Jincy & Family', table: 18},
      {name: 'Achankunju & Sofie', table: 18},
      {name: 'Rinesh & Shikha', table: 18},
      {name: 'Thomas Rajan & Jessy', table: 18},

      {name: 'Varkey T. Varkey & Aliyamma', table: 6},
      {name: 'Saban P. Samuel & Kunjumol', table: 6},
      {name: 'Varghese Kunchacko & Family', table: 6},
      {name: 'T.V. Mathew & Elizabeth', table: 6},
      {name: 'Mathew P. Varghese & Mary', table: 6},

      {name: 'Abraham Mathai & Legi', table: 14},
      {name: 'Joy N. Samuel & Sally', table: 14},
      {name: 'Monachan Thomas & Marykutty', table: 14},
      {name: 'Thomas Keerikattu & Suja', table: 14},
      {name: 'Zacharia Koshy & Grace', table: 14},

      {name: 'John Varghese & Rachel', table: 8},
      {name: 'Johnson Varghese', table: 8},
      {name: 'Jaison', table: 8},
      {name: 'Aji George Varghese & Ruby', table: 8},
      {name: 'George John & Lalimol', table: 8},
      {name: 'Alexander Samuel & Sheela', table: 8},

      {name: 'Alexander Samuel, Lizzy & Lincy', table: 20},
      {name: 'Sam & Sheryl', table: 20},
      {name: 'Thomas Abraham & Alicekutty', table: 20},
      {name: 'John Philip & Ajini', table: 20},
      {name: 'Saji Pullad ', table: 20},

      {name: 'Koshy Thekkethundiyil & Rachel', table: 7},
      {name: 'Thomas Mathew & Ancy', table: 7},
      {name: 'Peter V. John & Aliyamma', table: 7},
      {name: 'Jose K. George & Shobha', table: 7},
      {name: 'Raju Karikkottu & Elizabeth', table: 7},

      {name: 'Abraham Chacko & Sara', table: 5},
      {name: 'Benny Thankachan & Shiji', table: 5},
      {name: 'Joseph Varghese & Betzy', table: 5},
      {name: 'George M. Abraham & Leena', table: 5},
      {name: 'Varghese Idikkula & Mercy', table: 5},

      {name: 'M.A. Varghese & Anna', table: 11},
      {name: 'Rony Mathew & Lizza', table: 11},
      {name: 'Thomas Mathew & Susan', table: 11},
      {name: 'Joseph James & Annamma        ', table: 11},
      {name: 'Philp George & Amminiamma', table: 11},

      {name: 'Reji K. Varghese & Kunjumol & Rubin', table: 21},
      {name: 'Varghese Philip & Terrin ', table: 21},
      {name: 'Abraham P. Varghese (2)', table: 21},
      {name: 'Mathew Scaria & Lizzy ', table: 21},
      {name: 'Sruthy Kunchacko', table: 21},

      {name: 'Philip Abraham & Mariamma ', table: 25},
      {name: 'Thomas Thyparampil & Sarah ', table: 25},
      {name: 'P.M. Jacob & Annamma ', table: 25},
      {name: 'John P. Mathew & Annie ', table: 25},
      {name: 'Mathew Philip & Annie ', table: 25},

      {name: 'Alex Varghese & Reena ', table: 13},
      {name: 'Sam Thomas, Omana, Sheba & Shawn', table: 13},
      {name: 'Mammen Mathew, Susan & Sisters', table: 13},

      {name: 'Jacob Chacko, Annie & Family', table: 15},
      {name: 'Jomon, Beena & Sosamma ', table: 15},
      {name: 'Mathew Zachariah & Rosie ', table: 15},
      {name: 'Jose Abraham ', table: 15},

      {name: 'Shibu John & Ancy ', table: 23},
      {name: 'Jogy John & Lydia ', table: 23},
      {name: 'Scaria Chandy & Family ', table: 23},
      {name: 'Abraham Mathew & Anitha', table: 23},
      {name: 'John Kumar & Susamma ', table: 23},

      {name: 'Bhasilal Mathai & Valsa ', table: 27},
      {name: 'Kurian T. Idiculla & Aliyamma ', table: 27},
      {name: 'Abraham & Beena ', table: 27},
      {name: 'Melby & Bincy ', table: 27},
      {name: 'Cherian Zacharia & Annamma ', table: 27},

      {name: 'Samuel Koshy & Annamma ', table: 22},
      {name: 'Thomas Varghese, Daisy, Sibil & Sharon', table: 22},
      {name: 'Reji V. Kurian & Mini ', table: 22},
      {name: 'Mohan Thomas & Mariamma ', table: 22},

      {name: 'Viju Varghese & family ', table: 4},
      {name: 'Dinny Kunchumon & family ', table: 4},
      {name: 'Salomy ', table: 4},
      {name: 'Siby, Chikku & Chinnu ', table: 4},

      {name: 'Mathew Daniel & Mariamma ', table: 16},
      {name: 'Rajan Daniel & Regeena', table: 16},
      {name: 'M.M. Thomas & Mollykutty ', table: 16},
      {name: 'Joseph Chandy & Mariamma ', table: 16},
      {name: 'John P. Thomas & Mariamma ', table: 16},

      {name: 'Nikhil Thomas', table: 3},
      {name: 'Eduardo Aguilar', table: 3},
      {name: 'Tony Nguyen', table: 3},
      {name: 'Francisco Barbosa', table: 3},
      {name: 'Jesus Barbosa', table: 3},
      {name: 'Aadina Shareef', table: 3},
      {name: 'Eric Wong', table: 3},
      {name: 'Namit Jain', table: 3},
      {name: 'Trevor Johnson', table: 3},
      {name: 'Hamza Ahmed', table: 3},

      {name: 'Mario and Family', table: 24},
      {name: 'Giji and Lally', table: 24},
      {name: 'Mathew Thomas & Sosamma ', table: 24},
      {name: 'Benil & Emilyn', table: 24},
      {name: 'Raju Ninan & Reni mol ', table: 24},


      {name: 'Anela Arif & family ', table: 12},
      {name: 'Ayesha Mahmood & family ', table: 12},

      {name: 'Marwah Khalil & family ', table: 26},
      {name: 'Annie ', table: 26}
  ]
});
